import Post from "./Post"

export default function posts() {
  return (
    <div className='posts flex flex-wrap w-[80%] m-5 font-secondary'>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>

  )
}
