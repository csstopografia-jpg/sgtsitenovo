export default function Home() {
  const servicos = [
    "Levantamento Topográfico",
    "Georreferenciamento",
    "Cadastro Ambiental Rural - CAR",
    "Locação de Obras",
    "Projetos de Terraplanagem",
    "As Built",
    "Acompanhamento de Obras",
    "Medição de Terrenos",
    "Regularização de Imóveis",
  ];

  return (
    <main className="bg-white text-slate-900">
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#06193d]/90 via-black/45 to-black/85" />

        <header className="absolute left-0 top-0 z-20 flex w-full items-center justify-between px-6 py-5 text-white md:px-12">
          <img src="/logo.png" alt="SGT" className="w-28 md:w-36" />

          <nav className="hidden gap-8 text-sm font-bold md:flex">
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre</a>
            <a href="#galeria">Galeria</a>
            <a href="#contato">Contato</a>
          </nav>
        </header>

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
          <p className="mb-4 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-widest">
            Anápolis - GO • Atendimento em todo Brasil
          </p>

          <h1 className="max-w-6xl text-5xl font-black tracking-wide drop-shadow-xl md:text-7xl">
            SGT - SOLUÇÃO GEO TOPOGRAFIA
          </h1>

          <p className="mt-5 text-xl font-medium text-blue-200 md:text-2xl">
            Marcando território com precisão e visão
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Soluções em topografia, georreferenciamento, CAR, locação de obras,
            terraplanagem, As Built e acompanhamento técnico para obras e áreas
            rurais.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5562995451269"
              className="rounded-full bg-green-500 px-8 py-4 font-bold text-white shadow-[0_0_25px_rgba(0,255,120,0.55)] transition hover:bg-green-400"
            >
              Solicitar orçamento
            </a>

            <a
              href="mailto:comercial@solucaogeo.com.br"
              className="rounded-full bg-white px-8 py-4 font-bold text-[#06193d] shadow-xl transition hover:scale-105"
            >
              Enviar e-mail
            </a>
          </div>
        </div>
      </section>

      <section id="servicos" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-center font-bold uppercase tracking-widest text-blue-700">
          Nossos serviços
        </p>

        <h2 className="mt-3 text-center text-3xl font-black text-[#06193d] md:text-5xl">
          Topografia completa para sua obra, terreno ou propriedade rural
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {servicos.map((servico) => (
            <div
              key={servico}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#06193d] text-xl text-white">
                ✓
              </div>

              <h3 className="text-xl font-black text-[#06193d]">{servico}</h3>

              <p className="mt-3 leading-7 text-slate-600">
                Execução técnica com precisão, planejamento e entrega
                profissional.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="sobre" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-bold uppercase tracking-widest text-blue-700">
              Sobre a SGT
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#06193d] md:text-5xl">
              Expertise local com alcance nacional
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Com base em Anápolis - GO, a SGT Solução Geo Topografia atende
              obras, imóveis, áreas rurais, construtoras, engenheiros e
              empreendedores em Goiás e em todo o Brasil.
            </p>
          </div>

          <div className="rounded-3xl bg-[#06193d] p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-black">Diferenciais</h3>

            <ul className="mt-6 space-y-4 text-blue-100">
              <li>✅ Atendimento rápido pelo WhatsApp</li>
              <li>✅ Precisão técnica em campo</li>
              <li>✅ Compromisso com prazo e qualidade</li>
              <li>✅ Serviços para obras, terrenos e áreas rurais</li>
              <li>✅ Atuação em Goiás e todo Brasil</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="galeria" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-center font-bold uppercase tracking-widest text-blue-700">
          Galeria
        </p>

        <h2 className="mt-3 text-center text-3xl font-black text-[#06193d] md:text-5xl">
          Tecnologia, campo e precisão
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {["/hero.jpg", "/hero.jpg", "/hero.jpg"].map((img, index) => (
            <div
              key={index}
              className="h-72 overflow-hidden rounded-3xl shadow-xl"
            >
              <img
                src={img}
                alt="Topografia SGT"
                className="h-full w-full object-cover transition hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="contato" className="bg-[#06193d] px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-black md:text-5xl">
          Solicite seu orçamento
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
          Fale agora com a SGT e informe sua demanda de topografia.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/5562995451269"
            className="rounded-full bg-green-500 px-8 py-4 font-bold text-white hover:bg-green-400"
          >
            WhatsApp
          </a>

          <a
            href="mailto:comercial@solucaogeo.com.br"
            className="rounded-full bg-white px-8 py-4 font-bold text-[#06193d]"
          >
            comercial@solucaogeo.com.br
          </a>
        </div>
      </section>

      <a
        href="https://wa.me/5562995451269"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 px-6 py-4 font-bold text-white shadow-2xl hover:bg-green-400"
      >
        WhatsApp
      </a>

      <footer className="bg-black px-6 py-10 text-center text-white">
        <p className="font-black">SGT - SOLUÇÃO GEO TOPOGRAFIA</p>
        <p className="mt-2 text-blue-200">
          Marcando território com precisão e visão
        </p>
        <p className="mt-2 text-sm text-blue-100">
          Anápolis - GO | Atendimento em todo Brasil | 62 99545-1269
        </p>
      </footer>
    </main>
  );
}