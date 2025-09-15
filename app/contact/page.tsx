import * as motion from "motion/react-client";

import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-8"
    >
      <h1 className="text-4xl font-bold">Contact me</h1>
      <ContactForm />
    </motion.div>
  );
};
export default Contact;
