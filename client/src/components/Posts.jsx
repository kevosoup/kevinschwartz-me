import Post from "./Post"

export default function posts( {posts}) {
  return (
    <div className='posts flex flex-wrap w-[80%] m-5 font-secondary'>
        {posts.map(p => (
          <Post post={p}/>
        ))}
    </div>

  )
}
