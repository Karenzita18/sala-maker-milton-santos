interface Props {
  title: string;
  desc?: string;
}

const Breadcrumb = ({
  title,
  desc = "Conheça mais sobre a nossa história.",
}: Props) => {
  return (
    <section className="bg-gradient-to-br from-brand-300 to-brand-500 mt-20 relative">
      <div className="row relative">
        <div className="container">
          <h1 className="text-white font-black text-2xl uppercase">{title}</h1>
          <p className="font-medium text-lg text-white">{desc}</p>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;