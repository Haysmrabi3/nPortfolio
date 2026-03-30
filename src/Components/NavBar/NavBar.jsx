import { Disclosure } from '@headlessui/react'
import { useEffect, useState } from 'react'
import H from '../../assets/Skills/h.jpg'

const navigation = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#About' },
    { name: 'Skills', href: '#Skills' },
    { name: 'Project', href: '#Project' },
    { name: 'Contact', href: '#Contact' },
]

export default function NavBar() {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <Disclosure
            as="nav"
            className={`fixed w-full z-20 top-0 left-0 border-b py-2 transition-all duration-300 
            ${scrolled ? 'bg-black/80 backdrop-blur-md border-gray-800' : 'bg-transparent border-transparent'}`}
        >
            {({ open }) => (
                <>
                    <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">

                        {/* Logo */}
                        <a href="#" className="flex items-center space-x-3">
                            <img src={H} className="h-20 w-auto" alt="Logo" />
                            <span className="text-xl font-semibold text-white">Flowbite</span>
                        </a>

                        {/* Desktop Links */}
                        <div className="hidden md:flex flex-1 justify-center space-x-6">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href}
                                    className="text-gray-300 font-semibold hover:text-white text-xl transition">
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        {/* Desktop Button */}
                        <div className="hidden md:flex">
                            <a
                                download
                                target='_blank'
                                href='https://drive.google.com/file/d/1Fr4khWaXRl0_CUbF4hy34GlSYt654_CY/view?usp=sharing'
                                className="ml-6 px-5 py-2 text-white rounded-lg border border-white hover:bg-white hover:text-black transition font-semibold"
                            >
                                Resume <i className="fa-solid fa-download"></i>
                            </a>
                        </div>

                        {/* Mobile Button */}
                        <Disclosure.Button className="md:hidden p-2 text-gray-300 hover:text-white">
                            {open ? "✖" : "☰"}
                        </Disclosure.Button>
                    </div>

                    {/* Mobile Menu */}
                    <Disclosure.Panel className="md:hidden px-4 pb-4 space-y-2 bg-black/90">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href}
                                className="block text-white py-2">
                                {item.name}
                            </a>
                        ))}
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}