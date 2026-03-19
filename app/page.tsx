import GSAPAnimations from './components/GSAPAnimations'
import MobileNav from './components/MobileNav'
import WhatsAppButton from './components/WhatsAppButton'
import ContactForm from './components/ContactForm'
import TrackedLink from './components/TrackedLink'

export default function Home() {
  return (
    <div className="bg-[#fbf9f9] text-[#323234] max-w-[1600px] mx-auto">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#6b558a] focus:text-[#fef6ff] focus:px-4 focus:py-2 focus:rounded-full focus:text-sm focus:font-bold"
      >
        Ir al contenido principal
      </a>
      <GSAPAnimations />

      {/* ── NAV ── */}
      <nav className="bg-[#fbf9f9]/80 backdrop-blur-xl sticky top-0 z-50 shadow-[0_4px_40px_rgba(107,85,138,0.06)]">
        <div className="flex justify-between items-center px-6 md:px-10 py-3">
          <a href="#main-content" aria-label="Inicio Cuidando Sonrisas">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Logo Cuidando Sonrisas"
              className="h-9 md:h-10 w-auto"
              src="/logo.webp"
              width={512}
              height={240}
            />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              { label: 'Servicios', href: '#servicios' },
              { label: 'Historia', href: '#historia' },
              { label: 'Contacto', href: '#contacto' },
            ].map((item) => (
              <a
                key={item.label}
                className="text-[#6d6475] hover:text-[#6b558a] font-medium transition-colors duration-200 cursor-pointer min-h-[44px] flex items-center"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <TrackedLink
              href="https://wa.me/573206164740?text=Hola%2C%20quisiera%20solicitar%20una%20consultor%C3%ADa%20con%20Cuidando%20Sonrisas."
              event="cta_nav_consultoria"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center bg-[#6b558a] text-[#fef6ff] px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all duration-200 active:scale-95 cursor-pointer min-h-[44px]"
            >
              Solicitar Consultoría
            </TrackedLink>
            <MobileNav />
          </div>
        </div>
      </nav>

      <main className="w-full" id="main-content">

        {/* ── HERO ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-24 bg-gradient-to-br from-[#d9befb]/25 via-[#fbf9f9] to-[#fbf9f9]">
            <h1
              data-gsap="hero-title"
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8 lg:mb-12 text-[#323234] font-headline text-balance [font-feature-settings:'kern'_1,'liga'_1]"
            >
              La salud oral también impacta el tratamiento del cáncer
            </h1>
            <div data-gsap="hero-body" className="max-w-xl">
              <p className="text-lg lg:text-xl leading-relaxed font-normal text-[#6d6475] mb-6 lg:mb-8">
                La falta de manejo odontológico en pacientes oncológicos puede generar
                complicaciones, interrupciones del tratamiento y afectar su calidad de vida.
              </p>
              <ul className="space-y-2 mb-8 lg:mb-10">
                {[
                  'Prevención de complicaciones orales',
                  'Educación basada en evidencia científica',
                  'Acompañamiento a pacientes y equipos de salud',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#6d6475]">
                    <span aria-hidden="true" className="material-symbols-outlined text-[#6b558a] text-base shrink-0">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4" data-gsap="hero-buttons">
                <TrackedLink href="https://wa.me/573206164740?text=Hola%2C%20quisiera%20solicitar%20una%20conferencia%20o%20consultor%C3%ADa%20con%20Cuidando%20Sonrisas.%20%C2%BFMe%20pueden%20dar%20m%C3%A1s%20informaci%C3%B3n%3F" event="cta_hero_conferencia" target="_blank" rel="noopener noreferrer" className="btn-primary">Solicitar conferencia o consultoría</TrackedLink>
                <a href="#servicios" className="btn-outline">Ver servicios</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[340px] sm:min-h-[480px] lg:min-h-[600px]">
            <div className="img-wrap absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Profesional de salud especializada en odontología oncológica"
                className="desaturated-img object-top"
                src="/hero.webp"
                width={800}
                height={1000}
                fetchPriority="high"
              />
            </div>
            <div
              data-gsap="hero-card"
              className="absolute bottom-8 lg:bottom-12 left-0 bg-white shadow-[0_4px_40px_rgba(107,85,138,0.12)] rounded-r-2xl p-6 lg:p-8 max-w-[240px] sm:max-w-xs border-l-4 border-[#6b558a] z-10"
            >
              <p className="text-sm font-semibold italic text-[#323234] leading-relaxed">
                Guiamos a pacientes hacia una mejor calidad de vida.
              </p>
            </div>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section className="bg-white">
          <div className="px-8 py-10 sm:px-12 sm:py-12 lg:px-16 lg:py-14 bg-[#ebddf7]/40">
            <h2
              data-gsap="fade-up"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#323234] font-headline italic"
            >
              Especialistas en odontología oncológica y educación en salud
            </h2>
            <p data-gsap="fade-up" className="text-base lg:text-lg text-[#6b558a] font-semibold mt-4">
              Formación internacional, experiencia clínica y trayectoria en docencia universitaria
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Daniela */}
            <div className="grid grid-cols-1 sm:grid-cols-2 bg-[#f5f3f4]">
              {/* BUG FIX: img-wrap da isolation + overflow-hidden al contenedor */}
              <div className="img-wrap h-[280px] sm:h-[360px] lg:h-auto lg:min-h-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  data-gsap="img"
                  loading="lazy"
                  decoding="async"
                  alt="Daniela Bustamante V., odontóloga especialista en pacientes oncológicos"
                  className="desaturated-img object-top"
                  src="/daniela.webp"
                  width={600}
                  height={800}
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center bg-white">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6b558a] mb-2">
                  Especialista Principal
                </span>
                <h3 className="text-xl lg:text-2xl font-bold text-[#323234] mb-5 font-headline">
                  Daniela Bustamante V.
                </h3>
                <ul className="space-y-3 lg:space-y-4" data-gsap="stagger">
                  {[
                    { icon: 'school', text: 'Odontóloga Universidad del Valle' },
                    { icon: 'clinical_notes', text: 'Especialista en odontología de pacientes con patología médica asociada Universidad de Barcelona' },
                    { icon: 'badge', text: 'Diplomado Gestión Integral de Unidades Oncológicas Universidad del Valle' },
                    { icon: 'precision_manufacturing', text: 'Planeación de cirugía implantes y diseño de guías quirúrgicas' },
                  ].map((item, i) => (
                    <li key={i} data-gsap="stagger-item" className="flex gap-3 text-sm text-[#6d6475] leading-relaxed">
                      <span aria-hidden="true" className="material-symbols-outlined text-[#6b558a] text-base shrink-0 mt-0.5">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Angie */}
            <div className="grid grid-cols-1 sm:grid-cols-2 bg-[#f5f3f4]">
              <div className="img-wrap h-[280px] sm:h-[360px] lg:h-auto lg:min-h-0 sm:order-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  data-gsap="img"
                  loading="lazy"
                  decoding="async"
                  alt="Angie Nathaly Verdugo R., máster en pacientes oncológicos"
                  className="desaturated-img object-[center_15%]"
                  src="/angie.webp"
                  width={600}
                  height={800}
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center bg-white sm:order-1">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6b558a] mb-2">
                  Especialista Principal
                </span>
                <h3 className="text-xl lg:text-2xl font-bold text-[#323234] mb-5 font-headline">
                  Angie Nathaly Verdugo R.
                </h3>
                <ul className="space-y-3 lg:space-y-4" data-gsap="stagger">
                  {[
                    { icon: 'school', text: 'Odontóloga Unicoc Bogotá' },
                    { icon: 'corporate_fare', text: 'Especialista en gerencia de empresas U.Rosario' },
                    { icon: 'workspace_premium', text: 'Máster en pacientes oncológicos e inmunocomprometidos Universidad de Barcelona' },
                    { icon: 'account_balance', text: 'Presidente ACOPNE' },
                  ].map((item, i) => (
                    <li key={i} data-gsap="stagger-item" className="flex gap-3 text-sm text-[#6d6475] leading-relaxed">
                      <span aria-hidden="true" className="material-symbols-outlined text-[#6b558a] text-base shrink-0 mt-0.5">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Group photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#efedef]/20">
            <div className="img-wrap lg:col-span-8 h-64 sm:h-80 lg:h-[400px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                data-gsap="img"
                loading="lazy"
                decoding="async"
                alt="Equipo Cuidando Sonrisas"
                className="desaturated-img"
                src="/team-group.webp"
                width={1200}
                height={800}
              />
            </div>
            <div className="lg:col-span-4 p-8 lg:p-12 flex flex-col justify-center bg-[#fbf9f9]">
              <h4 data-gsap="fade-up" className="text-2xl font-bold font-headline italic mb-4">
                Compromiso y Ciencia
              </h4>
              <p data-gsap="fade-up" className="text-[#6d6475] text-sm leading-relaxed italic">
                &quot;Nuestra unión profesional nace del rigor clínico y la empatía
                absoluta por el paciente que atraviesa el proceso oncológico.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* ── CHALLENGE ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-4 p-8 sm:p-12 lg:p-20 bg-[#ebddf7]">
            <h2 data-gsap="fade-up" className="text-3xl sm:text-4xl font-bold leading-tight italic font-headline text-[#323234]">
              Un área crítica del tratamiento oncológico sigue siendo ignorada
            </h2>
          </div>
          <div className="lg:col-span-8 p-8 sm:p-12 lg:p-20 flex flex-col justify-center bg-white">
            <p data-gsap="fade-up" className="text-xl lg:text-3xl font-light leading-relaxed mb-8 text-[#6d6475]">
              Muchos pacientes con cáncer no reciben orientación sobre su salud oral
              durante su tratamiento. Esto puede generar mucositis oral, infecciones,
              dolor severo e incluso la suspensión del tratamiento oncológico.
            </p>
            <div data-gsap="line" className="h-1.5 w-24 bg-[#6b558a] rounded-full" />
          </div>
        </section>

        {/* ── SOLUTION ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 flex flex-col">
            <div className="p-8 sm:p-12 lg:p-20 flex flex-col gap-8 bg-[#fbf9f9]">
              <h2 data-gsap="fade-up" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#323234] font-headline">
                Educación especializada en odontología oncológica
              </h2>
              <p data-gsap="fade-up" className="text-[#6d6475] text-base lg:text-lg leading-relaxed">
                Cuidando Sonrisas traduce la evidencia científica en herramientas prácticas
                para pacientes, profesionales e instituciones de salud. Somos un proyecto
                liderado por especialistas con formación internacional, experiencia clínica
                y trayectoria en educación universitaria.
              </p>
              <div className="space-y-4" data-gsap="stagger">
                {[
                  'Enfoque basado en evidencia científica',
                  'Experiencia clínica con pacientes oncológicos',
                  'Formación docente universitaria',
                  'Trabajo interdisciplinario en salud',
                ].map((item) => (
                  <div
                    key={item}
                    data-gsap="stagger-item"
                    className="flex items-center gap-4 rounded-2xl p-5 bg-[#f5f3f4]"
                  >
                    <span aria-hidden="true" className="material-symbols-outlined accent-text shrink-0">check_circle</span>
                    <span className="text-sm font-bold uppercase tracking-wider text-[#323234]">{item}</span>
                  </div>
                ))}
              </div>
              <div data-gsap="fade-up">
                <TrackedLink
                  href="https://wa.me/573206164740?text=Hola%2C%20vi%20la%20informaci%C3%B3n%20del%20equipo%20y%20quisiera%20agendar%20una%20consulta%20con%20Cuidando%20Sonrisas."
                  event="cta_why_consultoria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Solicitar Consultoría
                  <span aria-hidden="true" className="material-symbols-outlined text-base">arrow_forward</span>
                </TrackedLink>
              </div>
            </div>
            <div className="bg-[#ebddf7]/30 p-8 sm:p-12 lg:p-16">
              <blockquote className="italic text-xl lg:text-2xl font-headline font-semibold text-[#6b558a]/80 border-l-4 border-[#6b558a] pl-8">
                &quot;Nuestra misión es que ningún paciente deba interrumpir su
                tratamiento oncológico por una causa oral prevenible.&quot;
              </blockquote>
            </div>
          </div>
          <div className="img-wrap lg:col-span-5 h-[280px] lg:h-auto lg:min-h-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              data-gsap="img"
              loading="lazy"
              decoding="async"
              alt="Apoyo y acompañamiento a pacientes oncológicos"
              className="desaturated-img object-top"
              src="/team.webp"
              width={800}
              height={1000}
            />
          </div>
        </section>

        {/* ── LINES OF ACTION ── */}
        <section id="servicios">
          <div className="p-8 sm:p-12 bg-[#ebddf7] text-[#323234] flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <h2 data-gsap="fade-up" className="text-3xl sm:text-4xl font-bold italic font-headline">
              ¿Cómo podemos trabajar juntos?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 bg-white" data-gsap="stagger">
            {[
              { icon: 'school', title: 'Conferencias para profesionales de la salud', desc: 'Capacitaciones dirigidas a odontólogos, médicos, enfermeros y equipos clínicos para fortalecer el manejo integral del paciente oncológico.' },
              { icon: 'volunteer_activism', title: 'Conferencias para pacientes y cuidadores', desc: 'Charlas educativas claras y accesibles sobre el cuidado oral durante el tratamiento del cáncer y la prevención de complicaciones.' },
              { icon: 'corporate_fare', title: 'Consultoría para instituciones', desc: 'Acompañamiento especializado para hospitales, clínicas y organizaciones en el desarrollo de estrategias y rutas de atención en salud oral para pacientes oncológicos.' },
            ].map((item, i) => (
              <div
                key={i}
                data-gsap="stagger-item"
                className="p-8 lg:p-12 hover:bg-[#f5f3f4] transition-colors duration-200 cursor-default group"
              >
                <span aria-hidden="true" className="material-symbols-outlined text-[#6b558a] text-5xl mb-6 block transition-transform duration-300 group-hover:scale-110 group-hover:translate-y-[-4px]">
                  {item.icon}
                </span>
                <h3 className="text-lg lg:text-xl font-bold tracking-tight mb-4 text-[#323234] font-headline">{item.title}</h3>
                <p className="text-sm text-[#6d6475] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white px-8 py-10 lg:px-12 flex justify-center" data-gsap="fade-up">
            <TrackedLink href="#contacto" event="cta_servicios_info" className="btn-primary inline-flex items-center gap-2">
              Solicitar información
              <span aria-hidden="true" className="material-symbols-outlined text-base">arrow_forward</span>
            </TrackedLink>
          </div>
        </section>

        {/* ── WHY ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 bg-[#fbf9f9]">
          <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-center lg:py-16">
            <h2 data-gsap="fade-up" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8 text-[#323234] font-headline">
              Por qué Cuidando Sonrisas
            </h2>
            <p data-gsap="fade-up" className="text-sm text-[#6d6475] leading-relaxed mb-8">
              Trabajamos desde la ciencia, la experiencia y el compromiso con el cuidado integral del paciente.
            </p>
            <div className="space-y-6" data-gsap="stagger">
              {[
                { label: 'Formación internacional', text: 'Especialización en odontología oncológica con formación en instituciones de referencia internacional.' },
                { label: 'Experiencia clínica', text: 'Trabajo directo con pacientes oncológicos en diferentes etapas del tratamiento.' },
                { label: 'Docencia universitaria', text: 'Trayectoria en educación y formación de profesionales de la salud.' },
                { label: 'Trabajo interdisciplinario', text: 'Participación activa en entornos hospitalarios y oncológicos.' },
              ].map((item) => (
                <div key={item.label} data-gsap="stagger-item" className="border-l-4 border-[#6b558a] pl-8">
                  <span className="text-xs font-bold uppercase tracking-widest block mb-3 text-[#6b558a]">{item.label}</span>
                  <p className="text-base text-[#6d6475] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          {/* 2×2 image grid — each wrapped in img-wrap to prevent blend bleeding */}
          <div className="lg:col-span-7 grid grid-cols-2 grid-rows-[auto_auto] gap-0 content-start">
            {[
              { src: '/why1.webp', pos: 'object-[center_22%]', alt: 'Especialista en odontología oncológica en Fundación Santa Fe de Bogotá' },
              { src: '/why4.webp', pos: 'object-[center_25%]', alt: 'Equipo de odontólogas especializadas en pacientes oncológicos' },
              { src: '/why3b.webp', pos: 'object-[center_12%]', alt: 'Equipo de especialistas en odontología oncológica' },
              { src: '/why2.webp', pos: 'object-[center_18%]', alt: 'Especialista en odontología oncológica' },
            ].map((item, i) => (
              <div key={i} className="img-wrap aspect-square">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img data-gsap="img" loading="lazy" decoding="async" alt={item.alt} className={`desaturated-img ${item.pos}`} src={item.src} width={600} height={600} />
              </div>
            ))}
          </div>
        </section>

        {/* ── ORIGIN STORY ── */}
        <section id="historia" className="grid grid-cols-1 md:grid-cols-2 md:h-[560px]">
          <div className="bg-[#ebddf7] p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <h2 data-gsap="fade-up" className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 font-headline text-[#323234]">
              Una necesidad que se convirtió en propósito
            </h2>
            <p data-gsap="fade-up" className="text-lg lg:text-xl font-light italic opacity-90 mb-4 font-headline text-[#6d6475]">
              Cuidando Sonrisas nace desde una experiencia personal.
            </p>
            <p data-gsap="fade-up" className="text-base text-[#6d6475] leading-relaxed max-w-lg mb-8">
              Acompañar a un familiar con cáncer sin recibir orientación sobre su salud oral
              evidenció una realidad poco visible: la odontología oncológica no estaba integrada
              en la atención del paciente. Hoy trabajamos para cambiar eso, promoviendo educación,
              prevención y acompañamiento en cada etapa del proceso.
            </p>
            <div data-gsap="fade-up" className="flex items-center gap-6">
              <div className="w-14 h-14 bg-[#6b558a] rounded-2xl flex items-center justify-center shrink-0" aria-hidden="true">
                <span className="material-symbols-outlined text-white text-3xl">favorite</span>
              </div>
              <span className="text-xl lg:text-2xl font-headline italic font-semibold text-[#323234]">
                &quot;Por ellos, por todos.&quot;
              </span>
            </div>
          </div>
          <div className="img-wrap min-h-[300px] md:min-h-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              data-gsap="img"
              loading="lazy"
              decoding="async"
              alt="Las fundadoras Daniela y Angie, orígenes de Cuidando Sonrisas"
              className="desaturated-img object-[center_65%]"
              src="/specialists.webp"
              width={800}
              height={1000}
            />
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="grid grid-cols-1 sm:grid-cols-3 bg-white border-t-4 border-[#d9befb]">
          {[
            { value: '↓ Riesgo', label: 'Prevención de complicaciones orales' },
            { value: '↑ Calidad', label: 'Mejora en la calidad de vida del paciente' },
            { value: '→ Continua', label: 'Mayor continuidad del tratamiento oncológico' },
          ].map((stat, i) => (
            <div key={i} className={`py-8 px-6 sm:p-12 lg:p-16 flex flex-col items-center justify-center text-center ${i < 2 ? 'sm:border-r sm:border-[#f5f3f4]' : ''}`}>
              <div data-gsap="stat" className="text-5xl sm:text-6xl lg:text-7xl font-extrabold accent-text mb-4 font-headline">
                {stat.value}
              </div>
              <p className="data-label m-0">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* ── ECOSYSTEM ── */}
        <section id="educacion" className="px-6 py-14 sm:p-16 lg:p-20 bg-[#f5f3f4] text-center">
          <h2 data-gsap="fade-up" className="text-3xl sm:text-4xl font-bold tracking-tight mb-10 text-[#323234] font-headline">
            Trabajamos con todo el ecosistema de salud
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6" data-gsap="stagger">
            {[
              'Clínicas y hospitales',
              'Centros oncológicos',
              'Fundaciones',
              'Universidades',
              'Profesionales de la salud',
            ].map((tag) => (
              <span
                key={tag}
                data-gsap="stagger-item"
                className="bg-white px-6 sm:px-10 py-3 sm:py-4 text-xs font-bold uppercase tracking-widest rounded-full text-[#323234] shadow-[0_2px_20px_rgba(107,85,138,0.07)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>


        {/* ── CONTACT / FORM ── */}
        <section id="contacto" className="grid grid-cols-1 lg:grid-cols-12 bg-[#ebddf7]">
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-24 flex flex-col justify-center">
            <h2 data-gsap="fade-up" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-tight font-headline text-[#323234]">
              Integra la salud oral en el cuidado del paciente oncológico
            </h2>
            <p data-gsap="fade-up" className="text-base lg:text-lg text-[#6d6475] font-light mb-10">
              Lleva educación especializada a tu institución, equipo de salud o comunidad de pacientes.
            </p>
            <div className="space-y-6" data-gsap="stagger">
              {[
                { icon: 'mail', text: 'contacto@cuidandosonrisas.com', href: 'mailto:contacto@cuidandosonrisas.com' },
                { icon: 'location_on', text: 'Bogotá, Colombia | Consultoría Internacional', href: null },
              ].map((item) => (
                <div key={item.icon} data-gsap="stagger-item" className="flex items-center gap-6 group">
                  <div
                    aria-hidden="true"
                    className="w-12 h-12 bg-[#6b558a]/10 rounded-2xl flex items-center justify-center text-[#6b558a] group-hover:bg-[#6b558a] group-hover:text-white transition-all duration-200 shrink-0"
                  >
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-[#323234] text-sm font-semibold hover:text-[#6b558a] transition-colors">{item.text}</a>
                  ) : (
                    <span className="text-[#323234] text-sm font-semibold">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-24 bg-white">
            <ContactForm />
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#f5f3f4]">
        <div className="px-6 sm:px-8 md:px-10 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-12">
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Logo Cuidando Sonrisas"
                loading="lazy"
                decoding="async"
                className="h-10 w-auto"
                src="/logo.webp"
                width={512}
                height={240}
              />
            </div>
            <p className="text-sm text-[#6d6475] max-w-sm font-medium leading-relaxed">
              Cuidando Sonrisas — Odontología oncológica | Educación en salud | Prevención y cuidado integral
            </p>
          </div>
          <nav aria-label="Navegación del sitio">
            <span className="text-sm font-bold uppercase tracking-widest text-[#6b558a] block mb-5">Navegación</span>
            <ul className="flex flex-col gap-4">
              {[
                { label: 'Inicio', href: '#main-content' },
                { label: 'Servicios', href: '#servicios' },
                { label: 'Historia', href: '#historia' },
                { label: 'Contacto', href: '#contacto' },
              ].map((item) => (
                <li key={item.label}>
                  <a className="text-[#6d6475] hover:text-[#6b558a] transition-colors duration-200 cursor-pointer" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#6b558a] block mb-5">Redes sociales</span>
            <ul className="flex flex-col gap-4">
              <li>
                <a className="flex items-center gap-2 text-[#6d6475] hover:text-[#6b558a] transition-colors duration-200 cursor-pointer" href="https://www.instagram.com/cuidandosonrisas.co/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  Instagram
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2 text-[#6d6475] hover:text-[#6b558a] transition-colors duration-200 cursor-pointer" href="https://www.linkedin.com/company/cuidando-sonrisas/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-6 sm:px-8 md:px-10 py-6 border-t border-[#e8e4ea] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#6d6475] font-medium text-center sm:text-left">
            © 2026 Cuidando Sonrisas. Todos los derechos reservados.
          </p>
          <p className="text-xs text-[#6d6475] text-center sm:text-right">
            Creado con ♥ por{' '}
            <a href="https://www.serestudiobranding.com/" target="_blank" rel="noopener noreferrer" className="text-[#6b558a] hover:underline font-medium">
              Ser Estudio Branding
            </a>
          </p>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  )
}
