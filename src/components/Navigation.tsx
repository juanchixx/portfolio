"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X, Moon, Globe, Sun, Linkedin } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";

export function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { theme, toggleTheme } = useTheme();
	const { language, toggleLanguage, t } = useLanguage();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ label: "nav.about", href: "#about" },
		{ label: "nav.skills", href: "#skills" },
		// { label: "nav.projects", href: "#projects" },
		{ label: "nav.contact", href: "#contact" },
	];

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-background/95 backdrop-blur-sm border-b"
					: "bg-transparent"
			}`}
		>
			<div className="container mx-auto px-6">
				<div className="flex items-center justify-between h-16">
					<div className="text-xl">
						<span className="text-primary">Juan M </span>Diaz
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => (
							<a
								key={item.label}
								href={item.href}
								className="text-sm hover:text-primary transition-colors"
							>
								{t(item.label)}
							</a>
						))}
						{/* Theme Toggle */}
						<Button
							variant="ghost"
							size="icon"
							onClick={toggleTheme}
							className="w-9 h-9"
						>
							{theme === "light" ? (
								<Moon className="h-4 w-4" />
							) : (
								<Sun className="h-4 w-4" />
							)}
						</Button>

						{/* Language Toggle */}
						<Button
							variant="ghost"
							size="sm"
							onClick={toggleLanguage}
							className="text-xs"
						>
							<Globe className="h-4 w-4 mr-1" />
							{language.toUpperCase()}
						</Button>
						<Button asChild size="sm">
							<Link
								href="https://www.linkedin.com/in/juanchixx/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Linkedin className="h-5 w-5" />
							</Link>
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<Button
						variant="ghost"
						size="icon"
						className="md:hidden"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					>
						{isMobileMenuOpen ? (
							<X className="h-5 w-5" />
						) : (
							<Menu className="h-5 w-5" />
						)}
					</Button>
				</div>

				{/* Mobile Navigation */}
				{isMobileMenuOpen && (
					<div className="md:hidden border-t bg-background/95 backdrop-blur-sm">
						<div className="py-4 space-y-4">
							{navItems.map((item) => (
								<a
									key={item.label}
									href={item.href}
									className="block px-4 py-2 text-sm hover:text-primary transition-colors"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{item.label}
								</a>
							))}
							<div className="px-4">
								<Button size="sm" className="w-full">
									{t("nav.hire")}
								</Button>
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
