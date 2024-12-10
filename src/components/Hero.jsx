import { motion } from 'framer-motion';

export default function Hero(){
    return(
        <section id="home"
        className="py-32 px-6">
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center">
                <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">Welcome</h1>
                <p className="text-lg text-gray-400 mb-8">
                Hi, I'm Rohit Ranjan Rout. A AI/ML professional exploring backend technologies to build robust, full-stack websites.
                </p>
                <div className="flex justify-center space-x-4">
                    <motion.a
                        href="#projects"
                        className="bg-transparent border border-orange-500 text-orange-500 py-3 px-6 rounded-md hover:bg-orange-500 hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                    See My Projects
                    </motion.a>
                    <motion.a
                        href="./public/Rohit_resume.pdf"
                        download
                        className="bg-transparent border border-orange-500 text-orange-500 py-3 px-6 rounded-md hover:bg-orange-500 hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                    Download Resume
                    </motion.a>
                </div>
            </motion.div>
        </section>
    )
}