// src/components/sheets.email-sheet-content.tsx
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FaPaperPlane } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import SheetSelector from "@/components/sheets/sheet-selector";
import { PlaceholdersAndVanishInput } from "@/components/ui/Aceternity/PlaceholdersAndVanishInput";
import { PlaceholdersAndVanishTextArea } from "@/components/ui/Aceternity/PlaceholdersAndVanishTextArea";
import { TriangleAlertIcon, X } from "lucide-react";
import { MultiStepLoader } from "@/components/ui/Aceternity/MultiStepLoader";
import { useState } from "react";
import VortexEffect from "@/components/ui/Aceternity/VortexEffect";
import { sendEmail } from "@/actions/send-email";
import { toast } from "sonner";

type Props = {
  sheetsData: typeof import("@/locale/english").data.sheets;
};

const EmailSheetContent = ({ sheetsData }: Props) => {
  const formSchema = z.object({
    title: z
      .string()
      .min(2, {
        message: "Title must be at least 2 characters long",
      })
      .max(50, {
        message: "Title must be less than 50 characters long",
      }),
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    message: z
      .string()
      .min(2, {
        message: "Your message must be at least 2 characters long",
      })
      .max(250, {
        message: "Your message must be less than 250 characters long",
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      title: "",
      message: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const [doneSending, setDoneSending] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    const timeoutId = setTimeout(() => {
      setLoading(false);
      setDoneSending(true);
    }, 7000);

    const { error } = await sendEmail({
      email: values.email,
      title: values.title,
      message: values.message,
    });

    if (error) {
      console.error(error);
      toast.error("ERROR! Try again later!", {
        className: "bg-red-500 text-white ml-2",
        icon: <TriangleAlertIcon />,
      });
      clearTimeout(timeoutId);
      setLoading(false);
      setDoneSending(false);
      return;
    }
  }

  async function handleCloseVortex() {
    setDoneSending(false);
    form.reset();
  }

  return (
    <SheetContent>
      <MultiStepLoader
        loadingStates={sheetsData.contactSheet.loadingStates}
        loading={loading}
        duration={1000}
        loop={false}
      />
      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <X className="h-10 w-10" />
        </button>
      )}
      {doneSending && (
        <VortexEffect
          sheetsData={sheetsData}
          handleCloseVortex={handleCloseVortex}
        />
      )}
      <SheetSelector sheetsData={sheetsData} />
      <SheetHeader className={"mb-2"}>
        <SheetTitle>{sheetsData.contactSheet.title}</SheetTitle>
        <SheetDescription>{sheetsData.contactSheet.subTitle}</SheetDescription>
        <Separator />
      </SheetHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-3 w-full"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor={"title"}>
                  {sheetsData.contactSheet.firstFormElement.title}:
                </FormLabel>
                <FormControl>
                  <PlaceholdersAndVanishInput
                    id={"title"}
                    type={"text"}
                    max={50}
                    placeholders={
                      sheetsData.contactSheet.firstFormElement.placeholders
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor={"email"}>
                  {sheetsData.contactSheet.secondFormElement.title}:
                </FormLabel>
                <FormControl>
                  <PlaceholdersAndVanishInput
                    id={"email"}
                    type={"text"}
                    placeholders={
                      sheetsData.contactSheet.secondFormElement.placeholders
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>
                  {sheetsData.contactSheet.thirdFormElement.title}:
                </FormLabel>
                <FormControl>
                  <PlaceholdersAndVanishTextArea
                    placeholders={
                      sheetsData.contactSheet.thirdFormElement.placeholders
                    }
                    {...field}
                    rows={10}
                    maxLength={250}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-[#8950ff] py-5 px-10 rounded-md text-white font-bold text-lg w-full hover:text-[#8950ff] transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            <div className="flex flex-row items-center justify-center gap-4">
              <FaPaperPlane className="h-8 w-8 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
              <p className="text-sm">{sheetsData.contactSheet.submitButton}</p>
            </div>
          </Button>
        </form>
      </Form>
    </SheetContent>
  );
};

export default EmailSheetContent;
