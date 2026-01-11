import { Briefcase, Calendar, ArrowRight } from 'lucide-react';

type Experience = {
	id: number;
	role: string;
	period: string;
	company: string;
	bullets: string[];
	skills: string[];
};

const experiences: Experience[] = [
	{
		id: 1,
		role: 'Estagiário de Desenvolvimento Web',
		period: 'Abr 2025 — Nov 2025',
		company: 'Liberty TI',
		bullets: [
			'Colaborei no desenvolvimento front-end com React + TypeScript',
			'Apoiei implementações mobile com React Native',
			'Participei do design de telas no Figma e prototipagem',
			'Testes manuais e ajustes de UX para landing pages'
		],
		skills: ['React', 'TypeScript', 'React Native', 'Figma']
	},
	{
		id: 2,
		role: 'Desenvolvedor Júnior',
		period: 'Nov 2025 — Presente',
		company: 'Liberty TI',
		bullets: [
			'Desenvolvimento front-end em TypeScript e React',
			'Desenvolvimento back-end em Spring Boot (Java)',
			'Integração e gestão de autenticação com Keycloak',
			'Monitoramento e análise com Grafana',
			'Manutenção e gestão de sistemas open-source usados pela empresa'
		],
		skills: ['Spring Boot', 'Keycloak', 'Grafana', 'Open Source']
	}
];

export default function Worker() {
	return (
		<section id="trabalhos" className="py-16 bg-transparent">
			<div className="container mx-auto px-6 max-w-6xl" data-aos="fade-up">
				<div className="flex items-center justify-center gap-3 mb-12">
					<Briefcase size={36} className="text-indigo-600" />
					<h2 className="text-3xl font-bold text-slate-900">Trabalhos</h2>
				</div>

				<div className="relative">
					{/* central vertical line */}
					<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-100"></div>

					<div className="space-y-12">
						{experiences.map((exp, idx) => {
							const isLeft = idx % 2 === 0; // alternate sides
							return (
								<div key={exp.id} className="relative">
									{/* timeline dot */}
									<div className="absolute left-1/2 top-6 transform -translate-x-1/2">
										<span className="w-4 h-4 block rounded-full bg-indigo-600 ring-4 ring-white"></span>
									</div>

									<div className={`flex items-start gap-6 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:items-center`}>
										<div className={`md:w-1/2 w-full md:px-8 ${isLeft ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
											<div className={`inline-block md:max-w-md w-full ${isLeft ? 'md:ml-auto' : 'md:mr-auto'}`}>
												<div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-lg">
													<div className="flex items-center gap-3 mb-2">
														<h3 className="text-lg font-semibold text-slate-900">{exp.role}</h3>
													</div>
													<div className="text-sm text-slate-500 flex items-center gap-2 mb-3">
														<Calendar size={16} />
														<span>{exp.period}</span>
													</div>
													<p className="text-sm text-slate-700 mb-3">{exp.company}</p>
													<ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
														{exp.bullets.map((b, i) => (
															<li key={i}>{b}</li>
														))}
													</ul>

													<div className="mt-4 flex flex-wrap gap-2">
														{exp.skills.map((s) => (
															<span key={s} className="text-xs px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-medium">{s}</span>
														))}
													</div>
												</div>
											</div>
										</div>

										<div className="md:w-1/2 w-full flex justify-center md:justify-center md:items-center">
											{/* small spacer on the other side so the layout balances */}
											<div className="hidden md:block w-full" />
										</div>
									</div>
								</div>
							);
						})}
					</div>

				</div>
					<div className="mt-10 flex justify-center">
						<a href="#projetos" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-full font-semibold hover:bg-indigo-700 transition">
							Ver Projetos
							<ArrowRight size={18} />
						</a>
					</div>
			</div>
		</section>
	);
}

