import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

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
                            className="text-black w-full px-4 py-2 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <div>
                        {/* <label className="block text-gray-700 mb-1 font-medium">Password</label> */}
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                            className="text-black w-full px-4 py-2 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>


                    <div className="bg-green-500 w-20 rounded-2xl h-8 ml-33">
                        <Link to="d"><button className="pl-5.5 pt-0.5 text-white font-bold">Login</button></Link>
                    </div>


                    <div className="text-center">
                        <p>Don't have an account ? <Link to="/Signup">Signup</Link></p>
                    </div>



                    <div className="text-center font-bold">
                        <Link><p>Forgot Password</p></Link>
                    </div>

                    <div className="text-center border-2 rounded-lg h-10">
                        <Link><button className="pt-1">Google</button></Link>
                    </div>
                </form>
            </div>


            {/* image */}
            <div className="bg-gradient-to-b from-green-100 to-green-300 w-[550px] min-h-screen">
                <div className="">
                    <h1>hello</h1>
                </div>
            </div>
        </div>

        {/* footer */}
        <Footer/>
        </>
    );
}
