import { Button, Input, Textarea } from "@material-tailwind/react";
import Title from "../../../Components/Shared/Title/Title";
import bg from "../../../assets/contact_bg.jpg";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_USER_ID
      )
      .then((result) => {
        
          toast.success("Email sent successfully.");
          form.current.reset();
          console.log(result);
       
      })
      .catch((err) => console.log(err));
  };
  return (
    <div id="contact" className=" py-12 bg-cover bg-center  bg-fixed relative">
      {/* <div className="bg-blue-gray-200 absolute w-full h-full -z-10"></div> */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-10 bg-fixed"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="max-w-5xl mx-5 md:mx-auto relative z-10">
        <Title text="Contact Me" />
        <form ref={form} onSubmit={sendEmail}>
          <div className="mt-5 flex flex-col gap-6 max-w-3xl mx-auto">
            <Input
              color="light-green"
              name="name"
              type="text"
              size="lg"
              label="Name"
              required
            />
            <Input
              color="light-green"
              name="email"
              type="email"
              size="lg"
              label="Email"
              required
            />
            <Input
              color="light-green"
              type="number"
              name="number"
              size="lg"
              label="Phone Number"
              required
            />
            <Textarea
              name="message"
              size="lg"
              color="light-green"
              label="Message"
              required
            />
            <Button  type="submit" className="w-full bg-green-500">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
