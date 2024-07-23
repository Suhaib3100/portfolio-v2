import { SparklesCore } from "@/components/ui/Aceternity/Sparkles";

type Props = {
  title_noColor: string;
  title_color: string;
};
const ProjectsTitle = ({ title_noColor, title_color }: Props) => {
  return (
    <div className="max-h-[220px] w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="font-bold text-4xl md:text-5xl text-center">
        {title_noColor} <span className="text-[#CBACF9]">{title_color}</span>
      </h1>
      <div className="w-full h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div
          className="absolute inset-0 w-full h-full bg-background"
          style={{
            maskImage:
              "radial-gradient(350px 200px at top, transparent 20%, white)",
          }}
        ></div>
      </div>
    </div>
  );
};
export default ProjectsTitle;
