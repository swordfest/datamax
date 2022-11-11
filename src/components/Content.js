import React from "react";
import alexPic from "../imgs/alex-pic.png";

export default function Content() {
	return (
		<main className="container w-full h-screen flex flex-col ml-[100px] text-[#111111] bg-gradient-to-r from-[#ECECEC] via-[#D7D7D7] to-[#ECECEC] ">
			{/* <Captcha/> */}
			<div className="user-bar h-[132px] col-span-12 flex items-center justify-between bg-[#ECECEC] px-6 py-4">
				<div className="content-section flex flex-col">
					<h1 className="text-3xl font-bold  ">Dashboard</h1>
					<span className="text-xl font-semibold text-[#7a7a7a] ">Plan</span>
				</div>
				<div className="section-options w-auto h-auto flex items-center gap-2">
					<button className="button-option w-40 h-14 bg-[#2B79D6] rounded-2xl font-bold text-white ">
						LTE
					</button>
					<button className="button-option w-40 h-14 bg-white rounded-2xl font-bold ">
						3G
					</button>
					<button className="button-option w-40 h-14 bg-white rounded-2xl font-bold ">
						4G
					</button>
				</div>
				<div className="user-profile w-auto h-auto flex items-center flex-row-reverse gap-6 ">
					<div className="flex flex-row-reverse gap-4 items-center ">
						<div className="avatar w-14 h-14 bg-slate-400 flex items-center justify-center rounded-full overflow-hidden">
							<img src={alexPic} alt="alex pic" className="pic w-14 h-14 " />
						</div>
						<span className="font-medium">Alex Navarro</span>
					</div>
					<div className="icon-notifications relative w-12 h-12 flex items-center justify-center rounded-xl cursor-pointer hover:bg-[#D8D8D8] active:bg-[#D8D8D8] transition-colors">
						<svg
							width="18"
							height="20"
							viewBox="0 0 18 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M16 11.586V8C16 4.783 13.815 2.073 10.855 1.258C10.562 0.52 9.846 0 9 0C8.154 0 7.438 0.52 7.145 1.258C4.185 2.074 2 4.783 2 8V11.586L0.293001 13.293C0.199958 13.3857 0.126171 13.4959 0.0758854 13.6172C0.0256001 13.7386 -0.000189449 13.8687 1.04767e-06 14V16C1.04767e-06 16.2652 0.105358 16.5196 0.292894 16.7071C0.480431 16.8946 0.734785 17 1 17H17C17.2652 17 17.5196 16.8946 17.7071 16.7071C17.8946 16.5196 18 16.2652 18 16V14C18.0002 13.8687 17.9744 13.7386 17.9241 13.6172C17.8738 13.4959 17.8 13.3857 17.707 13.293L16 11.586ZM16 15H2V14.414L3.707 12.707C3.80004 12.6143 3.87383 12.5041 3.92412 12.3828C3.9744 12.2614 4.00019 12.1313 4 12V8C4 5.243 6.243 3 9 3C11.757 3 14 5.243 14 8V12C14 12.266 14.105 12.52 14.293 12.707L16 14.414V15ZM9 20C9.6193 20.0008 10.2235 19.8086 10.7285 19.4502C11.2335 19.0917 11.6143 18.5849 11.818 18H6.182C6.38566 18.5849 6.76648 19.0917 7.27151 19.4502C7.77654 19.8086 8.3807 20.0008 9 20Z"
								fill="#111111"
							/>
						</svg>
						<div className="absolute w-3 h-3 bg-red-500 rounded-full top-[5px] right-[5px]">
							 
						</div>
					</div>
				</div>
			</div>
			<div className="plans-area grid grid-cols-12 w-full h-full p-6 gap-4">
				<div className="col-izq col-span-8 w-full h-full flex flex-col gap-4  ">

                    <span className=" font-medium ">Plan Combinado</span>
                    <div className="item-plan w-full h-[220px] flex flex-col justify-center gap-4 bg-white rounded-[40px] p-8">
						<div className="first-row w-full h-auto flex items-center justify-between">
							<div className="flex gap-2">
								<span className="font-bold text-5xl ">574.46</span>
								<div className="flex flex-col">
									<span className=" font-bold ">MB</span>
									<span className=" font-semibold text-[#7A7A7A] ">
										1.94 GB
									</span>
								</div>
							</div>
							<div className="flex flex-col items-end">
								<span className=" font-bold ">DATOS</span>
								<span className=" font-semibold text-[#7A7A7A] ">2.5 GB</span>
							</div>
						</div>
						<div className="progress-bar w-full h-2 rounded-full overflow-hidden bg-[#E3E3E3] ">
							<div className="w-3/4 h-full bg-[#2B79D6]"> </div>
						</div>
						<div className="third-row w-full h-auto flex items-center justify-between">
							<div className="flex flex-col items-start">
								<span className=" font-bold ">HOY</span>
								<span className=" font-semibold text-[#7A7A7A] ">215.42 MB</span>
							</div>
							<div className="flex flex-col items-center">
								<span className=" font-bold ">VENCE</span>
								<span className=" font-semibold text-[#7A7A7A] ">27 Días</span>
							</div>
							<div className="flex flex-col items-end">
								<span className=" font-bold ">Óptimo</span>
								<span className=" font-semibold text-[#7A7A7A] ">16.64 MB</span>
							</div>
						</div>
					</div>
                    <div className="item-plan w-full h-[220px] flex flex-col justify-center gap-4 bg-white rounded-[40px] p-8">
						<div className="first-row w-full h-auto flex items-center justify-between">
							<div className="flex gap-2">
								<span className="font-bold text-5xl ">574.46</span>
								<div className="flex flex-col">
									<span className=" font-bold ">MB</span>
									<span className=" font-semibold text-[#7A7A7A] ">
										1.94 GB
									</span>
								</div>
							</div>
							<div className="flex flex-col items-end">
								<span className=" font-bold ">DATOS</span>
								<span className=" font-semibold text-[#7A7A7A] ">2.5 GB</span>
							</div>
						</div>
						<div className="progress-bar w-full h-2 rounded-full overflow-hidden bg-[#E3E3E3] ">
							<div className="w-3/4 h-full bg-[#2B79D6]"> </div>
						</div>
						<div className="third-row w-full h-auto flex items-center justify-between">
							<div className="flex flex-col items-start">
								<span className=" font-bold ">HOY</span>
								<span className=" font-semibold text-[#7A7A7A] ">215.42 MB</span>
							</div>
							<div className="flex flex-col items-center">
								<span className=" font-bold ">VENCE</span>
								<span className=" font-semibold text-[#7A7A7A] ">27 Días</span>
							</div>
							<div className="flex flex-col items-end">
								<span className=" font-bold ">Óptimo</span>
								<span className=" font-semibold text-[#7A7A7A] ">16.64 MB</span>
							</div>
						</div>
					</div>
                    <div className="item-plan w-full h-[220px] flex flex-col justify-center gap-4 bg-white rounded-[40px] p-8">
						<div className="first-row w-full h-auto flex items-center justify-between">
							<div className="flex gap-2">
								<span className="font-bold text-5xl ">574.46</span>
								<div className="flex flex-col">
									<span className=" font-bold ">MB</span>
									<span className=" font-semibold text-[#7A7A7A] ">
										1.94 GB
									</span>
								</div>
							</div>
							<div className="flex flex-col items-end">
								<span className=" font-bold ">DATOS</span>
								<span className=" font-semibold text-[#7A7A7A] ">2.5 GB</span>
							</div>
						</div>
						<div className="progress-bar w-full h-2 rounded-full overflow-hidden bg-[#E3E3E3] ">
							<div className="w-3/4 h-full bg-[#2B79D6]"> </div>
						</div>
						<div className="third-row w-full h-auto flex items-center justify-between">
							<div className="flex flex-col items-start">
								<span className=" font-bold ">HOY</span>
								<span className=" font-semibold text-[#7A7A7A] ">215.42 MB</span>
							</div>
							<div className="flex flex-col items-center">
								<span className=" font-bold ">VENCE</span>
								<span className=" font-semibold text-[#7A7A7A] ">27 Días</span>
							</div>
							<div className="flex flex-col items-end">
								<span className=" font-bold ">Óptimo</span>
								<span className=" font-semibold text-[#7A7A7A] ">16.64 MB</span>
							</div>
						</div>
					</div>

				</div>
				<div className="col-der col-span-4 w-full h-full bg-slate-400 "></div>
			</div>
		</main>
	);
}
