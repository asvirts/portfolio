import Link from "next/link";

export default function PortfolioItem(props: any) {
  return (
    <div className="card w-1/4 bg-base-100 shadow-xl m-2">
      <figure>
        <img src={props.img} alt={props.title} className="portfolio-item" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.desc}</p>
        <small className="text-slate-400">
          <strong>Techstack:</strong> {props.tech}
        </small>
        <div className="card-actions justify-end">
          <Link
            href={`${props.link}`}
            target="_blank"
            className="btn btn-primary"
          >
            View on GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
