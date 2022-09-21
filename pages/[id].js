import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllIds();
  return {
    paths,
    fallback: false
  };
}
export default function Entry({ itemData }) {
  return (
    <Layout>
      {/* render details about one entity in persons.json saved in itemData */}
      <article className="mx-auto p-6 card col-6">
        <h2 class="text-center">Person Detail</h2>
        <div className="card-body text-center">
          <h5 className="card-title">{itemData.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{itemData.phone}</h6>
          <p className="card-text">{itemData.birthdate}</p>
          <a href={'mailto:' + itemData.email} className="card-link">{itemData.email}</a>
        </div>
      </article>
      {/* render details about all other entities in persons.json related to id */}
      <div className="list-group col-6 mx-auto">
        {/* check for existence of itemData.related property */}
        {itemData.related ? 
          <h2 class="text-center">Emergency Contact(s)</h2> : null
        }
        {itemData.related ? 
          itemData.related.map(
            ({ id, name }) => (
              <div class="text-center mt-6">
              <Link key={id} href={`/${id}`}>
                <a className="list-group-item list-group-item-action">{name}</a>
              </Link>
                </div>
            )
          )
          : null
        }
        {/* using expression ? ... : null */}
      </div>
    </Layout>
  );
}