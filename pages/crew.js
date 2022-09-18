import { loadFile } from './api/loadFile';

export default function Crew({ crew }) {
  return (
    <h1>Hello crew</h1>
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
