import React from 'react'

export default function Title({ title }: {title: string}) {
	return (
		<div className="flex items-baseline mb-3">
			<h3 className="font-extrabold text-3xl text-foreground">{title}</h3>
			<hr className="flex-grow" />
		</div>
	)
}
