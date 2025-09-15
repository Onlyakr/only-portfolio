import * as motion from "motion/react-client";

import ContactForm from "@/components/ContactForm";
import { BlurFade } from "@/components/ui/blur-fade";

const Contact = () => {
  return (
    <BlurFade className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">Contact me</h1>
      <ContactForm />
    </BlurFade>
    // <motion.div
    //   initial={{ opacity: 0, y: 100 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.5 }}
    //   className="flex flex-col gap-8"
    // >
    //   <h1 className="text-4xl font-bold">Contact me</h1>
    //   <ContactForm />
    // </motion.div>
  );
};
export default Contact;
