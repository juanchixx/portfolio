"use client";

import { FormEvent, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { sendEmail } from "@/utils/Hooks";

export function Contact() {
	const formRef = useRef<HTMLFormElement>(null) as React.RefObject<HTMLFormElement>;

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef) return;
    
    sendEmail(formRef);
  };

	return (
		<section className="py-24">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl mb-4">
						Let's Work Together
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Ready to bring your ideas to life? I'm always excited to
						discuss new opportunities and creative challenges.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12">
					<div className="space-y-8">
						<div className="space-y-6">
							<h3 className="text-2xl">Get in Touch</h3>
							<p className="text-muted-foreground leading-relaxed">
								Whether you have a project in mind, need
								consultation on your existing application, or
								just want to chat about the latest in frontend
								development, I'd love to hear from you.
							</p>
						</div>

						<div className="space-y-4">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
									<Mail className="h-5 w-5 text-primary" />
								</div>
								<div>
									<div className="text-sm text-muted-foreground">
										Email
									</div>
									<div>juanchixx@gmail.com</div>
								</div>
							</div>

							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
									<MapPin className="h-5 w-5 text-primary" />
								</div>
								<div>
									<div className="text-sm text-muted-foreground">
										Location
									</div>
									<div>Córdoba, ARG</div>
								</div>
							</div>
						</div>

						<div className="space-y-4">
							<h4 className="text-lg">Response Time</h4>
							<div className="text-sm text-muted-foreground space-y-2">
								<div>• Email: Within 24 hours</div>
								<div>• Project inquiries: Same day</div>
								<div>• Urgent matters: Within 4 hours</div>
							</div>
						</div>
					</div>

					<Card>
						<CardHeader>
							<CardTitle>Send a Message</CardTitle>
						</CardHeader>
						<CardContent className="space-y-6">
							<form
								ref={formRef}
								onSubmit={handleFormSubmit}
                className="gap-4 flex flex-col"
							>
								<div className="grid grid-cols-2 gap-4">
									<div className="space-y-2">
										<Label htmlFor="name">
											Name
										</Label>
										<Input
											id="name"
                      name="name"
											placeholder="John Doe"
										/>
									</div>
								</div>

								<div className="space-y-2">
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
                    name="email"
										type="email"
										placeholder="john@example.com"
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="subject">Subject</Label>
									<Input
										id="subject"
                    name="subject"
										placeholder="Project Discussion"
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="message">Message</Label>
									<Textarea
										id="message"
                    name="message"
										placeholder="Tell me about your project or what you'd like to discuss..."
										className="min-h-[120px]"
									/>
								</div>

								<Button className="w-full group" type="submit">
									Send Message
									<Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
								</Button>
							</form>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
