"use client";
import Link from "next/link";
import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import "./navabr.css";
export default function Navbar() {
    var [navbarA, setnavbarA] = useState(true);
    return (
        <div>
            <div className="bg-white h-20 w-full fixed"></div>
            <nav className="fixed right-0 left-0 top-5 z-10 glass flex justify-between rounded-t-lg px-5 sm:px-10 py-2 sm:py-2 mx-5 sm:mx-10  items-center">
                <div className="font-black text-4xl" id="right_nav">
                    <Link href="/">GD</Link>
                </div>
                <div className="block sm:hidden" id="left_nav">
                    <button
                        onClick={() => {
                            setnavbarA(!navbarA);
                        }}
                        className="btn"
                    >
                        <Hamburger size={20} label="Show menu" />
                    </button>
                </div>
                <div className="hidden gap-5 sm:flex ">
                    <Link
                        className="hover:bg-neutral-200 px-5 py-3 rounded-lg"
                        href="/about"
                    >
                        About
                    </Link>
                    <Link
                        className="hover:bg-neutral-200 px-5 py-3 rounded-lg"
                        href="/projects"
                    >
                        Projects
                    </Link>
                    <Link
                        className="hover:bg-neutral-200 px-5 py-3 rounded-lg"
                        href="/contact"
                    >
                        Contact
                    </Link>
                </div>
            </nav>
            <div>
                <div
                    className={`z-10 justify-around fixed top-24 h-full bg-black opacity-90  items-center text-white flex-col text-center  px-3  right-0 left-0 py-16 rounded-b-lg sm:hidden ${
                        navbarA ? "hidden " : "flex "
                    }`}
                >
                    <div className="">
                        <Link
                            className=" flex text-4xl px-10 p-3 my-3 hover:bg-neutral-800"
                            href=""
                        >
                            About
                        </Link>
                        <Link
                            className=" flex text-4xl px-10 p-3 my-3 hover:bg-neutral-800"
                            href=""
                        >
                            Projects
                        </Link>
                        <Link
                            className=" flex text-4xl px-10 p-3 my-3 hover:bg-neutral-800"
                            href=""
                        >
                            Contact
                        </Link>
                    </div>
                    <div className="text-lg flex flex-row">
                        <Link href="/">Instagram</Link>
                        <Link href="/">Facebook</Link>
                        <Link href="/">Github</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
