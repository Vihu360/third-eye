"use client";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/usageUi/navbar";
import { AnimatedTooltipPreview } from "@/components/usageUi/reviewsUser";
import Image from "next/image";


export default function Home() {
	return (

		<div className="min-w-screen min-h-screen bg-[#161622] flex flex-col justify-start items-center relative border-white border pt-24">

			<Navbar />

			<div className="text-white font-sans font-semibold text-6xl py-7 sm:py-8 flex text-center justify-center">
				<p>
					Play & Win Real <span className="text-[#8bd4e3] font-bold">CASH</span>
				</p>
			</div>

			<div className="">
				<Image
					width={500}
					height={500}
					src="/consolepng.png"
					alt="console"
				/>
			</div>

			<Button className=" hover:text-white hover:bg-slate-800 absolute top-[475px] " variant='secondary'>
				Get Started
			</Button>

			<div className="bg-[#20202f] w-full rounded-t-[85px] sm:flex items-center justify-center gap-10 pt-5">

				<div className="sm:hidden">
					<AnimatedTooltipPreview />
				</div>

				<div className=" flex flex-col items-center justify-center gap-6 px-8 pb-5 sm:pb-0">

					<Image
					width={90}
						height={80}
						src="/man1.jpeg"
						alt="client"
						className="rounded-full  w-18 h-18  " />

					<p className="text-white text-xs text-center px-8">Amrit won Rs 10000 within a week with just predicting the right combination of the game</p>

				</div>

				<div className=" flex flex-col items-center justify-center gap-6">

					<Image
						width={90}
						height={80}
						src="/man2.jpeg"
						alt="client"
						className="rounded-full w-18 h-18  " />

					<p className="text-white text-xs text-center px-16">Amrit won Rs 10000 within a week with just predicting the right combination of the game</p>

				</div>




			</div>




		</div>
	);
}
