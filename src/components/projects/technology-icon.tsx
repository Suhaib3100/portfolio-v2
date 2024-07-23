import { AnimatedTooltip } from "@/components/ui/Aceternity/AnimatedTooltip";

type Props = {
  index: number;
  icon: { title: string; description: string; img: string };
};

const TechnologyIcon = ({ icon, index }: Props) => {
  return (
    <div
      key={index}
      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 size-8 flex justify-center items-center hover:cursor-pointer"
      style={{
        transform: `translateX(-${5 * index + 2}px)`,
      }}
    >
      <AnimatedTooltip
        index={index}
        icon={icon.img}
        title={icon.title}
        description={icon.description}
      />
    </div>
  );
};
export default TechnologyIcon;
