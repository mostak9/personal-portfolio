
import { Button, Input, Textarea } from "@material-tailwind/react";
import Title from "../../../Components/Shared/Title/Title";
import bg from '../../../assets/contact_bg.jpg';

const Contact = () => {
  return (
    <div id="contact" className=" py-12 bg-cover bg-center  bg-fixed relative" >
        {/* <div className="bg-blue-gray-200 absolute w-full h-full -z-10"></div> */}
        <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-10 bg-fixed"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="max-w-5xl mx-5 md:mx-auto relative z-10">
        <Title text="Contact Me" />
        <div className="mt-5 flex flex-col gap-6 max-w-3xl mx-auto">
        <Input color="light-green" type="text" size="lg" label="Name" />
        <Input color="light-green" type="email" size="lg" label="Email" />
        <Input color="light-green" type="number" size="lg" label="Phone Number" />
        <Textarea size="lg" color="light-green" label="Message" />
        <Button className="w-full bg-green-500">Send Message</Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
