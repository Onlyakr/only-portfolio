import ContactForm from "@/components/contact-form";
import { BlurFade } from "@/components/ui/blur-fade";

const Contact = () => {
  return (
    <BlurFade className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">Contact me</h1>
      <ContactForm />
    </BlurFade>
  );
};
export default Contact;
