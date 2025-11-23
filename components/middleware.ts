import { NextRequest, NextResponse } from 'next/server';

export const config = {
    matcher: ['/:path*'], // Aplikovat na celou stránku
};

export function middleware(req: NextRequest) {
    // Získání přihlašovacích údajů z hlavičky
    const basicAuth = req.headers.get('authorization');
    const url = req.nextUrl;

    if (basicAuth) {
        const authValue = basicAuth.split(' ')[1];
        const [user, pwd] = atob(authValue).split(':');

        // ZDE NASTAVTE SVÉ HESLO A JMÉNO
        // Ideálně použijte proměnné prostředí (process.env.USER a process.env.PASSWORD)
        if (user === 'admin' && pwd === 'tajneheslo') {
            return NextResponse.next();
        }
    }

    url.pathname = '/api/auth';

    return new NextResponse('Auth Required.', {
        status: 401,
        headers: {
            'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
    });
}