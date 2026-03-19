import GSAPAnimations from './components/GSAPAnimations'
import MobileNav from './components/MobileNav'
import WhatsAppButton from './components/WhatsAppButton'

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
          <a href="#" aria-label="Inicio Cuidando Sonrisas">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Logo Cuidando Sonrisas"
              className="h-9 md:h-10 w-auto"
              src="https://lh3.googleusercontent.com/aida/ADBb0ui77v2VGSdL4HIsryBvTjLlOn0azy482imP-eUJsvkQC5K6YvgZffOQGpBA5Lx2hk8LyFd8uPCLqaYeqDhai1A7gfvcrGn3dbOfFkDfB9mumymepiQ2lZoKU_3ZVIMpDz3aPnlAO2GqJo1p7ypqcZ0k9MvHmPzSBuEOqhLoRJ-D6QJMkhfbOT5zYL81OijmKXz-T6jGBipXtTZOR4ir8WjALMWqdaDSEdDqmmR-JKkhMMsU-2h_4inJrIj3aYRgho5ACEUW-9w"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center space-x-8">
            {['Servicios', 'Historia', 'Impacto', 'Contacto'].map((item) => (
              <a
                key={item}
                className="text-[#6d6475] hover:text-[#6b558a] font-medium transition-colors duration-200 cursor-pointer min-h-[44px] flex items-center"
                href="#"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center bg-[#6b558a] text-[#fef6ff] px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all duration-200 active:scale-95 cursor-pointer min-h-[44px]">
              Solicitar Consultoría
            </button>
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
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8 lg:mb-12 text-[#323234] font-headline"
            >
              La salud oral también hace parte del tratamiento del cáncer
            </h1>
            <div data-gsap="hero-body" className="max-w-xl">
              <p className="text-lg lg:text-xl leading-relaxed font-normal text-[#6d6475] mb-8 lg:mb-12">
                Educación, prevención y consultoría especializada en odontología
                oncológica para profesionales, instituciones, pacientes y cuidadores.
              </p>
              <div className="flex flex-wrap gap-4" data-gsap="hero-buttons">
                <button className="btn-primary">Solicitar conferencia</button>
                <button className="btn-outline">Ver contenidos</button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[340px] sm:min-h-[480px] lg:min-h-[600px]">
            <div className="img-wrap absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Profesional de salud especializada en odontología oncológica"
                className="desaturated-img"
                src="https://lh3.googleusercontent.com/aida/ADBb0uhTCkP1Nl3v5MAjv_4U-XSLBi7CuCN0ZhvQxIDKZvs2IFo0VtpzNK-i1w319sfFx_TpbV4n1M3ecdoUderWTGj5JcFsyNkLtEbiTdWXsC2pdipK4q0NC8wpMNqhZo-uafJdcx6-iPrRWBZBoqzDRiemO8caNdSM7DEzsCCDVvFakO2sDeTTk0n1amfdIDd-7AatkBhwqQveSKCCNUk3qxntsauFjqnX9pnhFRsdgqOUxI3mpfiHt9Ud0MkATtEUN8qI4UCC0Ag"
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
          <div className="p-8 sm:p-12 lg:p-16 bg-[#ebddf7]/40">
            <h2
              data-gsap="fade-up"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#323234] font-headline italic"
            >
              Nuestro Equipo de Especialistas
            </h2>
            <p data-gsap="fade-up" className="text-base lg:text-lg text-[#6b558a] font-semibold mt-4">
              Especialistas en Pacientes Oncológicos, Inmunocomprometidos y Paliativos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Daniela */}
            <div className="grid grid-cols-1 sm:grid-cols-2 bg-[#f5f3f4]">
              {/* BUG FIX: img-wrap da isolation + overflow-hidden al contenedor */}
              <div className="img-wrap aspect-square sm:aspect-auto sm:min-h-[300px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  data-gsap="img"
                  loading="lazy"
                  decoding="async"
                  alt="Daniela Bustamante V., odontóloga especialista en pacientes oncológicos"
                  className="desaturated-img object-top"
                  src="/daniela.png"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col bg-white">
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
              <div className="img-wrap aspect-square sm:aspect-auto sm:min-h-[300px] sm:order-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  data-gsap="img"
                  loading="lazy"
                  decoding="async"
                  alt="Angie Nathaly Verdugo R., máster en pacientes oncológicos"
                  className="desaturated-img object-[center_15%]"
                  src="/angie.png"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col bg-white sm:order-1">
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
                src="https://lh3.googleusercontent.com/aida/ADBb0uin3oLm5dsmPgWByLQIgBi56AY3Hi2w1gdAZfY2W4nDNPX5TTRtk0z826WRifUQlSZ6A6ZC4Id6ryk-paQ_fX3i6NcwKDrOEE5tdO3t0ijbytL5e6ZaLQ4J3u1l2kVO52xtygEcjiolO0bM_2OuXf6-WYWoXetrYBTbleVgR-6oPUaW3j2Eo1aGfh5BLHL4bitzakYS8ZV5EQZCoKldqhst5XS1WJHpfNSJUoUCwZKjCzxEFHb6yvJlY-6ZiXUAw57fUPuGKg"
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
              Muchos pacientes y profesionales desconocen el impacto...
            </h2>
          </div>
          <div className="lg:col-span-8 p-8 sm:p-12 lg:p-20 flex flex-col justify-center bg-white">
            <p data-gsap="fade-up" className="text-xl lg:text-3xl font-light leading-relaxed mb-8 text-[#6d6475]">
              Las complicaciones orales no tratadas pueden retrasar ciclos de
              quimioterapia o radioterapia, aumentando el riesgo de infecciones
              sistémicas.
            </p>
            <div data-gsap="line" className="h-1.5 w-24 bg-[#6b558a] rounded-full" />
          </div>
        </section>

        {/* ── SOLUTION ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-6 flex flex-col">
            <div className="p-8 sm:p-12 lg:p-20 flex-grow bg-[#fbf9f9]">
              <h2 data-gsap="fade-up" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 tracking-tight text-[#323234] font-headline">
                Cuidando Sonrisas educa, orienta y acompaña...
              </h2>
              <p data-gsap="fade-up" className="text-[#6d6475] mb-10 text-base lg:text-lg leading-relaxed">
                Transformamos la incertidumbre en conocimiento aplicado. Cerramos
                la brecha entre la oncología y la odontología mediante un enfoque preventivo.
              </p>
              <div className="space-y-4" data-gsap="stagger">
                {[
                  'Reducción de complicaciones severas',
                  'Protocolos basados en evidencia',
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
            </div>
            <div className="bg-[#ebddf7]/30 p-8 sm:p-12 lg:p-16">
              <blockquote className="italic text-xl lg:text-2xl font-headline font-semibold text-[#6b558a]/80 border-l-4 border-[#6b558a] pl-8">
                &quot;Nuestra misión es que ningún paciente deba interrumpir su
                tratamiento oncológico por una causa oral prevenible.&quot;
              </blockquote>
            </div>
          </div>
          <div className="img-wrap lg:col-span-6 min-h-[300px] lg:min-h-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              data-gsap="img"
              loading="lazy"
              decoding="async"
              alt="Apoyo y acompañamiento a pacientes oncológicos"
              className="desaturated-img"
              src="https://lh3.googleusercontent.com/aida/ADBb0ugaNJUOUuNc3xO_uidX-3wInnswmqEPGJnhBuIsya3lfZmp8TkpiYxYv-cIN4VbQ58S0B0Ff_afUmj16Jrh9N_f36Eu1AlrSau34DoVlP-YQKy6gCPb2z-7ZFq27ffAo_6-NTmK61NBhyWKcDro_dwmfN8xeK3oZlYCo5ZxRY5qNSmd3koIzqYH6xOHhY_uYsHl7x6kgBYojzs_ICSibFU___UmBZEmYsg8T1BG1S6cINDk2_y7PyqP2ldT2WGVvIwI3-lBBYk"
            />
          </div>
        </section>

        {/* ── LINES OF ACTION ── */}
        <section>
          <div className="p-8 sm:p-12 bg-[#ebddf7] text-[#323234] flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <h2 data-gsap="fade-up" className="text-3xl sm:text-4xl font-bold italic font-headline">
              Nuestras Líneas de Acción
            </h2>
            <span aria-hidden="true" className="hidden md:block text-[10px] opacity-40 uppercase tracking-[0.5em] text-[#6d6475] font-bold">
              Sistema.04 // Odonto.Onco
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white" data-gsap="stagger">
            {[
              { icon: 'school', title: 'Conferencias para profesionales', desc: 'Capacitación especializada para odontólogos, médicos y enfermería en protocolos onco-dentales.' },
              { icon: 'volunteer_activism', title: 'Charlas para pacientes', desc: 'Información clara y accesible para el autocuidado bucal durante las diferentes fases del tratamiento.' },
              { icon: 'corporate_fare', title: 'Consultoría para instituciones', desc: 'Asesoría estratégica para hospitales, clínicas y fundaciones en la creación de programas dentales.' },
              { icon: 'devices', title: 'Webinars y educación digital', desc: "Espacios como 'La Voz del Cáncer' y 'Odontología Oncológica LATAM' para conectar saberes." },
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
        </section>

        {/* ── WHY ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 bg-[#fbf9f9]">
          <div className="lg:col-span-5 p-8 sm:p-12 lg:p-20">
            <h2 data-gsap="fade-up" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-10 text-[#323234] font-headline">
              Por qué Cuidando Sonrisas
            </h2>
            <div className="space-y-10" data-gsap="stagger">
              {[
                { label: 'Especialización', text: 'Formación internacional específica en el manejo de complicaciones orales oncológicas.' },
                { label: 'Interdisciplinariedad', text: 'Hablamos el lenguaje de la oncología para integrarnos a los equipos médicos.' },
                { label: 'Evidencia', text: 'Protocolos clínicos actualizados y validados por la academia.' },
              ].map((item) => (
                <div key={item.label} data-gsap="stagger-item" className="border-l-4 border-[#6b558a] pl-8">
                  <span className="text-xs font-bold uppercase tracking-widest block mb-3 text-[#6b558a]">{item.label}</span>
                  <p className="text-base text-[#6d6475] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          {/* 2×2 image grid — each wrapped in img-wrap to prevent blend bleeding */}
          <div className="lg:col-span-7 grid grid-cols-2 grid-rows-2 min-h-[280px] sm:min-h-[400px] lg:min-h-0">
            {[
              'https://lh3.googleusercontent.com/aida-public/AB6AXuA9EMmH2y_CxXA9tgdlNFBHcyOk9URubTIuxbceueQ1ng3ftNblNSUsKnQXGdC1Ms2cKc04bxAmmMRfRHiDuZPCrhc0J7CfsSMv1LY02D-FiUBnDezBFfaMaKLkkk3Di4HxOBrJ4MPhrYOp5oV8B1u8fu-WHVjdQdeI1JHyQdxM4ChvsUpPJO2OEUlspa910H6w8HjtAAKkdqH4WkdotEDEPXEbiClk7cqlVPK6E8Iy6DMN5gJJKxD9PLufWWYzUTJonYL3m-iH',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuAr58K3OLOLvEREj0DCPQTeCLyshJirXPRh4oUdRIE-mJnHta96XG4GQQKS02Nz-P_YrZQc5eN8AqQsnqtMrJCns2vPoNOIFOLxHwdCUz8YS7IDccRYVRoXbGYhNgDpq_6m7NJTWd_zyJ5oKdPKokdZZflh1pV06l49-d-eCguMiGEHbhG7O74QbjYCHPQ9Iz7B37Ahl32mJ-lvZNBqIubzXHYqVD7BT4ux_YB88G1-qs86n1cAXRk_0-PPbRwxgqS1sRmUCG0a',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuDc0AcM6wwE-1Y1SpZ58qNWDrgJuRxbgvc2KV2lVrOLgoOonfM94ywjETpVU51OmPKRXhqyXJMTi-U1zDCquJphLx7jpMrmua1-hWUjwAGdwZNVxniHZZ3TkAOBxiMwXnE_DUO5oXtsPD8RtBfnPvggWypsSjMgQamXfo0s_C5ytSgopyWm9D22bgoPvKz8IAcD9za9wMAIn95JBzviZYwAOubswsiUa-pwu22-zkMpzfK-8xwsKZQ2oCXnnzBjgumdQ7fB9LU7',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuCTXu9cYFINpK-Ij-cUYxzi0AV24A8oCoW2wSjttXxW0NmR4CB6BeXT5RNqEJjGuNaHeB60WNXO-RSrEA-w6aAYfOFgfSZ5TeiDRchRcGx9Y0skNL2aS2z1ATIV-jucsOHKKQ8Dob-cD0R9XjdaxxX6D0n8pCTYf0jm9lXMsRn4GeNeaz-VLh_rHHA-fuD1OM0IYTtkEAXCSgm1ohJ2l2lWDQc_nwkp8Dr3hoK5GX6m1PB4_ts9m09OSJ9Wk8R3tj7utGYPVUOf',
            ].map((src, i) => (
              <div key={i} className="img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img data-gsap="img" loading="lazy" decoding="async" alt={`Entorno clínico especializado ${i + 1}`} className="desaturated-img h-full" src={src} />
              </div>
            ))}
          </div>
        </section>

        {/* ── ORIGIN STORY ── */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#ebddf7] p-8 sm:p-12 lg:p-24">
            <h2 data-gsap="fade-up" className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-10 font-headline text-[#323234]">
              Daniela y Angie: El origen de un compromiso.
            </h2>
            <p data-gsap="fade-up" className="text-lg lg:text-xl font-light italic opacity-90 mb-6 font-headline text-[#6d6475]">
              Cuidando Sonrisas no nació solo en las aulas. Nació del corazón y de la vivencia personal.
            </p>
            <p data-gsap="fade-up" className="text-base text-[#6d6475] leading-relaxed max-w-lg mb-12">
              Ambas fundadoras acompañaron a sus padres en sus batallas contra el cáncer,
              enfrentando de primera mano el vacío de información sobre la salud oral en esos
              momentos críticos. Esa experiencia transformó su dolor en propósito.
            </p>
            <div data-gsap="fade-up" className="pt-8 flex items-center gap-6">
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
              className="desaturated-img"
              src="https://lh3.googleusercontent.com/aida/ADBb0uin3oLm5dsmPgWByLQIgBi56AY3Hi2w1gdAZfY2W4nDNPX5TTRtk0z826WRifUQlSZ6A6ZC4Id6ryk-paQ_fX3i6NcwKDrOEE5tdO3t0ijbytL5e6ZaLQ4J3u1l2kVO52xtygEcjiolO0bM_2OuXf6-WYWoXetrYBTbleVgR-6oPUaW3j2Eo1aGfh5BLHL4bitzakYS8ZV5EQZCoKldqhst5XS1WJHpfNSJUoUCwZKjCzxEFHb6yvJlY-6ZiXUAw57fUPuGKg"
            />
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="grid grid-cols-1 sm:grid-cols-3 bg-white border-t-4 border-[#d9befb]">
          {[
            { value: '90%', label: 'Reducción riesgo mucositis' },
            { value: '+ Calidad', label: 'Bienestar integral' },
            { value: '- Estancia', label: 'Hospitalizaciones evitadas' },
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
        <section className="px-6 py-14 sm:p-16 lg:p-20 bg-[#f5f3f4] text-center">
          <h2 data-gsap="fade-up" className="text-3xl sm:text-4xl font-bold tracking-tight mb-10 text-[#323234] font-headline">
            Acompañamos a todo el ecosistema oncológico
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6" data-gsap="stagger">
            {[
              'Instituciones Médicas',
              'Oncólogos & Especialistas',
              'Fundaciones',
              'Pacientes y Familias',
              'Cuidadores',
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

        {/* ── CONTENT ── */}
        <section className="bg-white">
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 data-gsap="fade-up" className="text-3xl sm:text-4xl font-bold italic font-headline text-[#323234]">
              Contenido Educativo
            </h2>
            <a
              className="accent-text font-bold uppercase text-xs tracking-widest flex items-center gap-2 hover:underline shrink-0 cursor-pointer min-h-[44px]"
              href="#"
            >
              Explorar Biblioteca{' '}
              <span aria-hidden="true" className="material-symbols-outlined text-sm">north_east</span>
            </a>
          </div>
          {/* Grid responsive: stacks on mobile, columns on lg */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Video card */}
            <div className="lg:col-span-6 relative group bg-[#efedef] overflow-hidden min-h-[300px]">
              <div className="img-wrap absolute inset-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  data-gsap="img"
                  loading="lazy"
                  decoding="async"
                  alt="La Voz del Cáncer, episodio 12 — podcast de odontología oncológica"
                  className="desaturated-img group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZOEt1Gcb9fsc6P-cZomvPE6nTyTVDUVde6zey735L5WxRapxbOJUFdfgAYiT1XZ2acR-S2yoUX3c92hlexhSKwD6C3Ja0W8JCssqRCvRZB15-9KxMu9u_EbI8G6bmpRLDPDgr9mHEkZ8NamGb-F-1xCxXtIfWNQUMAGpmNg06PawklEuzT2fj_AyBO4aq5LWi7z_lVib51gv-H1rpik3wvlKfRjhOyjv2tbrVLomgMBUEjkn_UFdUjQAhr9Jx2vLiopvwY98a"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#323234]/80 via-transparent to-transparent p-8 lg:p-12 flex flex-col justify-end text-white">
                <span className="bg-[#6b558a] text-white text-[9px] font-bold uppercase tracking-widest w-fit px-4 py-1.5 rounded-full mb-4">
                  Reporte en Video
                </span>
                <h3 className="text-2xl lg:text-4xl font-bold italic font-headline leading-tight">
                  La Voz del Cáncer: Episodio 12
                </h3>
              </div>
            </div>

            {/* Two smaller images — stacked on mobile, grid on lg */}
            <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-2">
              <div className="img-wrap min-h-[200px] lg:min-h-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  data-gsap="img"
                  loading="lazy"
                  decoding="async"
                  alt="Presencia en redes sociales de Cuidando Sonrisas"
                  className="desaturated-img"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChwp2w2jq7eaDrNSHbANmScoMZVBkJKDJkDrnVfmq60GQ82Eix0T6pZuPAhrk0_oBHGJl9018zvasXj8GsvU0qnkdVQK1m93qMsqXifRt59-Qu0x2aHGttQ_zi-4FyglsFjS3RE3bQo8sC421O1AGHlEzMZVQ6hJSEmviANo9Olg764vTW9HHyZxNgTleHxER8TulM-BWEon7AbdYxrF9QC114uBil9Kx7CUJtihr4fZTStGBqkQjegr4LD3nP_s4MbKhu_o7x"
                />
              </div>
              <div className="img-wrap min-h-[200px] lg:min-h-0" style={{ backgroundColor: '#efedef' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  data-gsap="img"
                  loading="lazy"
                  decoding="async"
                  alt="Webinar de odontología oncológica LATAM"
                  className="desaturated-img"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi326iyfdBJ_t7q6mMw8KsBI-Mk1ii5d6V5esBJZoBmshQ_2m5d_bfc9S4xCmXleZtraHDyMudDcGg8Pyj35-WEWhyaUhutCfYRzPNqSyXejUYnU_ptFegAtlPdFExzHC1bV2t-kV1vjtlXR2kIgkczz3cNIxR-UUGcTeyvPWdycMedxoeUFuHxatlIkWa0g22haABlUgXaNo4XaEtYZNGxUMYlenO2O76m29l2Odzq-Z3uYzWOHVLJSVCnUqkSs932pi7a6QU"
                />
              </div>
            </div>

            {/* Quote panel */}
            <div className="lg:col-span-3 p-8 lg:p-12 bg-[#f5f3f4] flex flex-col justify-between gap-8 min-h-[200px]">
              <p data-gsap="fade-up" className="text-lg lg:text-xl italic font-light leading-relaxed text-[#6d6475]">
                &quot;Nuestros espacios de educación digital han alcanzado a más de
                5,000 profesionales en toda Latinoamérica.&quot;
              </p>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#6b558a]">
                  +5k Comunidad
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT / FORM ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 bg-[#ebddf7]">
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-24 flex flex-col justify-center">
            <h2 data-gsap="fade-up" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-tight font-headline text-[#323234]">
              Solicita una conferencia o consultoría especializada
            </h2>
            <p data-gsap="fade-up" className="text-base lg:text-lg text-[#6d6475] font-light mb-10">
              Estamos listas para colaborar con tu institución o brindarte la
              orientación que necesitas.
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
            <form className="space-y-8" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="data-label text-[#6d6475]">
                    Nombre del Solicitante <span aria-label="requerido" className="text-[#6b558a]">*</span>
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    required
                    autoComplete="name"
                    className="w-full border-b-2 border-[#efedef] focus:border-[#6b558a] focus:outline-none p-3 bg-transparent text-sm transition-colors duration-200 min-h-[44px]"
                    placeholder="Ej. Dr. Juan Pérez"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="data-label text-[#6d6475]">
                    Correo Electrónico <span aria-label="requerido" className="text-[#6b558a]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full border-b-2 border-[#efedef] focus:border-[#6b558a] focus:outline-none p-3 bg-transparent text-sm transition-colors duration-200 min-h-[44px]"
                    placeholder="ejemplo@correo.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="servicio" className="data-label text-[#6d6475]">Tipo de Servicio</label>
                <select
                  id="servicio"
                  name="servicio"
                  className="w-full border-b-2 border-[#efedef] focus:border-[#6b558a] focus:outline-none p-3 bg-transparent text-sm transition-colors duration-200 min-h-[44px] cursor-pointer appearance-none"
                >
                  <option>Conferencia para profesionales</option>
                  <option>Consultoría institucional</option>
                  <option>Asesoría para paciente/cuidador</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="mensaje" className="data-label text-[#6d6475]">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  className="w-full border-b-2 border-[#efedef] focus:border-[#6b558a] focus:outline-none p-3 bg-transparent text-sm transition-colors duration-200 resize-none"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary py-5 text-sm cursor-pointer"
              >
                Enviar Solicitud
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#f5f3f4]">
        <div className="px-6 sm:px-8 md:px-10 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Logo Cuidando Sonrisas"
                loading="lazy"
                decoding="async"
                className="h-10 w-auto"
                src="https://lh3.googleusercontent.com/aida/ADBb0ui77v2VGSdL4HIsryBvTjLlOn0azy482imP-eUJsvkQC5K6YvgZffOQGpBA5Lx2hk8LyFd8uPCLqaYeqDhai1A7gfvcrGn3dbOfFkDfB9mumymepiQ2lZoKU_3ZVIMpDz3aPnlAO2GqJo1p7ypqcZ0k9MvHmPzSBuEOqhLoRJ-D6QJMkhfbOT5zYL81OijmKXz-T6jGBipXtTZOR4ir8WjALMWqdaDSEdDqmmR-JKkhMMsU-2h_4inJrIj3aYRgho5ACEUW-9w"
              />
            </div>
            <p className="text-sm text-[#6d6475] max-w-sm font-medium leading-relaxed">
              Elevando la odontología oncológica con rigor científico.
              Acompañamos cada paso de tu proceso con precisión clínica.
            </p>
          </div>
          <nav aria-label="Índices del sitio">
            <span className="text-sm font-bold uppercase tracking-widest text-[#6b558a] block mb-5">Índices</span>
            <ul className="flex flex-col gap-4">
              {['Servicios', 'Historia', 'Impacto'].map((link) => (
                <li key={link}>
                  <a className="text-[#6d6475] hover:text-[#6b558a] transition-colors duration-200 cursor-pointer" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Documentación legal">
            <span className="text-sm font-bold uppercase tracking-widest text-[#6b558a] block mb-5">Legal</span>
            <ul className="flex flex-col gap-4">
              {['Privacidad', 'Términos de Servicio', 'Preguntas Frecuentes'].map((link) => (
                <li key={link}>
                  <a className="text-[#6d6475] hover:text-[#6b558a] transition-colors duration-200 cursor-pointer" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="px-6 sm:px-8 md:px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#6d6475] font-medium text-center sm:text-left">
            © 2026 Cuidando Sonrisas. Odontología Oncológica Especializada.
          </p>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  )
}
