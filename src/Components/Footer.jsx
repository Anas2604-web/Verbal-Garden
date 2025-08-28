import {Facebook, Instagram, Linkedin, Twitter} from "lucide-react"
import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <footer>
            <div className="bg-green-600 w-full h-42 p-2 flex">
                {/* //quick links */}
                <div className="ml-23 text-white flex-1 font-bold">
                     <h3 className="mt-2">Quick Links</h3>
                     <ul className="list-none text-sm mt-2.5">
                     <li><Link to="/">Home</Link></li>
                     <li><Link to="/About">About us</Link></li>
                     <li><Link to="/plants">Explore Plants</Link></li>
                     <li><Link to="/tour">Virtual Tour</Link></li>
                     <li><Link to="/Contact">Contact</Link></li>
                     </ul>
                </div>

                {/* //contact */}
                <div className="flex-1 text-white font-bold">
                    <h4 className="mt-2">Contacts</h4>
                    <ul className="list-none mt-2.5 text-sm">
                    <li>Location: Jabalpur, Madhya Pradesh</li>
                    <li>Email:info@virtualherbalgarden.com</li>
                    <li>Phone:+91-XXXXXXXXXX</li>
                    </ul>
                </div>

                {/* //Folllow us */}
                <div className="flex-1 text-white font-bold" >
                    <h4 className="mt-2">Follow us</h4>
                    <p className="text-sm mt-2.5 font-bold">Facebook | Instragram | Twitter | Linkedin</p>
                    <div className="flex items-center ml-5 mt-3">
                        <Link to="/"><Facebook className="w-6 h-5"/></Link>
                        <Link to="/About"><Instagram className="w-6 h-5 ml-13.5"/></Link>
                        <Link to="/"><Twitter className="w-6 h-5 ml-12.5"/></Link>
                        <Link to="/"><Linkedin className="w-6 h-5 ml-9.5"/></Link>

                    </div>
                    
                </div>
            </div>

            {/* //bottom footer */}
            <div className="h-11 bg-green-950">
                <p className="text-sm text-center pt-3 text-white"> <span className="text-orange-500">@ Verbal hebal Garden</span>  All Rights Reserved. Designed by <span className="text-orange-500">Ministry Ayush</span></p>
            </div>
        </footer>
    )
}