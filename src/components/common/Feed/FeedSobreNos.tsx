const FeedSobreNos = () => {
    return (
      <section className="py-24 bg-brand-400" id="equipe">
        <div className="container">
          <div className="row">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
              <div>
                <h1 className="md:text-2xl font-bold text-brand-300 mb-3">
                  Nossa Equipe
                </h1>
                <h2 className="text-lg font-semibold text-brand-600">
                  Profª Priscila
                </h2>
                <p>
                  Lorem
                </p>
                <h2 className="text-lg font-semibold text-brand-600 mt-3">
                  Técnica Karen
                </h2>
                <p>
                    Técnica de Laboratório na EMEF Milton Santos desde julho de 2024, sou apaixonada por tecnologia e inovação. Com formação em Técnico em Desenvolvimento de Sistemas e atualmente cursando Engenharia da Computação, busco sempre aplicar meus conhecimentos para criar soluções criativas e eficientes no universo da tecnologia.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/img/profs.webp" 
                  alt="" 
                  className="rounded-lg max-w-[30rem] mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeedSobreNos;