export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Portfolio</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">John Doe</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Full-Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            I create beautiful, functional web applications that solve real-world problems. 
            Passionate about clean code, user experience, and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
              View My Work
            </button>
            <button className="border border-gray-400 text-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                With over 5 years of experience in web development, I specialize in creating 
                modern, responsive applications using the latest technologies.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm passionate about writing clean, maintainable code and creating 
                intuitive user experiences that make a difference.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-white font-semibold mb-2">Frontend</h4>
                <p className="text-gray-300">React, Next.js, TypeScript, Tailwind CSS</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-white font-semibold mb-2">Backend</h4>
                <p className="text-gray-300">Node.js, Python, PostgreSQL, MongoDB</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-white font-semibold mb-2">Tools</h4>
                <p className="text-gray-300">Git, Docker, AWS, Figma</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-4"></div>
                <h4 className="text-white font-semibold text-xl mb-2">Project {project}</h4>
                <p className="text-gray-300 mb-4">
                  A brief description of this amazing project and the technologies used to build it.
                </p>
                <div className="flex space-x-4">
                  <button className="text-purple-400 hover:text-purple-300 transition-colors">
                    Live Demo
                  </button>
                  <button className="text-gray-400 hover:text-gray-300 transition-colors">
                    GitHub
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Let's Work Together</h3>
          <p className="text-gray-300 text-lg mb-8">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
            Send Message
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800">
        <div className="text-center text-gray-400">
          <p>&copy; 2025 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}