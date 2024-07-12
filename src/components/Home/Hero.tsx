import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="min-h-[35vh] bg-primary rounded-2xl flex items-center justify-between">
      <div className="ml-8  h-[35vh] w-full flex flex-col items-start justify-evenly">
        <h1 className="text-3xl lg:text-5xl font-semibold text-white">
          Grab up to 20% off on selected categories
        </h1>
        <Button
          variant="default"
          className="text-primary rounded-full bg-white p-6 hover:bg-gray-300 hover:text-primary"
        >
          Buy Now
        </Button>
      </div>

      <img
        src="https://elitahair.com/wp-content/uploads/2017/03/extentions.png"
        alt="hero section bg"
        className="hidden sm:flex h-full sm:h-[35vh] lg:h-[35vh]  "
      />
    </section>
  );
}
