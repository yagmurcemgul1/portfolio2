export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Yağmur Cem Gül</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">Hakkımda</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projeler</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Yetenekler</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">İletişim</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Merhaba, Ben <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Yağmur Cem</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Frontend Developer & Web Designer
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Modern web teknolojileri kullanarak kullanıcı dostu ve etkileyici web uygulamaları geliştiriyorum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
              Projelerimi Gör
            </button>
            <button className="border border-gray-400 text-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              İletişime Geç
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Hakkımda</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Web geliştirme alanında deneyimli bir frontend developer olarak, 
                modern teknolojiler kullanarak kullanıcı deneyimini ön planda tutan projeler geliştiriyorum.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Temiz kod yazma, responsive tasarım ve performans optimizasyonu 
                konularında tutkulu bir geliştiriciyim.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-white font-semibold mb-2">Frontend</h4>
                <p className="text-gray-300">React, Next.js, TypeScript, Tailwind CSS</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-white font-semibold mb-2">Styling</h4>
                <p className="text-gray-300">CSS3, SASS, Styled Components</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-white font-semibold mb-2">Tools</h4>
                <p className="text-gray-300">Git, Figma, VS Code, Webpack</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Yeteneklerim</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'React', level: 90 },
              { name: 'JavaScript', level: 85 },
              { name: 'TypeScript', level: 80 },
              { name: 'Next.js', level: 85 },
              { name: 'Tailwind CSS', level: 90 },
              { name: 'HTML/CSS', level: 95 },
              { name: 'Git', level: 80 },
              { name: 'Figma', level: 75 }
            ].map((skill) => (
              <div key={skill.name} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <h4 className="text-white font-semibold mb-2">{skill.name}</h4>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-gray-400 text-sm">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Projelerim</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Ticaret Sitesi",
                description: "React ve Next.js kullanarak geliştirdiğim modern e-ticaret platformu",
                tech: ["React", "Next.js", "Tailwind CSS"]
              },
              {
                title: "Portfolio Website",
                description: "Kişisel portfolio sitesi - responsive tasarım ve modern animasyonlar",
                tech: ["Next.js", "TypeScript", "Framer Motion"]
              },
              {
                title: "Task Manager App",
                description: "Görev yönetimi uygulaması - drag & drop özellikli",
                tech: ["React", "Redux", "CSS Modules"]
              }
            ].map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{project.title}</span>
                </div>
                <h4 className="text-white font-semibold text-xl mb-2">{project.title}</h4>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <button className="text-purple-400 hover:text-purple-300 transition-colors">
                    Demo
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
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">İletişime Geçin</h3>
          <p className="text-gray-300 text-lg mb-8">
            Bir projeniz mi var? Birlikte çalışmak için benimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="mailto:yagmurcemgul@example.com" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
              E-posta Gönder
            </a>
            <a href="https://github.com/yagmurcemgul1" target="_blank" rel="noopener noreferrer" className="border border-gray-400 text-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              GitHub Profili
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800">
        <div className="text-center text-gray-400">
          <p>&copy; 2025 Yağmur Cem Gül. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}