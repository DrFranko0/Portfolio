import { Link } from 'react-scroll';

export default function Header(){
    return(
        <header className='sticky top-0 left-0 text-white py-4'>
            <nav className="py-4 hover:cursor-pointer container mx-auto flex justify-center">
                <ul className="flex space-x-6">
                    <li>
                        <Link to="home" smooth>Home</Link>
                    </li>
                    <li>
                        <Link to="about" smooth>About</Link>
                    </li>
                    <li>
                        <Link to="experience" smooth>Experience</Link>
                    </li>
                    <li>
                        <Link to="project" smooth>Project</Link>
                    </li>
                    <li>
                        <Link to="contact" smooth>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}