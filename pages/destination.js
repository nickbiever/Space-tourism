import { loadFile } from './api/loadFile';

export default function Destination({ destination }) {
  return (
    <h1>Hello destination</h1>
  )
}

export async function getStaticProps() {
  const destination = await loadFile('/json/destination.json');

  return {
    props: {
      destination,
    }
  }
}
