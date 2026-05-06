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

  const clientes = [
    "Construtoras",
    "Engenheiros",
    "Produtores Rurais",
    "Empreendedores",
    "Proprietários de Imóveis",
    "Obras Civis",
  ];

  const obrasExecutadas = [
    "Levantamento para obra civil",
    "Locação de eixo de terraplanagem",
    "Medição de área rural",
    "Regularização de imóvel",
  ];

  const obrasExecucao = [
    "Acompanhamento topográfico de obra",
    "Locação de terraplanagem",
    "Cadastro ambiental rural",
  ];

  const galeria = ["/hero.jpg", "/hero.jpg", "/hero.jpg", "/hero.jpg", "/hero.jpg", "/hero.jpg"];

  return (
    <main className="bg-white text-slate-900 scroll-smooth">
      <section
        id="inicio"
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#06193d]/90 via-black/45 to-black/85" />

        <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#06193d]/85 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
            <a href="#inicio">
              <img src="/logo.png" alt="SGT" className="w-28 md:w-36" />
            </a>

            <nav className="hidden gap-7 text-sm font-bold md:flex">
              <a href="#servicos" className="hover:text-blue-300">Serviços</a>
              <a href="#clientes" className="hover:text-blue-300">Clientes</a>
              <a href="#obras" className="hover:text-blue-300">Obras</a>
              <a href="#galeria" className="hover:text-blue-300">Galeria</a>
              <a href="#contato" className="hover:text-blue-300">Contato</a>
            </nav>

            <a
              href="https://wa.me/5562995451269"
              className="rounded-full bg-green-500 px-5 py-2 text-sm font-bold hover:bg-green-400"
            >
              Orçamento
            </a>
          </div>
        </header>

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center text-white">
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
            terraplanagem, As Built e acompanhamento técnico para obras e áreas rurais.
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

      <section className="-mt-10 relative z-20 px-6">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-3xl bg-white p-6 shadow-2xl md:grid-cols-4">
          {[
            ["100%", "Precisão técnica"],
            ["BR", "Atendimento nacional"],
            ["GO", "Base em Anápolis"],
            ["24h", "Resposta rápida"],
          ].map(([num, texto]) => (
            <div key={texto} className="rounded-2xl bg-slate-50 p-6 text-center">
              <p className="text-3xl font-black text-[#06193d]">{num}</p>
              <p className="mt-1 text-sm font-semibold text-slate-600">{texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="servicos" className="mx-auto max-w-7xl px-6 py-24">
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
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#06193d] text-xl text-white">
                ✓
              </div>
              <h3 className="text-xl font-black text-[#06193d]">{servico}</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Execução técnica com precisão, planejamento, responsabilidade e entrega profissional.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="clientes" className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center font-bold uppercase tracking-widest text-blue-700">
            Nossos clientes
          </p>

          <h2 className="mt-3 text-center text-3xl font-black text-[#06193d] md:text-5xl">
            Atendemos diferentes segmentos com padrão técnico
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {clientes.map((cliente) => (
              <div
                key={cliente}
                className="rounded-3xl bg-white p-8 text-center font-black text-[#06193d] shadow-sm transition hover:shadow-xl"
              >
                {cliente}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="obras" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-[#06193d] p-8 text-white shadow-2xl">
            <h2 className="text-3xl font-black">Obras executadas</h2>
            <p className="mt-3 text-blue-100">
              Projetos entregues com precisão, organização e responsabilidade técnica.
            </p>

            <div className="mt-8 space-y-4">
              {obrasExecutadas.map((obra) => (
                <div key={obra} className="rounded-2xl bg-white/10 p-5 font-semibold">
                  ✅ {obra}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-black text-[#06193d]">Obras em execução</h2>
            <p className="mt-3 text-slate-600">
              Acompanhamento técnico para garantir segurança e precisão em cada etapa.
            </p>

            <div className="mt-8 space-y-4">
              {obrasExecucao.map((obra) => (
                <div key={obra} className="rounded-2xl bg-slate-50 p-5 font-semibold text-slate-700">
                  🚧 {obra}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="galeria" className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center font-bold uppercase tracking-widest text-blue-700">
            Galeria de imagens
          </p>

          <h2 className="mt-3 text-center text-3xl font-black text-[#06193d] md:text-5xl">
            Campo, tecnologia e precisão em cada projeto
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {galeria.map((img, index) => (
              <div
                key={index}
                className="h-72 overflow-hidden rounded-3xl shadow-xl"
              >
                <img
                  src={img}
                  alt="Galeria SGT"
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-slate-500">
            Depois você pode trocar essas imagens por fotos reais da sua equipe, obras e equipamentos.
          </p>
        </div>
      </section>

      <section id="contato" className="bg-[#06193d] px-6 py-24 text-center text-white">
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