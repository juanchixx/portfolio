import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowDown, Github as GithubIcon, Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Link from "next/link";

export function Hero() {
	return (
		<section className="min-h-screen flex items-center justify-center relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />

			<div className="container mx-auto px-6 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-8">
						<div className="space-y-4">
							<Badge variant="secondary" className="w-fit">
								Available for new opportunities
							</Badge>
							<h1 className="text-4xl md:text-6xl lg:text-7xl">
								Frontend UX/UI
								<span className="block text-primary">
									React Developer
								</span>
							</h1>
							<p className="text-lg text-muted-foreground max-w-lg">
								Crafting exceptional digital experiences through
								innovative design and clean, performant code.
								Specializing in React, TypeScript, and modern
								UI/UX principles.
							</p>
						</div>

						<div className="flex flex-wrap gap-4">
							<Button size="lg" className="group">
								View My Work
								<ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
							</Button>
							<Button variant="outline" size="lg">
								Download Resume
							</Button>
						</div>

						<div className="flex gap-4 pt-4">
							<Button asChild variant="ghost" size="icon">
								<Link
									href="https://github.com/juanchixx"
									target="_blank"
									rel="noopener noreferrer"
								>
									<GithubIcon className="h-5 w-5" />
								</Link>
							</Button>
							<Button asChild variant="ghost" size="icon">
								<Link
									href="https://www.linkedin.com/in/juanchixx/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Linkedin className="h-5 w-5" />
								</Link>
							</Button>
							<Button asChild variant="ghost" size="icon">
								<a
									href="mailto:juanchixx@gmail.com"
									aria-label="Enviar correo"
								>
									<Mail className="h-5 w-5" />
								</a>
							</Button>
						</div>
					</div>

					<div className="relative">
						<div className="relative rounded-2xl overflow-hidden shadow-2xl">
							<ImageWithFallback
								src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8ZW58MXx8fHwxNzU4NjAzOTk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
								alt="Professional developer workspace"
								className="w-full h-[500px] object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
						</div>

						{/* Floating elements */}
						<div className="absolute -top-4 -right-4 bg-card border rounded-lg p-4 shadow-lg">
							<div className="flex items-center gap-2">
								<div className="w-2 h-2 bg-green-500 rounded-full" />
								<span className="text-sm">Available</span>
							</div>
						</div>

						<div className="absolute -bottom-4 -left-4 bg-card border rounded-lg p-4 shadow-lg">
							<div className="text-sm">
								<div className="text-muted-foreground">
									Experience
								</div>
								<div>5+ Years</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
