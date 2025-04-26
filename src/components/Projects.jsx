export default function Projects() {
  return (
    <section id="projects" className="h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 md:text-4xl lg:text-5xl">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          <div className="text-center">
            <img
              src="/project1.jpeg"
              alt="Project 1"
              className="w-64 h-40 object-cover rounded-md mb-4"
            />
            <a
              href="https://example.com/deep-research"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold md:text-2xl mb-2 hover:underline"
            >
              Deep Research
            </a>
            <p className="text-sm md:text-base">Stack: Pydanticai, Streamlit, Python</p>
          </div>

          <div className="text-center">
            <img
              src="/project2.jpeg"
              alt="Project 2"
              className="w-64 h-40 object-cover rounded-md mb-4"
            />
            <a
              href="https://example.com/project-y"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold md:text-2xl mb-2 hover:underline"
            >
              Y
            </a>
            <p className="text-sm md:text-base">Stack: Next.js, TypeScript, MongoDB</p>
          </div>

          <div className="text-center">
            <img
              src="/project3.jpeg"
              alt="Project 3"
              className="w-64 h-40 object-cover rounded-md mb-4"
            />
            <a
              href="https://example.com/tune-it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold md:text-2xl mb-2 hover:underline"
            >
              Tune It
            </a>
            <p className="text-sm md:text-base">Stack: Python, Pydanticai, Streamlit</p>
          </div>
        </div>
      </div>
    </section>
  );
}