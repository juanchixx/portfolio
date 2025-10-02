"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowDown, Github as GithubIcon, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function Hero() {
	const { t } = useLanguage();

	return (
		<section className="min-h-screen flex items-center justify-center relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />

			<div className="container mx-auto px-6 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-8">
						<div className="space-y-4">
							<Badge variant="secondary" className="w-fit">
								{t("hero.badge")}
							</Badge>
							<h1 className="text-4xl md:text-6xl lg:text-7xl">
								{t("hero.title")}
							</h1>
							<p className="text-lg text-muted-foreground max-w-lg">
								{t("hero.subtitle")}
							</p>
						</div>

						<div className="flex flex-wrap gap-4">
							<Button size="lg" className="group">
								{t("hero.cta")}
								<ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
							</Button>
							<Button asChild variant="outline" size="lg">
								<Link
									href="/cv_juandiaz.pdf"
									target="_blank"
									download
								>
									{t("hero.downloadcv")}
								</Link>
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
              <div className="w-full h-[500px] object-cover">
							<Image
								src="/hero_img.png"
								alt="windows with Code and Figma"
                fill
							/>
              </div>
							<div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
						</div>

						{/* Floating elements */}
						<div className="absolute -top-4 -right-4 bg-card border rounded-lg p-4 shadow-lg">
							<div className="flex items-center gap-2">
								<div className="w-2 h-2 bg-green-500 rounded-full" />
								<span className="text-sm">
									{t("hero.available")}
								</span>
							</div>
						</div>

						<div className="absolute -bottom-4 -left-4 bg-card border rounded-lg p-4 shadow-lg">
							<div className="text-sm">
								<div className="text-muted-foreground">
									{t("hero.experience")}
								</div>
								<div>{t("hero.years")}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
