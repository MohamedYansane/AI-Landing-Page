import Button from "@/components/button";
import starsBg from "@/assets/stars.png";
export const Hero = () => {
  return (
    <section
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{ backgroundImage: `url(${starsBg.src})` }}
    >
      {/**after the thir ring let gice inset-0 to this so that it will have the same size with section inset-0 to have the same size like the section */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      {/** Start Planet styl the negative value in shadow is -20 t0 top and -20 t0 left and blur represent the postive value  */}
      <div className="absolute h-64 md:w-96 md:h-96 w-64 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      {/**End Planet */}
      {/** we remove the border opacity otherwise you'll see when it crossing and we give to the whole thing opacity-20*/}

      {/**Start of ring 1 */}
      <div className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border border-white  rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
        {/** ring in our div */}
        <div className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 top-0 left-1/2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 top-1/2 left-full border border-white rounded-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="rounded-full h-2 w-2 bg-white"></div>
        </div>
      </div>
      {/** End of ring 1 */}
      {/**Start of Second ring */}
      <div className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"></div>
      {/**End of second ring */}

      {/**third ring */}
      <div className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
        <div className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 top-1/2 left-full bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      {/**End of third ring */}
      {/** we want our container to be at the top of our planet so set it to relative */}
      <div className="container relative mt-16">
        {/* tracking tighter will make sure it's line height is negative*/}
        {/**the bg-clip-text notre gradient ne sera que sur le texte the leading-none is to make sure we dont have a line-height*/}
        <h1 className="text-center font-semibold md:text-[168px] text-8xl md:leading-none tracking-tighter bg-white  bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
          AI SEO
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto">
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
