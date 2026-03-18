import { Disclosure } from '@headlessui/react'
import H from '../../assets/Skills/h.jpg'


const navigation = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#About' },
    // { name: 'Services', href: '#Services' },
    { name: 'Skills', href: '#Skills' },
    { name: 'Project', href: '#Project' },
    { name: 'Contact', href: '#Contact' },
]

export default function NavBar() {
    return (
        <Disclosure as="nav" className="bg-transparent fixed w-full z-20 top-0 left-0 border-b border-default py-2">
            {({ open }) => (
                <>
                    <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
                        {/* Logo */}
                        <a href="#" className="flex items-center space-x-3">
                            <img src={H} className="h-20 w-auto" alt="Logo" />
                            <span className="text-xl font-semibold text-heading">Flowbite</span>
                        </a>

                        {/* Desktop Links */}
                        <div className="hidden md:flex flex-1 justify-center space-x-6">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className="text-gray-400 font-semibold hover:text-white text-xl transition">
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        {/* Desktop Button */}
                        <div className="hidden md:flex">
                            <button className="ml-6 px-5 py-2 border-fg-brand text-white rounded-lg hover:bg-fg-brand hover:text-white second-color transition font-semibold cursor-pointer">
                                <a  download  target='_blank' href='https://drive.google.com/drive/folders/1lqjTZeYOJFJYnq3vo4fN2F7xZQdYwQPx?usp=sharing'> Resume <i className="fa-solid fa-download"></i> </a>
                                
                                </button>
                        </div>

                        {/* Mobile menu button */}
                        <Disclosure.Button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700">
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </Disclosure.Button>
                    </div>

                    {/* Mobile Menu */}
                    <Disclosure.Panel className="md:hidden px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-2 text-white rounded-md hover:bg-gray-700 font-semibold"
                            >
                                {item.name}
                            </a>
                        ))}
                        <button className="w-full px-3 py-2 border border-fg-brand text-2xl text-white rounded-lg hover:bg-fg-brand transition">
                            Resume
                        </button>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
