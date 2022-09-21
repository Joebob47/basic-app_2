import Head from 'next/head';
import Link from 'next/link';

// The !home part says if you're not home, output link to go back home
export default function Layout( { children, home } ) {
  return (
    <div>
      <Head>
        <title>Basic Next.js App</title>
      </Head>
      <header>
        <nav className="text-center mx-auto">
          <h1>Employee Records</h1>
        </nav>
      </header>
      <main>{children}</main>
      {!home && (
      <div class="text-center">
          <Link href="/">
            <a class="btn btn-primary mt-3">← Back to home</a>
          </Link>
        </div>
        )
      }
      <footer class="text-center pt-2">
        <p>Basic-App</p>
      </footer>
    </div>
  );
}