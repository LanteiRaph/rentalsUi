import Link from "next/link";
import { useState } from "react";

import { useApp } from "../../../store/AppSlice";

import { Navbar } from "../../../lib/utilities/data";


const NavLinks = () => {
    //Compile the local state needed to hanlde the application
    const [isOpen, setIsOpen] = useState<string>()
    const [isActive, setIsActive] = useState<boolean>(false)
    const {setIsSettingsPanelOpen} = useApp()
    //Open the settings panel:Its done in two placess
    const openSettingsPanel= () => {
        //set the global setting value to true.
        setIsSettingsPanelOpen(true)
    }
    return (
        <>
            <nav aria-label="Main" className="h-full flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto bg-white border-r-2 border-gray-400s dark:bg-gray-800">
                <div className="flex flex-col justify-between">
                    <div>
                    {Navbar.map(link => {
                        return <div key={'x'}>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault()
                                    console.log(isOpen)
                                    //Set the open to inverse of it self
                                    setIsOpen((prev) => {
                                        if(prev == link.name) return undefined
                                        return link.name
                                    })
                                }}
                                className={`flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary
                                     ${isActive || isOpen == link.name ? `bg-primary-100 dark:bg-primary` : ``}
                                 `}
                                role='button'
                                aria-haspopup='true'
                                // eslint-disable-next-line jsx-a11y/aria-proptypes
                                aria-expanded={`${isActive || isOpen ? true : false}`}
                                
                            >

                                <span aria-hidden="true">
                                    {<link.iconName/>}
                                </span>
                                <span className="ml-2 text-md"> {link.name} </span>
                                <span className="ml-auto" aria-hidden="true">
                                    <svg
                                        className={`w-4 h-4 transition-transform transform
                                          ${isActive || isOpen == link.name ? 'rotate-180' : ``}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </a>
                            <div role={'menu'} className={`${isOpen == link.name ? `block` : `hidden`} mt-2 space-y-2 px-7`} aria-label="Dashboards">
                                {link.list.map((menu) => {
                                    return <Link href={menu.link} key={menu.name}>
                                        <a role="menuitem" className="block p-2 text-sm text-gray-700 transition-colors duration-200 rounded-md dark:text-light dark:hover:text-light hover:text-gray-700">
                                            {menu.name}
                                        </a>
                                    </Link>
                                })

                                }

                            </div>
                        </div>
                    })}
                    </div>

                    {/**Custoize section: Look and fill of application */}
                    <div className="flex-shrink-0 px-2 py 4 space-y-2">
                        <button
                            type='button'
                            onClick={(e) => { openSettingsPanel() }}
                            className='flex items-center justify-center w-full px-4 py-2 text-sm text-gray-800 rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-dark focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark'
                        >
                            <span aria-hidden='true'>
                                <svg
                                    className="w-4 h-4 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                    />
                                </svg>
                            </span>
                            <span>Customize</span>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavLinks
