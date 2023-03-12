import axios from "axios"
import { useEffect } from "react"

export default function Lol(props) {
  console.log(props)

  useEffect(() => {
    console.log("lol")
    const fetchProjects = async () => {
      const res = await axios.get("https://justdesignfx.com/jd-admin/services/home/latestWorks.php")
      return res.data
    }

    fetchProjects().then((res) => {
      console.log(res)
    })
  }, [])

  return <div>Lol</div>
}

// export async function getStaticProps(context) {
//   let projects

//   const fetchProjects = async () => {
//     const res = await axios.get("https://justdesignfx.com/jd-admin/services/home/latestWorks.php")
//     return res.data
//   }

//   fetchProjects().then((res) => {
//     console.log(res)
//     projects = res
//   })

//   return {
//     props: { projects: projects }, // will be passed to the page component as props
//   }
// }
