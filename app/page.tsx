"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Github, ExternalLink, ArrowRight, Sparkles } from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/40 shadow-lg shadow-primary/5">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Faisal Ejaz
            </h1>
            <div className="flex items-center gap-8">
              {["about", "experience", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${
                    activeSection === section ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-32 px-6 relative overflow-hidden">
        {/* Animated background gradient orb */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />

        <div
          className={`max-w-6xl mx-auto relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary animate-fade-in">
              <Sparkles className="h-4 w-4" />
              Available for new opportunities
            </div>

            <h2 className="text-7xl font-bold text-balance bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
              Faisal Ejaz
            </h2>

            <p className="text-3xl font-semibold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
              Full-stack Developer & UI/UX Designer
            </p>

            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Computer Science graduate specializing in full-stack development, UI/UX design, and building scalable web
              applications. Open to roles in Frontend Development, Full-stack Development, UI/UX Design, IT Support,
              Business Development, and Management.
            </p>

            <div className="flex items-center gap-4 pt-6">
              <Button
                asChild
                size="lg"
                className="group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              >
                <a href="mailto:faisalejaz797@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="group shadow-md hover:shadow-lg hover:border-primary/50 transition-all duration-300 bg-transparent"
              >
                <a href="https://wa.me/966505869094" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6 bg-gradient-to-b from-muted/20 to-background/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-5xl font-bold mb-12 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            About Me
          </h3>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p className="animate-fade-in-up">
              I'm a 2025 Computer Science graduate from PMAS University with 2+ years of experience in designing and
              implementing web applications. My expertise spans both front-end and back-end development, with a strong
              focus on creating efficient, maintainable code and exceptional user experiences.
            </p>
            <p className="animate-fade-in-up animation-delay-200">
              I specialize in full-stack development using React, Node.js, and modern web technologies. Additionally, I
              have a strong background in UI/UX design, creating intuitive and visually engaging interfaces using Figma
              and other design tools.
            </p>
            <p className="animate-fade-in-up animation-delay-400">
              Beyond development, I have experience in business development, team management, and IT support, making me
              versatile for various roles including Business Development Executive positions and management
              opportunities.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-5xl font-bold mb-16 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Experience
          </h3>
          <div className="space-y-6">
            {/* Software Engineer */}
            <Card className="p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] border-border/50 bg-card/50 backdrop-blur-sm group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    Software Engineer
                  </h4>
                  <p className="text-muted-foreground font-medium">Code Huddle</p>
                </div>
                <span className="text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
                  Jul 2024 - Oct 2025
                </span>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>
                    Optimized backend workflows by implementing efficient database queries and caching mechanisms
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>
                    Developed and deployed shell scripts to automate repetitive tasks, reducing manual effort by 40%
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>Administered production servers to maintain 99.9% uptime</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>Collaborated with cross-functional teams to identify and resolve performance bottlenecks</span>
                </li>
              </ul>
            </Card>

            {/* UI/UX Designer */}
            <Card className="p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] border-border/50 bg-card/50 backdrop-blur-sm group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">UI/UX Designer</h4>
                  <p className="text-muted-foreground font-medium">Apex Solution Islamabad (Remote)</p>
                </div>
                <span className="text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
                  Dec 2024 - Aug 2025
                </span>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>Converted UI designs into responsive and accessible web interfaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>Worked closely with designers to maintain design consistency and usability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>Applied UX principles to improve interaction flow and user satisfaction</span>
                </li>
              </ul>
            </Card>

            {/* UI/UX Designer Intern */}
            <Card className="p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] border-border/50 bg-card/50 backdrop-blur-sm group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    UI/UX Designer Intern
                  </h4>
                  <p className="text-muted-foreground font-medium">Code Huddle (Remote)</p>
                </div>
                <span className="text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
                  Mar 2024 - Oct 2024
                </span>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>
                    Designed user interfaces for web and mobile applications focusing on usability and clarity
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>Created wireframes, user flows, and interactive prototypes using Figma</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>Conducted basic user research and usability testing to improve design decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>
                    Applied user-centered design principles to revamp application interface, increasing user
                    satisfaction scores by 25%
                  </span>
                </li>
              </ul>
            </Card>

            {/* Machine Learning Intern */}
            <Card className="p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] border-border/50 bg-card/50 backdrop-blur-sm group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    Machine Learning Intern
                  </h4>
                  <p className="text-muted-foreground font-medium">Sumiaka (Remote)</p>
                </div>
                <span className="text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
                  Jun 2023 - Aug 2023
                </span>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>
                    Built a recommendation system leveraging collaborative filtering and TensorFlow, improving user
                    engagement
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>
                    Designed a scalable data pipeline using Python for preprocessing and continuous model training
                  </span>
                </li>
              </ul>
            </Card>

            {/* Frontend Developer */}
            <Card className="p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] border-border/50 bg-card/50 backdrop-blur-sm group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    Frontend Developer
                  </h4>
                  <p className="text-muted-foreground font-medium">JayzenAi (Freelance)</p>
                </div>
                <span className="text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
                  Jan 2023 - Jun 2023
                </span>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>Created web app frontends and fulfilled all requirements from clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>Delivered responsive and user-friendly interfaces for various projects</span>
                </li>
              </ul>
            </Card>

            {/* Full Stack Developer */}
            <Card className="p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] border-border/50 bg-card/50 backdrop-blur-sm group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    Full Stack Developer
                  </h4>
                  <p className="text-muted-foreground font-medium">Sumiaka (Remote)</p>
                </div>
                <span className="text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
                  Sep 2022 - Jan 2023
                </span>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>Implemented backend APIs with Node.js and MongoDB, supporting over 1,000 users</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>Developed secure authentication mechanisms using JSON Web Tokens (JWT) and bcrypt</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>Integrated frontend components with REST APIs, ensuring seamless data flow</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section id="skills" className="py-32 px-6 bg-gradient-to-b from-muted/20 to-background/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-5xl font-bold mb-16 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm group">
              <h4 className="text-xl font-bold mb-6 group-hover:text-primary transition-colors">
                Frontend Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {["React", "HTML", "CSS", "JavaScript", "TypeScript"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm group">
              <h4 className="text-xl font-bold mb-6 group-hover:text-primary transition-colors">
                Backend Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "GraphQL", "REST APIs", "MongoDB", "PostgreSQL", "MySQL"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm group">
              <h4 className="text-xl font-bold mb-6 group-hover:text-primary transition-colors">UI/UX Design</h4>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Adobe XD", "Sketch", "Wireframing", "Prototyping", "User Research"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm group">
              <h4 className="text-xl font-bold mb-6 group-hover:text-primary transition-colors">
                Programming Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "Python", "SQL", "Java", "C/C++"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm group">
              <h4 className="text-xl font-bold mb-6 group-hover:text-primary transition-colors">Data Visualization</h4>
              <div className="flex flex-wrap gap-2">
                {["D3.js", "Chart.js", "PowerBI", "Tableau"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm group">
              <h4 className="text-xl font-bold mb-6 group-hover:text-primary transition-colors">Other Skills</h4>
              <div className="flex flex-wrap gap-2">
                {["Testing", "CI/CD", "Business Development", "Team Management", "IT Support"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-5xl font-bold mb-16 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm group">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    Recommendation System
                  </h4>
                  <ExternalLink className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Built a recommendation system using collaborative filtering and TensorFlow that improved user
                  engagement. Designed scalable data pipelines for continuous model training.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-sm font-medium">
                    Python
                  </span>
                  <span className="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-sm font-medium">
                    TensorFlow
                  </span>
                  <span className="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-sm font-medium">
                    Machine Learning
                  </span>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm group">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    E-commerce Web Application
                  </h4>
                  <ExternalLink className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Developed a full-stack e-commerce platform with Node.js and MongoDB, supporting over 1,000 users.
                  Implemented secure authentication and seamless API integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-sm font-medium">
                    React
                  </span>
                  <span className="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-sm font-medium">
                    Node.js
                  </span>
                  <span className="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-sm font-medium">
                    MongoDB
                  </span>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm group">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">Zayad Design System</h4>
                  <a
                    href="https://www.figma.com/design/HigDlanhWqXwGuQOoZHyrU/Zayad"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-6 w-6 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110" />
                  </a>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive design system created in Figma featuring reusable components, typography scales, color
                  palettes, and design patterns for consistent UI development.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-sm font-medium">
                    Figma
                  </span>
                  <span className="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-sm font-medium">
                    UI/UX
                  </span>
                  <span className="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-sm font-medium">
                    Design Systems
                  </span>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm group">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">Web App UI Designs</h4>
                  <a
                    href="https://www.figma.com/design/5VesQIDbQZGrSNuUFs7Jsi/Untitled"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-6 w-6 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110" />
                  </a>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Collection of modern web application interfaces designed with focus on usability, accessibility, and
                  visual appeal. Includes responsive layouts and interactive prototypes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-sm font-medium">
                    Figma
                  </span>
                  <span className="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-sm font-medium">
                    Prototyping
                  </span>
                  <span className="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-sm font-medium">
                    User Research
                  </span>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm group">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    Data Visualization Dashboard
                  </h4>
                  <ExternalLink className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Interactive dashboard built with D3.js and Chart.js for visualizing complex data sets. Features
                  real-time updates and responsive design for various screen sizes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-sm font-medium">
                    D3.js
                  </span>
                  <span className="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-sm font-medium">
                    Chart.js
                  </span>
                  <span className="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-sm font-medium">
                    React
                  </span>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm group">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    Automated Testing Suite
                  </h4>
                  <ExternalLink className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive testing framework using Playwright, Mocha, and Chai. Reduced testing time by 60% through
                  automated end-to-end testing and continuous integration pipelines.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-sm font-medium">
                    Playwright
                  </span>
                  <span className="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-sm font-medium">
                    Mocha
                  </span>
                  <span className="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-sm font-medium">
                    CI/CD
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-5xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Let's Work Together
          </h3>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm currently open to new opportunities in Frontend Development, Full-stack Development, UI/UX Design,
            Business Development Executive roles, IT Support, and Management positions. Let's connect and build
            something amazing!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              asChild
              size="lg"
              className="group shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 px-8"
            >
              <a href="mailto:faisalejaz797@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Send me an email
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="group shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 px-8 bg-transparent"
            >
              <a href="https://wa.me/966505869094" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Book a call
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-8 mt-12">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
            >
              <Github className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border/40 bg-background/60 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p className="text-sm">© 2025 Faisal Ejaz. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
