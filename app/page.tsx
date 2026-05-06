export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#06193d]/85 via-black/45 to-black/80" />

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
          <img
            src="/logo.png"
            alt="SGT Solução Geo Topografia"
            className="mb-8 w-[380px] max-w-[85vw] drop-shadow-[0_0_35px_rgba(0,150,255,0.7)]"
          />

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
            Soluções técnicas em topografia, georreferenciamento, locação de
            obras, CAR, terraplanagem e acompanhamento de obras com precisão,
            agilidade e compromisso profissional.
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

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-center font-bold uppercase tracking-widest text-blue-700">
          Nossos serviços
        </p>

        <h2 className="mt-3 text-center text-3xl font-black text-[#06193d] md:text-5xl">
          Topografia completa para obras, imóveis e áreas rurais
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            "Levantamento Topográfico",
            "Georreferenciamento",
            "Cadastro Ambiental Rural - CAR",
            "Locação de Obras",
            "Projetos de Terraplanagem",
            "As Built e Acompanhamento de Obras",
          ].map((servico) => (
            <div
              key={servico}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#06193d] text-xl text-white">
                ✓
              </div>

              <h3 className="text-xl font-black text-[#06193d]">{servico}</h3>

              <p className="mt-3 leading-7 text-slate-600">
                Serviço técnico executado com precisão, planejamento e entrega
                profissional para tomada de decisão segura.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
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
              demandas técnicas em Goiás e em todo o território nacional,
              oferecendo suporte para construtoras, produtores rurais,
              engenheiros, empreendedores e proprietários de imóveis.
            </p>
          </div>

          <div className="rounded-3xl bg-[#06193d] p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-black">Por que escolher a SGT?</h3>

            <ul className="mt-6 space-y-4 text-blue-100">
              <li>✅ Atendimento direto e rápido</li>
              <li>✅ Precisão técnica em campo</li>
              <li>✅ Soluções para obras, terrenos e áreas rurais</li>
              <li>✅ Atuação em Goiás e todo Brasil</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-black text-[#06193d] md:text-5xl">
          Precisa de topografia com segurança e precisão?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Fale com a SGT e solicite um orçamento para sua obra, terreno,
          propriedade rural ou projeto de engenharia.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/5562995451269"
            className="rounded-full bg-green-500 px-8 py-4 font-bold text-white hover:bg-green-400"
          >
            Chamar no WhatsApp
          </a>

          <a
            href="mailto:comercial@solucaogeo.com.br"
            className="rounded-full bg-[#06193d] px-8 py-4 font-bold text-white"
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

      <footer className="bg-[#06193d] px-6 py-10 text-center text-white">
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