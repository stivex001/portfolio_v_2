import React from "react";

type Props = {};

export const Biography = (props: Props) => {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="uppercase text-white font-bold text-2xl">Biography</h1>
      <p>
        I&apos;m a passionate software developer who specializes in full stack
        development (React.js & Node.js). I am very enthusiastic about bringing
        the technical and visual aspects of digital products to life. User
        experience, pixel perfect design, and writing clear, readable, highly
        performant code matters to me.
        <br /> <br />I began my journey as a web developer in 2015, and since
        then, I&apos;ve continued to grow and evolve as a developer, taking on
        new challenges and learning the latest technologies along the way. Now,
        in my early thirties, 7 years after starting my web development journey,
        I&apos;m building cutting-edge web applications using modern
        technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase
        and much more.
        <br /> <br />I am very much a progressive thinker and enjoy working on
        products end to end, from ideation all the way to development.
        <br />
        <br />
        When I&apos;m not in full-on developer mode, you can find me hovering
        around on twitter , witnessing the journey of early startups or enjoying
        some free time.
      </p>
    </div>
  );
};
