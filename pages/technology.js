import { loadFile } from './api/loadFile';

export default function Crew({ technology }) {
  return (
    <h1>Hello technology</h1>
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
