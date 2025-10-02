"use client";

import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, Users, Clock, Target } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const values = [
	{
		icon: Target,
		title: "about.usercentereddesign",
		description:
			"about.usercentereddescription",
	},
	{
		icon: Clock,
		title: "about.efficientdevelopment",
		description:
			"about.efficientdescription",
	},
	{
		icon: Users,
		title: "about.collaborativeapproach",
		description:
			"about.collaborativedescription",
	},
	{
		icon: Award,
		title: "about.continuouslearning",
		description:
			"about.continuousdescription",
	},
];

export function About() {
	const { t } = useLanguage();

	return (
		<section className="py-24 bg-muted/30">
			<div className="container mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div className="space-y-8">
						<div className="space-y-4">
							<Badge variant="secondary" className="w-fit">
								{t('about.title')}
							</Badge>
							<h2 className="text-3xl md:text-4xl">
								{t('about.subtitle')}
							</h2>
							<div className="space-y-4 text-muted-foreground">
								<p>
									{t('about.description')}
								</p>
								<p>
									{t('about.passion')}
								</p>
								<p>
									{t('about.approach')}
								</p>
							</div>
						</div>

						{/* <div className="flex flex-wrap gap-2">
              {["Problem Solving", "Team Leadership", "Mentoring", "Open Source", "Speaking"].map((interest, index) => (
                <Badge key={index} variant="outline">
                  {interest}
                </Badge>
              ))}
            </div> */}
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{values.map((value, index) => (
							<Card
								key={index}
								className="p-6 hover:shadow-lg transition-all duration-300"
							>
								<CardContent className="p-0 space-y-3">
									<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
										<value.icon className="h-6 w-6 text-primary" />
									</div>
									<h3 className="text-lg">{t(value.title)}</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{t(value.description)}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
