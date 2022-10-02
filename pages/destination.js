import Layout from '../components/layout'
import { loadFile } from './api/loadFile';

export default function Destination({ destination }) {
  return (
    <>
      <Layout backgroundImage={'/../public/destination/background-destination-desktop.jpg'}>
        <h1 className='text-white'>Hello destination</h1>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const destination = await loadFile('/json/destinations.json');

  return {
    props: {
      destination,
    }
  }
}
