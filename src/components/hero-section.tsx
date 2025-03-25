import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-[#f0e9df]">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-medium mb-24">
            Virts.dev<sup className="text-xs">®</sup>
          </h1>

          <div className="space-y-6 max-w-xl">
            <h2 className="text-5xl font-medium leading-tight">
              I help businesses{" "}
              <span className="italic relative">
                wow
                <span className="absolute left-0 right-0 bottom-1 h-[2px] bg-black"></span>
              </span>{" "}
              their customers
            </h2>

            <p className="text-lg">
              Creating brands, websites and web applications to make business
              operations more efficient and convert more visitors into
              customers.
            </p>
          </div>
        </div>

        <div className="mt-16 flex items-center  space-x-8">
          <Link
            href="/about"
            className="bg-black text-white px-6 py-3 rounded-full text-sm"
          >
            About me
          </Link>
          <Link href="/contact" className="flex items-center text-sm">
            Book a Call
            <span className="ml-2">→</span>
          </Link>

          <div>
            <a
              href="https://www.credly.com/badges/53c261a3-7948-40e2-acba-e66dee716ada"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://images.credly.com/size/340x340/images/997d4586-e7b2-4174-9c76-5c7304953e2c/image.png"
                alt="Meta Full-Stack Software Engineer"
                width={120}
                height={30}
              />
            </a>
          </div>

          <div>
            <a
              href="https://www.credly.com/badges/a153c05c-ff47-4d4e-b4f3-477f8912d43c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://images.credly.com/size/340x340/images/4d81763c-b917-4ab9-92be-103af95c0a21/image.png"
                alt="Meta Back-End Software Engineer"
                width={120}
                height={30}
              />
            </a>
          </div>

          <div>
            <a
              href="https://www.credly.com/badges/e5dfaa5b-b8aa-4d5a-910a-f1866f97d351"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://images.credly.com/size/340x340/images/f4b9febb-69f6-46d8-8797-1e504ebfe0f8/GCC_badge_UX_1000x1000.png"
                alt="Google Certified UX Designer"
                width={120}
                height={30}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 relative">
        {/* Navigation */}
        <div className="absolute top-8 right-8 z-10 flex items-center space-x-8">
          <Link href="/about" className="text-sm">
            About us
          </Link>
          <Link href="/work" className="text-sm">
            Our Work
          </Link>
          <button className="bg-white rounded-full p-2">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Main Image */}
        <div className="h-full">
          <Image
            src="https://67wvo3jvf7.ufs.sh/f/31uuUYnOr3SZbafvkiGz7NMFe9VrYi8j1qHSU5TyR2pWCuKc"
            alt="Office environment"
            width={800}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Journal Section */}
        <div className="absolute bottom-8 right-8 bg-[#f0e9df]/80 backdrop-blur-sm p-6 rounded-lg max-w-md">
          <p className="text-xs uppercase tracking-wider mb-2">Journal</p>
          <h3 className="text-lg font-medium mb-2">
            What being a B Corp means for our charity partners
          </h3>
          <p className="text-sm">
            Choosing a digital partner is tough for charities and that&apos;s
            exactly why we spent two years going through the rigorous B Corp
            certification process.
          </p>
        </div>

        {/* Side Navigation Dots */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
