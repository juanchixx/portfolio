import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";
// import { Projects } from "../components/Projects";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { ThemeProvider } from "../components/ThemeContext";
import { LanguageProvider } from "../components/LanguageContext";

export default function Home() {
	return (
		<ThemeProvider>
			<LanguageProvider>
				<div className="min-h-screen">
					<Navigation />
					<main>
						<Hero />
						<section id="skills">
							<Skills />
						</section>
						{/* <section id="projects">
          <Projects />
        </section> */}
						<section id="about">
							<About />
						</section>
						<section id="contact">
							<Contact />
						</section>
					</main>
					<Footer />
				</div>
			</LanguageProvider>
		</ThemeProvider>
	);
}
