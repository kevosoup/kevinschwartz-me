export default function Write() {
  return (
    <div className='write | p-10 font-secondary'>
        <img src="https://placehold.it/1000x500" alt="" className='writeImg | w-[70vw] rounded h-[250px] mb-5 object-cover' />
        <form action="" className='writeForm | relative'>
            <div className="writeFormGroup | flex items-center">
                <label htmlFor="fileInput"></label>
                <i className="fa-solid fa-plus | w-6 h-6 flex items-center justify-center rounded-full border border-gray-500 text-gray-500 cursor-pointer"></i>
                <input type="file" id="fileInput" className='hidden'/>
                <input type="text" placeholder="Title" className="writeInput | ml-2 focus:outline-none font-primary text-xl" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." type="text" className="writeInput writeText | tracking-tight text-lg p-5 w-[70vw] h-[100vh] focus:outline-none">
                </textarea>
            </div>
            <button className="writeSubmit | absolute top-5 right-5 border-none bg-teal-900 p-2 rounded text-white text-sm font-primary cursor-pointer uppercase">Publish</button>
        </form>
    </div>
  )
}
