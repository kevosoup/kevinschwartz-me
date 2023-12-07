import Sidebar from "../components/Sidebar"

export default function Settings() {
  return (
    <div className="settings | flex">
        <div className="settingsWrapper | w-[80%] m-5 font-secondary ">
            <div className="settingsTitle | flex justify-between">
                <span className="settingsUpdateTitle | postTitle font-primary text-lg">Update Your Account</span>
                <span className="settingsDeleteTitle | bg-red-800 p-2 rounded text-white text-xs font-primary cursor-pointer uppercase">Delete Account</span>
            </div>
            <form action="" className="settingsForm">
                <label htmlFor="" className="tracking-tight text-xs text-gray-800 uppercase font-bold">Profile Picture</label>
                <div className="settingsPP mb-2 | flex items-center">
                    <img src="https://via.placeholder.com/100x100" alt="" />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon ml-5 cursor-pointer fa-solid fa-user"></i>
                    </label>
                    <input type="file" id="fileInput" className="hidden" />
                </div>
                <div className="space-y-2">
                    <div className="flex flex-col w-[150px]">
                        <label className="text-xs uppercase tracking-tight text-gray-600 font-bold" htmlFor="Username">Username</label>
                        <input type="text" placeholder="username" className="border" />
                    </div>

                    <div className="flex flex-col w-[200px]">
                        <label className="text-xs uppercase tracking-tight text-gray-600 font-bold" htmlFor="Email">Email</label>
                        <input type="email" placeholder="kevosoup@gmail.com" className="border"/>
                    </div>

                    <div className="flex flex-col w-[150px]">
                        <label className="text-xs uppercase tracking-tight text-gray-600 font-bold" htmlFor="Password">Password</label>
                        <input type="password" className="border"/>
                    </div>

                    <div>
                        <button className="settingsSubmit | text-xs font-primary uppercase rounded p-2 text-white bg-green-700 cursor-pointer mx-auto">Update</button>
                    </div>
                </div>

            </form>
        </div>
        <Sidebar />
    </div>
  )
}
