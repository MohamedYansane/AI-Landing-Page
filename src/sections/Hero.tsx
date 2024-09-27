import Button from "@/components/button";
import starsBg from "@/assets/stars.png";
export const Hero = () => {
  return (
    <section
      className="h-[492px] flex items-center"
      style={{ backgroundImage: `url(${starsBg.src})` }}
    >
      {/**Planet styl the negative value in shadow is -20 t0 top and -20 t0 left and blur represent the postive value  */}
      <div className="absolute h-64 w-64 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      <div className=" border-white/20 absolute h-[344px] w-[344px] border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
        {/** ring in our div */}
        <div className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 top-0 left-1/2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 top-1/2 left-full border border-white rounded-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="rounded-full h-2 w-2 bg-white"></div>
        </div>
      </div>
      {/** we want our container to be at the top of our planet so set it to relative */}
      <div className="container relative">
        {/* tracking tighter will make sure it's line height is negative*/}
        {/**the bg-clip-text notre gradient ne sera que sur le texte */}
        <h1 className="text-center font-semibold text-8xl tracking-tighter bg-white  bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
          AI SEO
        </h1>
        <p className="text-lg text-white/70 mt-5 text-center">
          Elevate your site's visibility effortlesssly with AI, where smart
          technology meets user-friendly SEO tools
        </p>
        <div className="flex justify-center mt-5">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </section>
  );
};
