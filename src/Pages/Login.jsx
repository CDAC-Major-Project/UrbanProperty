import BlackLogo from "../assets/logos/black_logo.png"

const Login = () => {
  return (
    <div className='w-screen h-screen bg-[#E8F0FE] flex items-center justify-center' >
        <div className=' px-10 bg-white shadow-xl w-1/3 h-3/4 rounded-4xl shadow-gray-600 flex flex-col items-center justify-center' >
            <div>
                <img src={BlackLogo} className="w-2/3 mx-auto" />
                <h1 className="font-bold text-[#253F7C] text-3xl " >Welcome to UrbanBid</h1>
            </div>

            <div className="mt-4">
                <lable>
                    <span className="text-[#253F7C] font-semibold">Email</span>
                    <input type="text" className="border p-2 w-full mb-4" />
                </lable>
                <lable>
                    <span className="text-[#253F7C] font-semibold">Password</span>
                    <input type="password" className="border p-2 w-full mb-4" />
                </lable>
                <button className="cursor-pointer bg-[#253F7C] w-full font-semibold text-white py-2 px-4 rounded">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login