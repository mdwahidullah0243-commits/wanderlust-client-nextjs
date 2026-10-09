import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers';

export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    console.log('session:', session);

    if (!session) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
};

export const config = {
    matcher: [
        '/admin/add-new-travel-package',
        '/my-bookings/user/:path*',
        '/destination-details/:path*'
    ],
}