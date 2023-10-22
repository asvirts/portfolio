import Link from "next/link";

export default function PortfolioItem(props: any) {
  return (
    <a
      href={props.link}
      className="group block overflow-hidden lg:w-1/4 md:w-1/3 sm:w-full mx-2 my-4"
    >
      <div className="relative h-[350px] sm:h-[450px]">
        <img
          src={props.img}
          alt={props.title}
          className="absolute inset-0 h-full w-full object-cover opacity-100"
        />
      </div>

      <div className="relative pt-3">
        <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {props.title}
        </h3>

        <p className="mt-1.5 tracking-wide text-gray-900">{props.desc}</p>
        <small className="text-gray-400">
          <strong>Tech Stack:</strong> {props.tech}
        </small>
      </div>
    </a>
  );
}
