import Image from "next/image";
import me from "@/components/images/me.png";
import { MapIcon } from "@/components/icons/MapIcon";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="  h-1/2 lg:h-full lg:w-1/2  relative ">
        <Image src={me} alt="bai" fill className="object-contain " />
      </div>
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-grayish w-full font-bold text-4xl md:6xl">Hi, I&apos;m Stephen 👋</h1>
        <span className="md:text-xl">
          Specializing in front-end development, I excel in leveraging
          technologies like React, Next.js, and server-side rendering to craft
          engaging and user-centric applications. My proficiency extends across
          a spectrum of tools including Styled Components, TailwindCss, Axios,
          Redux, Postman, and other modern Frontend Technologies, allowing me to
          build efficient and scalable solutions aligned with business
          objectives.
        </span>
        <div className="w-full flex flex-col gap-2 ">
          <div className="flex items-center gap-2">
            <MapIcon />
            <span>F.C.T Abuja, Nigeria</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span>Available for new projects</span>
          </div>
        </div>
      </div>
    </main>
  );
}
