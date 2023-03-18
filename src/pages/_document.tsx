/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <link
                    rel='preconnect'
                    href='https://fonts.googleapis.com'
                />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Sono:wght@200;300;400;500;600;700;800&display=swap'
                    rel='stylesheet'
                />
                <link
                    rel='icon'
                    href='/logo.png'
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
