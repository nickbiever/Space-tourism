import Layout from '../components/layout';
import { loadFile } from './api/loadFile';

export default function Crew({ crew }) {
  return (
    <>
      <Layout backgroundImage={'/../public/crew/background-crew-desktop.jpg'}>
        <h1 className='text-white'>Hello crew</h1>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const crew = await loadFile('/json/crew.json');

  return {
    props: {
      crew,
    }
  }
}
