import React from 'react'
import Title from '../title'


export default function AboutMe() {
	return (
		<div className="mb-5">
			<Title title='About Me' />
			<div className="flex flex-wrap justify-evenly gap-3">
				<p>
					Hi👋, I&apos;m <span className='font-bold'>Kyaw Phyo Thu</span>, a full-stack web developer since 2022 with a passion for crafting elegant and impactful digital experiences. With expertise in frontend technologies like HTML, CSS, and JavaScript, as well as backend technologies such as PHP, Node.js, and Laravel. Currently, serving as Mid-level Developer.
				</p>
			</div>
		</div>
	)
}
