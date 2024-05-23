import { Jersey_25, Pacifico, Rowdies, Space_Mono } from "next/font/google";
import Image from "next/image";
import Skills from "@/components/skills"
import Experiences from "@/components/experiences";
import SocialMedia from "@/components/socialmedia";
import AboutMe from "@/components/aboutme";
import AntDesignHtml5Filled from "@/components/icons/AntDesignHtml5Filled";

// const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });
// const rowdies = Rowdies({ subsets: ["latin"], weight: "400" });
const jersey_25 = Jersey_25({subsets: ["latin"], weight: "400"});
const space_mono = Space_Mono({ subsets: ["latin"], weight:  "400" })


export default function Home() {

	return (
		<>
			{/* top */}
			<header id="home" className={space_mono.className+" dark h-[50dvh] bg-background text-foreground flex justify-center items-center text-center"}>
				<div className='flex flex-col items-center space-y-3'>
					<Image src={"/profile.png"} height={160} width={160} alt="profile" className="w-40 h-40 mb-2 rounded-full outline outline-offset-4 outline-teal-600" />
					<h1 className={jersey_25.className+' font-semibold text-6xl first-letter:text-transparent first-letter:bg-clip-text first-letter:bg-gradient-to-tr first-letter:from-yellow-300 first-letter:to-red-500'}>
						Kyaw Phyo Thu
					</h1>
					<div className='flex items-center text-2xl space-x-3'>
						{/* <span>&lt;</span><span>/</span><span>&gt;</span> */}
						<AntDesignHtml5Filled />
						<h3 className=''>Web Developer</h3>
					</div>
					<p className=' text-neutral-400'>
						Full-Stack Developer proficient in <span className="text-[E52D27] font-bold">Laravel</span>, <span className="text-[00D8FF] font-bold">React</span>, and <span className="text-[6DAE30] font-bold">Express</span>.
					</p>
				</div>
			</header>

			{/* <body /> */}
			<main className='container min-h-screen py-10 px-3 max-w-screen-lg space-y-8'>
				<AboutMe />
				<Skills />
				{/* <Experiences /> */}
			</main>

			{/* footer */}
			<footer className=' h-96 dark bg-background text-white '>
				<div className='h-full flex justify-center items-center text-center'>
					<div>
						<h3 className="font-black text-4xl mb-4">Contact Me</h3>
						{/* <div className='flex justify-center space-x-4 mb-3'>
							<SocialMedia />
						</div> */}
						<p className="font-semibold text-lg text-gray-400">Live in Yangon, Myanmar</p>
						<p className=" font-medium text-lg">Reach me via&nbsp;
							<a className="font-mono text-lg text-orange-600 underline decoration-dotted underline-offset-2 hover:decoration-solid" href='mailto:kyawphyothukpt256@gmail.com'>kyawphyothukpt256@gmail.com</a>
						</p>
					</div>
				</div>
			</footer>
		</>
	);
}
