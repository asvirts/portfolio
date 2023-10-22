import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-wrap container mx-auto min-h-screen items-start justify-center mt-10">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2607&q=80"
                width={800}
                height={600}
                alt="Do something great"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Your story. My medium.
              </h2>

              <p className="mt-4 text-gray-600">
                A curious learner and passionate creator sharing my journey with
                the world. Using my skills and passions to make a positive
                impact and empower others to do the same.
              </p>

              <a
                href="/portfolio"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                See my work
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
