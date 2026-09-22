import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="w-full bg-white">
      <div className="flex flex-col items-center justify-between gap-2 px-6 py-6 sm:px-4 md:flex-row md:gap-8">
        {/* Left Content */}
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Build Your Ideal
            <br />
            <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-500 sm:text-base md:mx-0">
            Explore frontend, backend, database, and tooling options,
            <br className="hidden lg:block" />
            compare them side by side, and put together the stack that fits your
            next project.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <button
              type="button"
              className="rounded-md bg-gradient-to-r from-[#F97316] to-[#EC4899] px-5 py-2.5 text-xs font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Explore Technologies
            </button>

            <button
              type="button"
              className="rounded-md border border-slate-200 bg-white px-6 py-2.5 text-xs font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex w-full items-center justify-center md:w-1/2">
          <img
            src={bannerImage}
            alt="Development stack"
            className="w-full object-contain md:w-80 lg:w-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
