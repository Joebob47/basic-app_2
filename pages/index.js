import Head from 'next/head';
import Link from 'next/link';
import { getSortedList } from '../lib/data';
import Layout from '../components/layout';

export async function getStaticProps() {
  const allData = getSortedList();
  return {
    props: {
      allData
    }
  }
}
export default function Home({ allData }) {
  return (
<Layout home>
        <h1 class="text-center">List of Names</h1>
        <div className="list-group text-center">
          {allData.map(({ id, name }) => (
            <Link key={id} href={`/${id}`}>
              <a className="list-group-item list-group-item-action">{name}</a>
            </Link>
          ))}
        </div>
</Layout>
  );
}
