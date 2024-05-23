import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import Title from '../title'


export const experiences = [
	{
		name: "shewmawkun",
		title: "Shwe Maw Kun Private School",
		desc: `In my role as a junior developer, I played a part in developing the "Shew Maw Kun School Management System" using **PHP CodeIgniter and MySQL**. This web application serves students, parents, and staff by providing features such as a parent dashboard, staff management tools, and an integrated online course feature. Parents can easily access their child's exam schedule, results, homework assignments, attendance records, holiday dates, timetables, and teacher details. Staff members benefit from modules that offer information on leave requests and personalized timetables.`,
		// path: "/exp/she"
	},
	{
		name: "she",
		title: "She Pawn Shop",
		desc: `I developed the "She Pawn Shop" app independently for our family business, utilizing technologies such as **React, Material-UI (MUI), Express and MySQL**. The application efficiently stores pawn information and facilitates easy retrieval through name or **barcode searches**. Notably, I implemented a feature allowing the generation of printable thermal vouchers using the **react-to-print** npm package. The application is successfully *deployed on a Digital Ocean droplet*, showcasing my skills in both frontend and backend development, database management, and deployment strategies. This project exemplifies my ability to create practical solutions for business needs by leveraging modern web technologies.`,
		path: "/exp/she"
	},
	{
		name: "baydin",
		title: "Bay Din",
		desc: `I developed the "Bay Din" web app independently, using **React and Tailwind CSS**. The application incorporates npm packages such as **react-slot-counter and burma-calendar**. For the baby name feature, I implemented three distinct calculation methods using JavaScript. This project showcases my proficiency in frontend development, the integration of third-party packages, and my ability to provide diverse functionalities within a web application.`,
		// path: "/exp/baydin",
		link: "https://baydin.kyawphyothu.com",
		source: "https://github.com/kyawphyothu/baydin_tailwind"
	}
]

export default function Experiences() {
	return (
		<div className="mb-5">
			<Title title='My Projects' />
			<div className="grid gap-4 md:grid-cols-2 sm:grid-cols-1">
				{
					experiences.map(i => {
						return (
							<Card>
								<CardHeader>
									<CardTitle>{i.title}</CardTitle>
										<Badge className="w-fit">web_app</Badge>
									{/* <CardDescription>
									</CardDescription> */}
								</CardHeader>
								<CardContent>
									{/* <h4 className='text-center font-bold mb-2 text-lg'></h4> */}
									<div className='flex gap-3'>
										<a href={i.link} className={`font-serif text-blue-700 underline decoration-dotted underline-offset-2 hover:decoration-solid ${i.link ? "block": "hidden"}`} target='_blank'>Website</a>
										<a href={i.source} className={`font-serif text-blue-700 underline decoration-dotted underline-offset-2 hover:decoration-solid ${i.source ? "block": "hidden"}`} target='_blank'>Source</a>
									</div>
									<p className='font-light flex-1'><span>{i.desc}</span></p>
									{/* <button className={`w-full mt-2 px-4 py-2 bg-neutral-600 text-white rounded-xl hover:bg-neutral-700 transition-all ease-linear duration-150 ${i.path ? "block": "hidden"}`} onClick={() => ""}>View Screenshot</button> */}
									{/* <div key={i.name} className='w-full h-auto flex flex-col rounded-2xl p-7 gap-2 border-2 border-solid  transition-all duration-100 ease-in-out hover:shadow-[0_5px_10px_rgba(0,0,0,0.1)]'>
									</div> */}
								</CardContent>
							</Card>
						)
					})
				}
			</div>
		</div>
	)
}
