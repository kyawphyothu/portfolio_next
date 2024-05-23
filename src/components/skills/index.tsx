"use client"
import React from 'react'
import DeviconHtml5 from '../icons/DeviconHtml5';
import DeviconCss3 from '../icons/DeviconCss3';
import DeviconBootstrap from '../icons/DeviconBootstrap';
import DeviconTailwindcss from '../icons/DeviconTailwindcss';
import VscodeIconsFileTypeJsOfficial from '../icons/VscodeIconsFileTypeJsOfficial';
import DeviconPhp from '../icons/DeviconPhp';
import DeviconLaravel from '../icons/DeviconLaravel';
import DeviconReact from '../icons/DeviconReact';
import LogosNodejsIcon from '../icons/LogosNodejsIcon';
import DeviconMysqlWordmark from '../icons/DeviconMysqlWordmark';
import DeviconMongodb from '../icons/DeviconMongodb';
import DeviconLinux from '../icons/DeviconLinux';
import DeviconNextjs from '../icons/DeviconNextjs';
import DeviconGit from '../icons/DeviconGit';
import Title from '../title';


const skills = [
	{
		name: "HTML",
		image: <DeviconHtml5 className="w-8 h-8" />,
		status: "Expert",
	},
	{
		name: "CSS",
		image: <DeviconCss3 className="w-8 h-8" />,
		status: "Intermediate",
	},
	{
		name: "Bootstrap",
		image: <DeviconBootstrap className="w-8 h-8" />,
		status: "Advanced",
	},
	{
		name: "TailwindCSS",
		image: <DeviconTailwindcss className="w-8 h-8" />,
		status: "Intermediate",
	},
	{
		name: "JavaScript",
		image: <VscodeIconsFileTypeJsOfficial className="w-8 h-8" />,
		status: "Advanced",
	},
	{
		name: "ReactJS",
		image: <DeviconReact className="w-8 h-8" />,
		status: "Advanced",
	},
	{
		name: "NextJS",
		image: <DeviconNextjs className="w-8 h-8" />,
		status: "Intermediate",
	},
	// {
	// 	name: "React Native",
	// 	image: reactnativePng,
	// 	status: "Beginner",
	// },
	{
		name: "NodeJS",
		image: <LogosNodejsIcon className="w-8 h-8" />,
		status: "Intermediate",
	},
	{
		name: "PHP",
		image: <DeviconPhp className="w-8 h-8" />,
		status: "Intermediate",
	},
	{
		name: "Laravel",
		image: <DeviconLaravel className="w-8 h-8" />,
		status: "Intermediate",
	},
	{
		name: "MySQL",
		image: <DeviconMysqlWordmark className="w-8 h-8" />,
		status: "Intermediate",
	},
	{
		name: "MongoDB",
		image: <DeviconMongodb className="w-8 h-8" />,
		status: "Beginner",
	},
	{
		name: "Git & GitHub",
		image: <DeviconGit className="w-8 h-8" />,
		status: "Intermediate",
	},
	{
		name: "Linux",
		image: <DeviconLinux className="w-8 h-8" />,
		status: "Intermediate",
	},
]


export default function Skills() {
	return (
		<div className="mb-5">
			<Title title='My Skills' />
			<div className="flex flex-wrap justify-evenly gap-3">
				{
					skills.map((s) => {
						return (
							<div key={s.name} className="h-14 w-44 flex items-center py-2 px-3 rounded-lg border-2 cursor-pointer hover:bg-gray-600 hover:bg-opacity-5">
								<div className='mr-3'>
									{s.image}
								</div>
								<h4 className="font-bold text-sm">
									{s.name}
									<p className="text-xs text-gray-500">{s.status}</p>
								</h4>
							</div>
						);
					})
				}
			</div>
		</div>
	)
}
