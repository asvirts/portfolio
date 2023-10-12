import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-wrap container mx-auto min-h-screen items-start justify-center mt-10">
      <Image
        src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2607&q=80"
        width={800}
        height={600}
        alt="Picture of the author"
      />
    </main>
  );
}
