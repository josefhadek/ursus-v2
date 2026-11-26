<?php
// Statický web VLK Ursus na LebedaHostingu.
//
// Nahrazuje index.php WordPressu: server posílá na index.php úvodní stránku
// i všechny adresy, které neexistují jako soubor (staré odkazy WordPressu).
// Funguje nezávisle na tom, jestli server čte .htaccess.
// Původní WordPress zůstává na serveru, jen se už nespouští.

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
    header('Cache-Control: public, max-age=0, must-revalidate');
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

serve(__DIR__ . '/404.html', 404);
