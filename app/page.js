import Image from "next/image";
import "./temp.css";
import "./bakcground.css";
import gif from "../public/giphy.gif";
import Background from "./background";
import Link from "next/link";
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col px-8 py-0 sm:px-14 sm:py-20">
            <h1 className="heading mb-4 sm:ml-8 pt-6 sm:pt-12 font-bold text-8xl ">
                <span className="heading font-bold text-2xl ">I'm</span> Gaurav
                Dhyani
            </h1>
            <div className="">
                <div>
                    {/* border-2 border-dotted */}
                    <h1 className=" display_text pt-4 sm:px-8 sm:w-1/2">
                        Welcome to my digital playground, where creativity meets
                        technology! I'm a web developer armed with React.js,
                        Next.js, Node.js, and Python. Let's transform your
                        online presence into a captivating experience that
                        engages users and delivers exceptional results. Ready to
                        make magic happen? Let's collaborate and create
                        something extraordinary together!
                    </h1>
                </div>
                <div className="relative top-72 right-12 sm:absolute sm:top-80 sm:right-56 -z-20">
                    <Background />
                </div>
            </div>
            <div className="absolute bottom-5 sm:bottom-10  border-b-2 sm:ml-6 sm:px-2 hover:border-black ">
                <Link href="" className="font-lighter">
                    Scroll for About ----{`>`}
                </Link>
            </div>
        </main>
    );
}
