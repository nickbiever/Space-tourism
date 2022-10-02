import Layout from '../components/layout';
import { loadFile } from './api/loadFile';

export default function Crew({ technology }) {
  return (
    <>
      <Layout backgroundImage={'/../public/technology/background-technology-desktop.jpg'}>
        <h1 className='text-white'>Hello technology</h1>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const technology = await loadFile('/json/technology.json');

  return {
    props: {
      technology,
    }
  }
}
