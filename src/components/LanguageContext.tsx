"use client";

import { createContext, useContext, useState } from "react";

type Language = "en" | "es";

interface LanguageContextType {
	language: Language;
	toggleLanguage: () => void;
	t: (key: string) => string;
}

const translations = {
	en: {
		// Navigation
		"nav.about": "About",
		"nav.skills": "Skills",
		"nav.projects": "Projects",
		"nav.contact": "Contact",
		"nav.hire": "Hire Me",

		// Hero
		"hero.badge": "Available for new opportunities",
		"hero.title": "Frontend UX/UI React Developer",
		"hero.subtitle":
			"Creating beautiful, responsive, and user-friendly web applications with modern technologies and design principles.",
		"hero.cta": "View My Work",
		"hero.contact": "Get In Touch",
		"hero.downloadcv": "Download Resume",
		"hero.available": "Available",
		"hero.experience": "Experience",
		"hero.years": "7+ Years",

		// Skills
		"skills.title": "Technical Expertise",
		"skills.subtitle":
			"A comprehensive toolkit for building modern, scalable, and user-friendly web applications",
		"skills.frontend": "Frontend Frameworks",
		"skills.languages": "Languages",
		"skills.ui": "UI Libraries",
		"skills.tools": "Tools & Workflow",
		"skills.design": "Design & UX",
		"skills.testing": "Testing",
		"skills.backend": "Backend & APIs",
		"skills.projects": "Projects Completed",
		"skills.experience": "Years Experience",
		"skills.clients": "Happy Clients",
		"skills.satisfaction": "Client Satisfaction",

		// Projects
		"projects.title": "Featured Projects",
		"projects.subtitle":
			"A selection of my recent work showcasing different technologies and design approaches",
		"projects.ecommerce.title": "E-Commerce Platform",
		"projects.ecommerce.description":
			"Modern e-commerce solution with React, TypeScript, and Stripe integration. Features include product catalog, shopping cart, and secure checkout.",
		"projects.dashboard.title": "Analytics Dashboard",
		"projects.dashboard.description":
			"Responsive admin dashboard built with Next.js and D3.js. Real-time data visualization with interactive charts and graphs.",
		"projects.portfolio.title": "Portfolio Website",
		"projects.portfolio.description":
			"Clean and minimalist portfolio site showcasing responsive design principles and smooth animations using Framer Motion.",
		"projects.view": "View Project",
		"projects.code": "View Code",

		// About
		"about.title": "About Me",
		"about.subtitle":
			"Passionate about creating exceptional digital experiences",
		"about.description":
			"I'm a Frontend Developer with 7+ years of experience creating modern, responsive web applications. I specialize in React, TypeScript, and modern CSS frameworks, with a strong focus on user experience and performance optimization.",
		"about.passion":
			"My passion lies in translating complex problems into simple, beautiful, and intuitive designs. I believe that great software should not only function flawlessly but also provide an enjoyable user experience.",
		"about.approach":
			"I approach every project with attention to detail, clean code practices, and a commitment to delivering high-quality solutions that exceed expectations.",
		"about.usercentereddesign": "User-Centered Design",
		"about.efficientdevelopment": "Efficient Development",
		"about.collaborativeapproach": "Collaborative Approach",
		"about.continuouslearning": "Continuous Learning",
		"about.usercentereddescription":
			"Every decision is made with the end user in mind, ensuring intuitive and accessible experiences.",
		"about.efficientdescription":
			"Delivering high-quality code on time through agile methodologies and best practices.",
		"about.collaborativedescription":
			"Working closely with designers, product managers, and stakeholders to achieve shared goals.",
		"about.continuousdescription":
			"Staying current with the latest technologies and industry trends to deliver cutting-edge solutions.",

		// Contact
		"contact.title": "Let's Work Together",
		"contact.subtitle":
			"Ready to bring your project to life? Get in touch and let's discuss how we can create something amazing together.",
		"contact.name": "Full Name",
		"contact.email": "Email Address",
        "contact.subject": "Subject",
        "contact.subjectplaceholder": "Project Discussion",
		"contact.message": "Your Message",
        "contact.messageplaceholder": "Tell me about your project or what you'd like to discuss...",
		"contact.send": "Send Message",
		"contact.info": "Contact Information",
		"contact.location": "Location",
		"contact.availability": "Availability",
		"contact.response": "Response Time",
		"contact.locationValue": "Córdoba, ARG",
		"contact.availabilityValue": "Available for freelance",
		"contact.responseValue": "Within 24 hours",
        "contact.getintouch": "Get in Touch",
        "contact.description": "Whether you have a project in mind, need consultation on your existing application, or just want to chat about the latest in frontend development, I'd love to hear from you.",

		// Footer
        "footer.services": "Services",
        "footer.frontend": "Frontend Development",
        "footer.uiux": "UI/UX Design",
        "footer.react": "React Applications",
        "footer.connect": "Connect",
        "footer.madewith": "Made with",
        "footer.by": "by Juan M Diaz",
		"footer.rights": "All rights reserved.",
		"footer.built": "Built with React & Tailwind CSS",
	},
	es: {
		// Navigation
		"nav.about": "Acerca de",
		"nav.skills": "Habilidades",
		"nav.projects": "Proyectos",
		"nav.contact": "Contacto",
		"nav.hire": "Contrátame",

		// Hero
		"hero.badge": "Disponible para nuevas oportunidades",
		"hero.title": "Desarrollador Frontend UX/UI React",
		"hero.subtitle":
			"Creando aplicaciones web hermosas, responsivas y fáciles de usar con tecnologías modernas y principios de diseño.",
		"hero.cta": "Ver mi trabajo",
		"hero.contact": "Contactar",
		"hero.downloadcv": "Descargar CV",
		"hero.available": "Disponible",
		"hero.experience": "Experiencia",
		"hero.years": "7+ Años",

		// Skills
		"skills.title": "Experiencia Técnica",
		"skills.subtitle":
			"Un kit de herramientas completo para crear aplicaciones web modernas, escalables y fáciles de usar",
		"skills.frontend": "Frameworks Frontend",
		"skills.languages": "Lenguajes",
		"skills.ui": "Bibliotecas UI",
		"skills.tools": "Herramientas y Flujo",
		"skills.design": "Diseño y UX",
		"skills.testing": "Testing",
		"skills.backend": "Backend y APIs",
		"skills.projects": "Proyectos Completados",
		"skills.experience": "Años de Experiencia",
		"skills.clients": "Clientes Satisfechos",
		"skills.satisfaction": "Satisfacción del Cliente",

		// Projects
		"projects.title": "Proyectos Destacados",
		"projects.subtitle":
			"Una selección de mi trabajo reciente mostrando diferentes tecnologías y enfoques de diseño",
		"projects.ecommerce.title": "Plataforma E-Commerce",
		"projects.ecommerce.description":
			"Solución de comercio electrónico moderna con React, TypeScript e integración Stripe. Incluye catálogo de productos, carrito de compras y checkout seguro.",
		"projects.dashboard.title": "Dashboard de Analíticas",
		"projects.dashboard.description":
			"Dashboard administrativo responsivo construido con Next.js y D3.js. Visualización de datos en tiempo real con gráficos interactivos.",
		"projects.portfolio.title": "Sitio Web Portfolio",
		"projects.portfolio.description":
			"Sitio portfolio limpio y minimalista que muestra principios de diseño responsivo y animaciones suaves usando Framer Motion.",
		"projects.view": "Ver Proyecto",
		"projects.code": "Ver Código",

		// About
		"about.title": "Acerca de mi",
		"about.subtitle":
			"Apasionado por crear experiencias digitales excepcionales",
		"about.description":
			"Soy un Desarrollador Frontend con más de 7 años de experiencia creando aplicaciones web modernas y responsivas. Me especializo en React, TypeScript y frameworks CSS modernos, con un fuerte enfoque en la experiencia de usuario y optimización de rendimiento.",
		"about.passion":
			"Mi pasión radica en traducir problemas complejos en diseños simples, hermosos e intuitivos. Creo que el gran software no solo debe funcionar perfectamente sino también proporcionar una experiencia de usuario agradable.",
		"about.approach":
			"Abordo cada proyecto con atención al detalle, prácticas de código limpio y un compromiso de entregar soluciones de alta calidad que superen las expectativas.",
		"about.usercentereddesign": "Diseño Centrado en el Usuario",
		"about.efficientdevelopment": "Desarrollo Eficiente",
		"about.collaborativeapproach": "Enfoque Colaborativo",
        "about.continuouslearning": "Aprendizaje Continuo",
        "about.usercentereddescription": "Cada decisión se toma pensando en el usuario final, asegurando experiencias intuitivas y accesibles.",
        "about.efficientdescription": "Entrega de código de alta calidad a tiempo mediante metodologías ágiles y mejores prácticas.",
        "about.collaborativedescription": "Trabajo en estrecha colaboración con diseñadores, gerentes de producto y partes interesadas para lograr objetivos compartidos.",
        "about.continuousdescription": "Mantenerme al día con las últimas tecnologías y tendencias de la industria para ofrecer soluciones innovadoras.",

		// Contact
		"contact.title": "Trabajemos Juntos",
		"contact.subtitle":
			"¿Listo para dar vida a tu proyecto? Ponte en contacto y hablemos sobre cómo podemos crear algo increíble juntos.",
		"contact.name": "Nombre Completo",
		"contact.email": "Correo Electrónico",
        "contact.subject": "Asunto",
        "contact.subjectplaceholder": "Discusión de Proyecto",
		"contact.message": "Tu Mensaje",
        "contact.messageplaceholder": "Cuéntame sobre tu proyecto o de qué te gustaría hablar...",
		"contact.send": "Enviar Mensaje",
		"contact.info": "Información de Contacto",
		"contact.location": "Ubicación",
		"contact.availability": "Disponibilidad",
		"contact.response": "Tiempo de Respuesta",
		"contact.locationValue": "Córdoba, ARG",
		"contact.availabilityValue": "Disponible para freelance",
		"contact.responseValue": "Dentro de 24 horas",
        "contact.getintouch": "Ponte en Contacto",
        "contact.description": "Ya sea que tengas un proyecto en mente, necesites consultoría sobre tu aplicación existente, o simplemente quieras charlar sobre lo último en desarrollo frontend, me encantaría saber de ti.",

		// Footer
        "footer.services": "Servicios",
        "footer.frontend": "Desarrollo Frontend",
        "footer.uiux": "Diseño UI/UX",
        "footer.react": "Aplicaciones React",
        "footer.connect": "Conectar",
        "footer.madewith": "Hecho con",
        "footer.by": "por Juan M Diaz",
		"footer.rights": "Todos los derechos reservados.",
		"footer.built": "Construido con React y Tailwind CSS",
	},
};

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
	const [language, setLanguage] = useState<Language>("en");

	const toggleLanguage = () => {
		setLanguage((prev) => (prev === "en" ? "es" : "en"));
	};

	const t = (key: string): string => {
		return (
			translations[language][key as keyof (typeof translations)["en"]] ||
			key
		);
	};

	return (
		<LanguageContext.Provider value={{ language, toggleLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
}
