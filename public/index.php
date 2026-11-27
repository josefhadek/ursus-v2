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

$ursus_path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
$ursus_path = '/' . trim(rawurldecode($ursus_path), '/');

// Staré adresy WordPressu → sekce nového webu (301 = trvale, kvůli SEO)
$ursus_redirects = [
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
    '/stezka'        => '/#stezka',
    '/cesta-ursu'    => '/#stezka',
    '/feed'          => '/',
    '/comments/feed' => '/',
];

if (isset($ursus_redirects[$ursus_path])) {
    header('Location: ' . $ursus_redirects[$ursus_path], true, 301);
    exit;
}

function ursus_serve(string $file, int $status = 200): void
{
    http_response_code($status);
    header('Content-Type: text/html; charset=utf-8');
    header('Cache-Control: no-store');
    readfile($file);
    exit;
}

if ($ursus_path === '/' || $ursus_path === '/index.php' || $ursus_path === '/index.html') {
    ursus_serve(__DIR__ . '/index.html');
}

// /tym → tym.html (export Next.js)
if (preg_match('#^/[a-z0-9-]+$#', $ursus_path) && is_file(__DIR__ . $ursus_path . '.html')) {
    ursus_serve(__DIR__ . $ursus_path . '.html');
}

// Staré články a stránky → WordPress (pokud na serveru je)
// Proměnná se nesmí jmenovat $wp – WordPress ji používá jako globální objekt.
$ursus_wp_header = __DIR__ . '/wp-blog-header.php';
if (is_file($ursus_wp_header)) {
    define('WP_USE_THEMES', true);
    ob_start();
    require $ursus_wp_header;
    $ursus_html = ob_get_clean();
    if (function_exists('is_404') && is_404()) {
        ursus_serve(__DIR__ . '/404.html', 404);
    }
    echo $ursus_html;
    exit;
}

ursus_serve(__DIR__ . '/404.html', 404);
