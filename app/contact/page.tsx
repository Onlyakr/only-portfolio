import ContactForm from "@/components/contact-form";
import Section from "@/components/section";

const Contact = () => {
  return (
    <>
      <h1 className="px-6 py-12 text-4xl font-bold tracking-tight md:px-10 md:py-16">
        Contact
      </h1>

      <Section>
        <ContactForm />
      </Section>
    </>
  );
};
export default Contact;
