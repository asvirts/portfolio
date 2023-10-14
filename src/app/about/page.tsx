import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container md:w-2/6 sm:w-full">
        <Image
          src="https://images.unsplash.com/photo-1693132038772-7ad13c7bad9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2585&q=80"
          alt="Jungle pattern background psd wild animals"
          width={800}
          height={600}
          className="mb-5"
        />
        <h1 className="font-bold text-2xl mb-3 block">
          Software Engineer on the Bayou
        </h1>
        <p className="my-3">
          A curious learner and passionate creator sharing my journey with the
          world. Using my skills and passions to make a positive impact and
          empower others to do the same.
        </p>
        <p className="my-3">
          I am driven by a passion for creating innovative solutions to
          real-world problems. I'm always on the lookout for new, challenging
          projects that allow me to continue learning and growing in this field.
        </p>
        <p className="my-3">
          I have had the opportunity to work on a diverse range of projects,
          from small business websites to large-scale web applications. I am
          highly collaborative and enjoy working with a team, but am also
          comfortable taking on individual projects and seeing them through to
          completion.
        </p>
        <p className="my-3">
          When I'm not coding, you'll likely find me hanging out with my family,
          playing video games, or watching sports.
        </p>
      </div>
    </main>
  );
}
