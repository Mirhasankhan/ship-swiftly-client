import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        // footer section start
        <div className="bg-gray-50 sm:pt-8 lg:pt-16">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8 space-y-3">
                        <img
                            className="w-12 h-12 rounded-full cursor-pointer"
                            src="/ship.jpg"
                            alt=""
                        />
                        <h3 className="font-semibold text-2xl">ShipSwiftly</h3>
                        <p className="text-base leading-relaxed text-gray-600 py2">
                            Ship Swiftly is your one-stop destination for all your shipping needs in Bangladesh. We offer a wide range of products shipping in different district of Bangladesh.
                        </p>
                        <h3 className="text-2xl font-semibold">Follow Us</h3>
                        <ul className="flex items-center space-x-3 mt-9">
                            <li>
                                <a
                                    href="https://www.facebook.com/mir.hasan.794/"
                                    target="_blank"
                                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-[#024E92] focus:bg-[#024E92]"
                                >
                                    <FaFacebook></FaFacebook>
                                </a>
                            </li>

                            <li>
                                <a
                                    href=""
                                    target="_blank"
                                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-[#024E92] focus:bg-[#024E92]"
                                >
                                    <FaInstagram />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.linkedin.com/in/mir-hasan-575b401b9/"
                                    target="_blank"
                                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-[#024E92] focus:bg-[#024E92]"
                                >
                                    <FaLinkedin />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                            Company
                        </p>

                        <ul className="mt-6 space-y-3">
                            <li>
                                <a
                                    href="#"
                                    title=""
                                    className="flex text-base text-black transition-all duration-200 hover:text-[#024E92] focus:text-[#024E92]"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    title=""
                                    className="flex text-base text-black transition-all duration-200 hover:text-[#024E92] focus:text-[#024E92]"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    title=""
                                    className="flex text-base text-black transition-all duration-200 hover:text-[#024E92] focus:text-[#024E92]"
                                >
                                    My Shippings
                                </a>
                            </li>                            
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                            Help
                        </p>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <a
                                    href="#"
                                    title=""
                                    className="flex text-base text-black transition-all duration-200 hover:text-[#024E92] focus:text-[#024E92]"
                                >
                                    Customer Support
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    title=""
                                    className="flex text-base text-black transition-all duration-200 hover:text-[#024E92] focus:text-[#024E92]"
                                >
                                    Delivery Details
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    title=""
                                    className="flex text-base text-black transition-all duration-200 hover:text-[#024E92] focus:text-[#024E92]"
                                >
                                    Terms & Conditions
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    title=""
                                    className="flex text-base text-black transition-all duration-200 hover:text-[#024E92] focus:text-[#024E92]"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8 space-y-4">
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                            Subscribe to newsletter
                        </p>
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                className="block w-full py-2 px-5 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-full focus:outline-none focus:border-[#024E92] caret-[#024E92]"
                            />
                        </div>
                        <button className="inline-flex items-center justify-center px-8 py-2 mt-3 font-semibold text-white transition-all duration-200 bg-[#024E92] rounded-full hover:bg-blue-700 focus:bg-blue-700">
                            Subscribe
                        </button>
                        <div>
                            <p className="font-semibold">Address</p>
                            44, Purana Paltan, Dhaka-1000
                            <br />
                            <span className="font-semibold">Email:</span>
                            <span href="#" className="text-blue-700">
                                {" "}
                                <a href="">ShipSwiftly2023@gmail.Com</a>
                            </span>
                            <br />
                            <span className="font-semibold">Helpline:</span>{" "}
                            <span>+880-1839033505</span>
                        </div>
                    </div>
                </div>

                <hr className="mt-16 mb-10 border-gray-200" />
                <p className="text-sm text-center text-gray-600 py-3">
                    © Copyright 2023, All Rights Reserved by ToyEmporium
                </p>
            </div>
        </div>
        // footer section end
    );
};

export default Footer;