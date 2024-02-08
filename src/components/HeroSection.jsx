import heroImage from "../assets/images/heroImage.png";

const HeroSection = () => {
  return (
    <section className="pb-20 pt-20 md:mt-[100px]">
      <div className="container lg:px-20">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div className="flex justify-center md:order-2">
            <img
              className="pt-10 w-[280px] h-[280px] sm:pt-0 sm:w-[342px] sm:h-[342px]"
              src={heroImage}
              alt="frame"
            />
          </div>
          <div>
            <h1 className="mb-1.5 text-[56px] text-center sm:text-left font-bold leading-none text-[#F5BF42] lg:text-[73px]">
              QtecTodo
            </h1>
            <p className="text-lg my-8 opacity-60">
              Effortlessly Organize, Prioritize, and Conquer Tasks with Tasker - Your Personal Productivity
              Ally for Seamless Goal Achievement and Stress-Free Task Management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
