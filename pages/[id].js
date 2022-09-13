import Head from 'next/head';
import Layout from '../components/layout';
import {getAllIds, getData} from '../lib/data';

//create an instance of getStaticProps to return data for one person
export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}

//create an instance of the getStaticPaths() function to report to Next all possible dynamic URLs.
//this function just returns an array of ids in a particular way with those params in it
export async function getStaticPaths() {
  const paths = getAllIds();
  return {
    paths,
    fallback: false
  };
}

//create a component to display all details about a person when a dynam. route matches
//itemData here will be the entire chunk of info for the specific id
//THIS FORMAT IS CONFUSING TO ME
export default function Entry({ itemData }) {
  return (
    <Layout>
      <article className="card col-6 mx-auto">
        <h5 class="text-center"> Employee </h5>
        <div className="card-body">
          <h5 className="card-title">{itemData[0].name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{itemData[0].phone}</h6>
          <p className="card-text">{itemData[0].birthdate}</p>
          <a href={'mailto:' + itemData[0].email} className="card-link">{itemData[0].email}</a>
        </div>
        
      </article>

            <article className="card col-6 mx-auto">
              <h5 class="text-center">Emergency Contact</h5>
        <div className="card-body">
          <h5 className="card-title">{itemData[1].name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{itemData[1].phone}</h6>
          <p className="card-text">{itemData[1].birthdate}</p>
          <a href={'mailto:' + itemData[1].email} className="card-link">{itemData[1].email}</a>
        </div>
        
      </article>
    </Layout>
  );
}