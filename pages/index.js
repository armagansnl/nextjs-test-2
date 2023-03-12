import Link from "next/link"

export default function Home({ projects }) {
  return (
    <div>
      home
      <Link href="/lol">to lol</Link>
      {projects.map((project) => (
        <li>{project.title}</li>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://justdesignfx.com/jd-admin/services/home/latestWorks.php")
  const projects = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      projects,
    },
  }
}
