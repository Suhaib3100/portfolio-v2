type Props = {};
const BlackholeVideo = (props: Props) => {
  return (
    <div className="w-full h-[1000px] flex flex-col opacity-0 dark:opacity-100 absolute top-0">
      <div className="h-full w-full relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="rotate-180 absolute top-[-460px] w-full h-full object-cover -z-30"
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-[#080414] to-background -z-10"></div>
      </div>
    </div>
  );
};
export default BlackholeVideo;
