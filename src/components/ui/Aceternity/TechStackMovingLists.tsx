import { InfiniteMovingList } from "@/components/ui/Aceternity/InfinityMovingList";

type Props = {};
const TechStackMovingLists = (props: Props) => {
  const mainTechnologies = [
    "Next.js",
    "Typescript",
    "React",
    "JavaScript",
    "ReactNative",
  ];
  const secondaryTechnologies = [
    "Tailwindcss",
    "DrizzleORM",
    "Prisma",
    "Cube.js",
    "TinyBird",
  ];
  const databases = ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"];
  const tools = ["Git", "Docker", "Kubernetes", "Figma", "Redux"];
  const additional = ["GraphQL", "Thirdweb", "Rust", "Python", "Express"];
  const bonusTechnologies = [
    "MongoDB",
    "Express",
    "Ethers.js",
    "Nest.js",
    "Zustand",
  ];

  return (
    <div className="flex flex-col max-w-full max-h-full absolute top-0 left-0 right-0 bottom-0">
      {/* tech stack lists */}
      <InfiniteMovingList
        items={mainTechnologies}
        direction={"right"}
        speed={"superfast"}
        pauseOnHover={false}
      />
      <InfiniteMovingList
        items={secondaryTechnologies}
        direction={"left"}
        speed={"superfast"}
        pauseOnHover={false}
      />
      <InfiniteMovingList
        items={databases}
        direction={"right"}
        speed={"superfast"}
        pauseOnHover={false}
      />
      <InfiniteMovingList
        items={tools}
        direction={"left"}
        speed={"superfast"}
        pauseOnHover={false}
      />
      <InfiniteMovingList
        items={additional}
        direction={"right"}
        speed={"superfast"}
        pauseOnHover={false}
      />
      <InfiniteMovingList
        items={bonusTechnologies}
        direction={"left"}
        speed={"superfast"}
        pauseOnHover={false}
      />
    </div>
  );
};
export default TechStackMovingLists;
