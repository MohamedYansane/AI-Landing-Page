const Button = (props: React.PropsWithChildren) => {
  return (
    <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
      {/** the inset-0 wll make sure we bottom top left right 0 */}
      {/** the mask in will allow us to make things fade in and fade out*/}
      <div className="absolute inset-0 ">
        <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black, transparent)]"></div>
        {/** to make our mask-image ok let's create another div*/}
        <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top, black, transparent)]rounded-lg "></div>
        {/**the shadow left and right will be 0 and blur 10 */}
        <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
      </div>
      <span>{props.children}</span>
    </button>
  );
};

export default Button;
