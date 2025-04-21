"use client";

const FeedHistoria = () => {
    const scrollToEquipe = () => {
        const equipeSection = document.getElementById("equipe");
        if (equipeSection) {
            equipeSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
      <section className="md:py-14">
        <div className="container">
          <div className="row">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
              <div className="flex justify-center">
                <img 
                  src="/img/sala-maker.jpeg" 
                  alt="" 
                  className="rounded-lg max-w-[35rem] mx-auto"
                />
              </div>
              <div>
                <h1 className="md:text-2xl font-bold text-brand-300 mb-3">
                    Sala Maker - EMEF Professor Milton Santos
                </h1>
                <p className="mb-3 text-justify">
                    A EMEF Professor Milton Santos, na Praia Azul, é a primeira escola de Americana a receber uma Sala Maker, um espaço inovador voltado para fabricação digital e robótica educacional.
                </p>
                <p className="mb-3 text-justify">
                    A sala conta com impressora 3D, cortadora a laser, plotter de recorte, Smart TV e kits de robótica, permitindo que os alunos desenvolvam criatividade, raciocínio lógico e habilidades tecnológicas de forma prática.
                </p>
                <p className="mb-3 text-justify">
                    As atividades serão realizadas semanalmente, com cada turma participando de aulas no horário regular. Com essa iniciativa, os estudantes terão a oportunidade de aprender de maneira interativa e explorar novas tecnologias que estimulam o pensamento crítico e a solução de problemas. 🚀
                </p>
                <button 
                  onClick={scrollToEquipe} 
                  className="mt-4 px-6 py-4 bg-brand-300 text-white font-bold rounded-lg hover:bg-brand-500 transition duration-300"
                >
                  Conheça Nossa Equipe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default FeedHistoria;
