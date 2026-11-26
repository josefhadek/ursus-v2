<?php
// Statický web VLK Ursus na LebedaHostingu.
//
// Nahrazuje index.php WordPressu. Server sem posílá všechny adresy,
// které neexistují jako soubor:
//  1. staré stránky WordPressu, které nový web nahradil → 301 na sekci webu,
//  2. /tym apod. → statické HTML nového webu,
//  3. všechno ostatní (staré články, archiv) → původní WordPress,
//     aby odkazy z Googlu a odjinud dál fungovaly; když WordPress
//     stránku nezná, vrátí se 404 nového webu.

$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
$path = '/' . trim(rawurldecode($path), '/');

// Staré adresy WordPressu → sekce nového webu (301 = trvale, kvůli SEO)
$redirects = [
    '/ursus-2027'    => '/#terminy',
    '/tym-ursu'      => '/#tym',
    '/o-kurzu'       => '/#o-kurzu',
    '/o-nas'         => '/#o-kurzu',
    '/prihlaska'     => '/#prihlaska',
    '/prihlasky'     => '/#prihlaska',
    '/prihlaseni'    => '/#prihlaska',
    '/kontakt'       => '/#kontakt',
    '/kontakty'      => '/#kontakt',
    '/faq'           => '/#faq',
    '/caste-otazky'  => '/#faq',
    '/stezka'        => '/#kapitoly',
    '/cesta-ursu'    => '/#kapitoly',
    '/feed'          => '/',
    '/comments/feed' => '/',
];

if (isset($redirects[$path])) {
    header('Location: ' . $redirects[$path], true, 301);
    exit;
}

function serve(string $file, int $status = 200): void
{
    http_response_code($status);
    header('Content-Type: text/html; charset=utf-8');
    header('Cache-Control: no-store');
    readfile($file);
    exit;
}

if ($path === '/' || $path === '/index.php' || $path === '/index.html') {
    serve(__DIR__ . '/index.html');
}

// /tym → tym.html (export Next.js)
if (preg_match('#^/[a-z0-9-]+$#', $path) && is_file(__DIR__ . $path . '.html')) {
    serve(__DIR__ . $path . '.html');
}

// Staré články a stránky → WordPress (pokud na serveru je)
$wp = __DIR__ . '/wp-blog-header.php';
if (is_file($wp)) {
    define('WP_USE_THEMES', true);
    ob_start();
    require $wp;
    $html = ob_get_clean();
    if (function_exists('is_404') && is_404()) {
        serve(__DIR__ . '/404.html', 404);
    }
    echo $html;
    exit;
}

serve(__DIR__ . '/404.html', 404);
