const FeedSobreNos = () => {
    return (
      <section className="md:py-24 bg-brand-400" id="equipe">
        <div className="container">
          <div className="row">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
              <div>
                <h1 className="md:text-2xl text-3xl md:text-justify text-center font-bold text-brand-300 mb-3">
                  Nossa Equipe
                </h1>
                <h2 className="text-lg font-semibold text-brand-600">
                  Profª Priscila
                </h2>
                <p>
                  Formada em Ciências Biológicas pela Universidade de São Paulo, pós-graduada em Educação especial, com ênfase em autismo e pós -graduanda em gestão escolar. Professora há 12 anos, apaixonada pela educação e todo o potencial de mudar o mundo através dela.
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
                  className="rounded-lg md:max-w-[30rem] mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeedSobreNos;