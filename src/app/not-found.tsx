'use client';

import Link from 'next/link'

export default function NotFound() {
    return (
        <html lang="en">
            <body>
                <div>
                    <h2>Not Found</h2>
                    <p>Could not find requested resource</p>
                    <Link href="/">Return Home</Link>
                </div>
            </body>
        </html>
    );
}