export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Yağmur Cemgül
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Web Developer & Creative Designer
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about creating beautiful, functional, and user-friendly web experiences
            with modern technologies and creative design solutions.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I am a passionate web developer with expertise in modern JavaScript frameworks and technologies. 
                I love creating intuitive user interfaces and solving complex problems through clean, efficient code.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                When I&apos;m not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                and continuously learning to stay at the forefront of web development trends.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Quick Facts</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>🚀 Focus: Frontend & Full-stack Development</li>
                <li>💻 Experience: React, Next.js, TypeScript</li>
                <li>🎨 Design: UI/UX and Modern Web Design</li>
                <li>📱 Responsive: Mobile-first Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'].map((skill) => (
                  <span key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL'].map((skill) => (
                  <span key={skill} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'VS Code', 'Figma', 'Docker', 'Vercel', 'AWS'].map((skill) => (
                  <span key={skill} className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-8 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Portfolio Website</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.
                Features dark mode, smooth animations, and optimized performance.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Next.js', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                  <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View Project</a>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">E-Commerce App</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A full-stack e-commerce application with user authentication, payment processing,
                and admin dashboard. Built with modern web technologies.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React', 'Node.js', 'MongoDB'].map((tech) => (
                  <span key={tech} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View Project</a>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-white">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:your.email@example.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Get In Touch
            </a>
            <a
              href="#"
              className="border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-gray-800 dark:bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400 mb-4">
            © 2024 Yağmur Cemgül. All rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
