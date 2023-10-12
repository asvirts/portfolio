import Link from "next/link";

export default function PortfolioItem(props: any) {
  return (
    <div className="bg-[#f1f5f9] flex-wrap columns-auto mx-1 w-1/4 p-12 rounded text-center">
      <h2 className="font-bold">{props.title}</h2>
      <p>{props.desc}</p>
      <Link
        href={`${props.link}`}
        target="_blank"
        className="rounded block mt-5 p-2.5 bg-slate-400"
      >
        View on GitHub
      </Link>
    </div>
  );
}
