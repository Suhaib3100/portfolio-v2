import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const Vortex = dynamic(() => import("./Vortex").then((m) => m.Vortex), {
  ssr: false,
});

type Props = {
  sheetsData: typeof import("@/locale/english").data.sheets;
  handleCloseVortex: () => void;
};
const VortexEffect = ({ sheetsData, handleCloseVortex }: Props) => {
  return (
    <Vortex className="fixed inset-0 flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
      <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
        {sheetsData.contactSheet.emailSent.title}
      </h2>
      <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        {sheetsData.contactSheet.emailSent.subTitle}
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <a
          href={"https://youtu.be/dQw4w9WgXcQ?si=pmKt6kDKY6t-DL3z"}
          target={"_blank"}
        >
          <Button
            variant={"link"}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
          >
            {sheetsData.contactSheet.emailSent.mainButton}
          </Button>
        </a>
        <Button
          className="px-4 py-2  text-white"
          variant={"ghost"}
          onClick={handleCloseVortex}
        >
          {sheetsData.contactSheet.emailSent.cancelButton}
        </Button>
      </div>
    </Vortex>
  );
};
export default VortexEffect;
