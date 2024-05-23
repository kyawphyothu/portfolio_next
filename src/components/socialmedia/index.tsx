import React from 'react'
import LogosFacebook from '../icons/LogosFacebook'
import Fa6BrandsGithub from '../icons/Fa6BrandsGithub'
import SimpleIconsFacebook from '../icons/SimpleIconsFacebook'

export default function SocialMedia() {
	return (
		<>
			<span className=''>
				<a href='https://www.facebook.com/profile.php?id=100025052384163' target='_blank' className='flex items-center'>
					{/* <ion-icon name="logo-facebook" size="large"></ion-icon> */}
					<SimpleIconsFacebook className='w-10 h-10 hover:text-blue-800 ease-linear duration-100' />
				</a>
			</span>
			<span className=''>
				<a href='https://github.com/kyawphyothu' target='_blank' className="flex items-center">
					{/* <ion-icon name="logo-github" size="large"></ion-icon> */}
					<Fa6BrandsGithub className='w-10 h-10 rounded-full m-0 ring-0 p-0 hover:text-black  ease-linear duration-100' />
				</a>
			</span>
		</>
	)
}


// p-2 flex justify-center bg-zinc-600 rounded-full hover:bg-blue-500 transition-all ease-linear duration-300