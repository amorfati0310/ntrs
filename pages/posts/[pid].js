import { useRouter } from 'next/router'
import Link from 'next/link'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query
  const pids = ['id1', 'id2', 'id3']
  return (
    <>
      <h1>POST: {pid}</h1>
      {
        pids.map((pid) => (
          <Link href="/posts/[pid]" as={`/posts/${pid}`}>
            <a>Post {pid}</a>
          </Link>
        ))
      }
    </>
  )
  
}

export default Post