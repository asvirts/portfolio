export default function PortfolioItem(props) {
  return (
    <div className="bg-[#f1f5f9] flex-wrap columns-auto mx-1 w-1/4 p-12 rounded text-center">
      <h2 className="font-bold">{props.title}</h2>
      <p>{props.desc}</p>
    </div>
  );
}
