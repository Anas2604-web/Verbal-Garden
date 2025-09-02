import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Box } from 'lucide-react';
import { CirclePlay } from 'lucide-react';



export default function Login() {
    return (
        <>
        <Navbar/>
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="mt-15 border-2 border-green-500 shadow-2xl rounded-2xl p-7 w-[500px] mr-30 ">
                <h1 className="text-3xl font-bold text-center text-green-600 mb-6">Welcome Back</h1>
                <form method="POST" className="space-y-5">
                    <div>
                        {/* <label className="block text-gray-700 mb-1 font-medium">Email</label> */}
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter your email"
                            required
                            className="text-black w-full px-4 py-2 border-2 border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <div>
                        {/* <label className="block text-gray-700 mb-1 font-medium">Password</label> */}
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                            className="text-black w-full px-4 py-2 border-2 border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>


                    <div className="w-full pl-4.5 pt-1 text-center border-2 border-green-200 rounded-3xl text-green-500 font-bold h-10 hover:text-white hover:bg-green-600">
                        <Link to="d"><button >Login</button></Link>
                    </div>


                    <div className="text-center">
                        <p>Don't have an account ? <Link to="/Signup">Signup</Link></p>
                    </div>



                    <div className="text-center font-bold">
                        <Link><p>Forgot Password</p></Link>
                    </div>

                    <div className="text-center border-2 border-green-200 rounded-xl text-green-500 font-bold h-10 hover:text-white hover:bg-green-600">
                        <Link><button className="pt-1">Google</button></Link>
                    </div>
                </form>
            </div>


            {/* image */}
            <div className="mt-16 bg-gradient-to-b from-green-100 to-green-300 w-[600px] min-h-screen mb-0.5">
                <div className="">
                    <h1 className="pt-7 font-bold text-green-800 text-4xl pl-15">Welcome to</h1>
                    <span className="flex justify-center-safe text-green-950 font-bold text-4xl leading-14">Virual Herbal Garden</span>
                    <p className="pt-3 text-lg pl-16 pr-10">Eplore medicinal plants in 3D, learn about their benefits, discover the connection between nature and healing.</p>
                    <img src="./assets/Images/loginImage.png" alt="image" className="h-[400px] flex justify-self-center-safe pt-5" />
                    <div className="flex gap-2">
                        <Box className=" ml-10 mt-1"/>
                        <h3 className=" text-xl font-medium pb-2">Interactive 3D plant models</h3>
                    </div>
                    <div className="flex gap-2">
                        <CirclePlay className="ml-10 mt-1"/>
                        <h3 className=" text-xl font-medium pb-7">Videos & audio narrations</h3>
                    </div>
                </div>
            </div>
        </div>

        {/* footer */}
        <Footer/>
        </>
    );
}
