import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Login() {
    return (
        <>
        <Navbar/>
        <div className="min-h-screen bg-gradient-to-r from-green-100 to-green-300 flex items-center justify-center px-4">
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-green-600 mb-6">Login</h1>
                <form method="POST" className="space-y-5">
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            required
                            className="text-black w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                            className="text-black w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Mobile Number</label>
                        <input
                            type="number"
                            name="Number"
                            placeholder="Enter your number"
                            required
                            className="text-black w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <div>
                        <input
                            type="submit"
                            value="Login"
                            className="w-full bg-green-500 text-white py-2 rounded-xl font-semibold hover:bg-green-600 transition-all duration-200 cursor-pointer"
                        />
                    </div>
                </form>
            </div>
        </div>

        {/* footer */}
        <Footer/>
        </>
    );
}
