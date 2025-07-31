import Services from "@/component/services/Services";
import Faq from "@/component/faq/Faq";
import ContactForm from "@/component/contact/ContactForm";
import "./globals.css";
// import "../component/style.css"
export default function Page() {
  return (
    <>
      <Services />
      <Faq />
      <ContactForm />
    </>
  );
}
