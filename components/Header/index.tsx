import React, { Fragment } from 'react'
import Link from 'next/link'
import MainLogo from '../svg/MainLogo'
import { Popover, Transition } from '@headlessui/react'
import Hamburger from '../svg/Hamburger'
import XMark from '../svg/XMark'

const Header = () => {
    return (
        <Popover className="bg-black/90 backdrop-blur-sm fixed top-0 left-0 right-0 py-6 z-50">
            <div className="container mx-auto px-6 lg:px-40">
                <div className="flex items-center text-white gap-9">
                    <div className="flex-1 md:flex-none">
                        <MainLogo />
                    </div>
                    <div className="h-14 w-[1px] bg-[#333333] hidden md:block"></div>
                    <ul className="flex-1 hidden md:flex gap-9 text-[#b3b3b3] font-bold">
                        <li className="hover:text-white">
                            <Link href="#home-section">
                                Home
                            </Link>
                        </li>
                        <li className="hover:text-white">
                            <Link href="#projects-section">
                                Projects
                            </Link>
                        </li>
                        <li className="hover:text-white">
                            <Link href="#contact-section">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <a href="mailto:inquire@zkript.dev" className="bg-[#3ccf91] py-3 px-6 rounded-md font-extrabold hover:bg-[#222222] hidden md:block">Inquire Now</a>
                    <div className="block md:hidden">
                        <Popover.Button>
                            <Hamburger />
                        </Popover.Button>
                    </div>
                </div>
            </div>
            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                    <div className="bg-[#111111] divide-y-2 divide-[#333333] shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="px-5 pt-5 pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <MainLogo />
                                </div>
                                <div>
                                    <Popover.Button>
                                        <XMark />
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 py-6 px-5">
                            <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                                <ul className="flex flex-col gap-5 text-[#b3b3b3] font-bold">
                                    <li className="hover:text-white hover:bg-[#333333] w-full">
                                        <Link href="#home-section">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="hover:text-white hover:bg-[#333333] w-full">
                                        <Link href="#projects-section">
                                            Projects
                                        </Link>
                                    </li>
                                    <li className="hover:text-white hover:bg-[#333333] w-full">
                                        <Link href="#contact-section">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <a
                                    href="mailto:inquire@zkript.dev"
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#3ccf91] px-4 py-2 text-base font-extrabold text-white shadow-sm hover:bg-[#222222]"
                                >
                                    Inquire Now
                                </a>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

export default Header