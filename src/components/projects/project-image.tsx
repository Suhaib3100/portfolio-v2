import { PinContainer } from "@/components/ui/Aceternity/Pin";
import Image from "next/image";
import Link from "next/link";

type Props = {
  img: string;
  link: string;
  title: string;
};
const ProjectImage = ({ img, link, title }: Props) => {
  return (
    <Link href={link} target={"_blank"}>
      <PinContainer title={title} href={link}>
        <div className="relative flex items-center justify-center sm:w-96 w-[80vw] h-[20vh] lg:h-[30vh]">
          <div
            className="relative w-full h-full lg:rounded-3xl"
            style={{ backgroundColor: "#13162D" }}
          >
            <Image
              src={"/bg.png"}
              alt={"bgimg"}
              className={"sm:w-96 w-[80vw] h-[20vh] lg:h-[30vh] z-50"}
              fill={true}
            />
          </div>
          <Image
            src={img}
            alt={title}
            className={
              "sm:w-96 w-[80vw] h-[20vh] lg:h-[30vh] z-60 absolute bottom-0 object-fill"
            }
            fill={true}
          />
        </div>
      </PinContainer>
    </Link>
  );
};
export default ProjectImage;
