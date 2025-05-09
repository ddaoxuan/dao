import { Github, Linkedin, Twitter } from "lucide-react";

export default function Home() {
	return (
		<div className="flex flex-col min-h-dvh text-white">
			<main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8">
				<div className="max-w-md mx-auto text-center">
					<h1 className="text-5xl mb-6">
						Hey, <span className="text-4xl">&#128075;</span>, I&apos;m Dawid
					</h1>
					<p className="text-xl mb-8 break-words">
						Senior Software Engineer specializing in enterprise-scale applications
						<span className="block text-base text-gray-200 mt-2">
							Passionate about crafting high-performance, scalable e-commerce solutions
							with 5+ years of industry expertise
						</span>
						<span className="block mt-2 text-xs">
							<span className="text-orange-500">Currently</span>: Senior
							Frontend Developer @
							<a
								className="underline"
								target="_blank"
								rel="noopener noreferrer"
								href="https://virginexperiencedays.co.uk"
							>
								Virgin Experience Days
							</a>
						</span>
					</p>
					<div className="space-y-4">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://go.daoxuan.dev/x?utm_source=website"
							className="flex items-center justify-center space-x-2 p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
						>
							<Twitter className="w-5 h-5" />
							<span>Follow me on Twitter</span>
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://go.daoxuan.dev/linkedin?utm_source=website"
							className="flex items-center justify-center space-x-2 p-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition-colors"
						>
							<Linkedin className="w-5 h-5" />
							<span>Connect on LinkedIn</span>
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://go.daoxuan.dev/github?utm_source=website"
							className="flex items-center justify-center space-x-2 p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900 transition-colors"
						>
							<Github className="w-5 h-5" />
							<span>Check out my GitHub</span>
						</a>
					</div>
					<span className="text-xs text-gray-500 mt-2">
						Yes, I made it with{" "}
						<a
							className="underline"
							target="_blank"
							rel="noopener noreferrer"
							href="https://v0.dev/"
						>
							v0
						</a>
					</span>
				</div>
			</main>
		</div>
	);
}
