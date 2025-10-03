"use client";

import { FormEvent, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, MapPin, Send } from "lucide-react";
import { sendEmail } from "@/utils/Hooks";
import { useLanguage } from "./LanguageContext";

export function Contact() {
	const { t } = useLanguage();
	const formRef = useRef<HTMLFormElement>(
		null
	) as React.RefObject<HTMLFormElement>;

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
						{t("contact.title")}
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						{t("contact.subtitle")}
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12">
					<div className="space-y-8">
						<div className="space-y-6">
							<h3 className="text-2xl">
								{t("contact.getintouch")}
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								{t("contact.description")}
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
										{t("contact.location")}
									</div>
									<div>{t("contact.locationValue")}</div>
								</div>
							</div>
						</div>

						<div className="space-y-4">
							<h4 className="text-lg">{t("contact.response")}</h4>
							<div className="text-sm text-muted-foreground space-y-2">
								<div>• Email: {t("contact.responseValue")}</div>
							</div>
						</div>
					</div>

					<Card>
						<CardHeader>
							<CardTitle>{t("contact.send")}</CardTitle>
						</CardHeader>
						<CardContent className="space-y-6">
							<form
								ref={formRef}
								onSubmit={handleFormSubmit}
								className="gap-4 flex flex-col"
							>
								<div className="space-y-2">
									<Label htmlFor="name">
										{t("contact.name")}
									</Label>
									<Input
										id="name"
										name="name"
										placeholder="John Doe"
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										name="email"
										type="email"
										placeholder="john@example.com"
                    required
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="subject">
										{t("contact.subject")}
									</Label>
									<Input
										id="subject"
										name="subject"
										placeholder={t(
											"contact.subjectplaceholder"
										)}
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="message">
										{t("contact.message")}
									</Label>
									<Textarea
										id="message"
										name="message"
										placeholder={t(
											"contact.messageplaceholder"
										)}
										className="min-h-[120px]"
									/>
								</div>

								<Button className="w-full group" type="submit">
									{t("contact.send")}
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
