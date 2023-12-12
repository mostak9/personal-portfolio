import Title from "../../Shared/Title/Title";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import img1 from "../../../assets/projects/projects.png";
import img2 from "../../../assets/projects/project-2.png";
import img3 from "../../../assets/projects/project-3.png";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import bg from "../../../assets/bg_project.jpg";
import AnimationProvider from "../../../Provider/AnimationProvider/AnimationProvider";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-fixed bg-center bg-cover py-12"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-5xl mx-5 md:mx-auto ">
        <Title text="My Projects" />

        <AnimationProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-0">
            <Card className=" overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img src={img1} alt="ui/ux review check" />
              </CardHeader>
              <CardBody>
                <Typography variant="h4" color="blue-gray">
                  Life Flow
                </Typography>
                <Typography
                  variant="paragraph"
                  color="gray"
                  className="mt-3 font-normal"
                >
                  Life Flow a blood donation management system designed to
                  facilitate the process of blood donation
                </Typography>
                <div className="flex items-center gap-2 mt-4">
                  <a href="https://blood-donation-site-93773.web.app/">
                    <Button
                      className="flex items-center bg-green-500"
                      variant="filled"
                      size="sm"
                    >
                      <LiaExternalLinkAltSolid className="text-xl " />
                      Live
                    </Button>
                  </a>
                  <a href="https://github.com/mostak9/blood-donation-management/tree/main/client-side">
                    <Button
                      className="flex items-center text-green-500"
                      size="sm"
                      variant="text"
                    >
                      <LiaExternalLinkAltSolid className="text-xl" />
                      Client Code
                    </Button>
                  </a>
                  <a href="https://github.com/mostak9/blood-donation-management/tree/main/server-side">
                    <Button
                      className="flex items-center text-green-500"
                      size="sm"
                      variant="text"
                    >
                      <LiaExternalLinkAltSolid className="text-xl" />
                      Server Code
                    </Button>
                  </a>
                </div>
              </CardBody>
            </Card>
            <Card className=" overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img src={img2} alt="ui/ux review check" />
              </CardHeader>
              <CardBody>
                <Typography variant="h4" color="blue-gray">
                  Book De Libros
                </Typography>
                <Typography
                  variant="paragraph"
                  color="gray"
                  className="mt-3 font-normal"
                >
                  Online library, JWT-secured for privacy. Browse PDF books,
                  MongoDB powered. Borrow one book at a time for fair access.
                </Typography>
                <div className="flex items-center gap-2 mt-4">
                  <a href="https://rad-bubblegum-8768e9.netlify.app/">
                    <Button
                      className="flex items-center bg-green-500"
                      variant="filled"
                      size="sm"
                    >
                      <LiaExternalLinkAltSolid className="text-xl " />
                      Live
                    </Button>
                  </a>
                  <a href="https://github.com/mostak9/book-delibros-client">
                    <Button
                      className="flex items-center text-green-500"
                      size="sm"
                      variant="text"
                    >
                      <LiaExternalLinkAltSolid className="text-xl" />
                      Client Code
                    </Button>
                  </a>
                  <a href="https://github.com/mostak9/book-delibros-server">
                    <Button
                      className="flex items-center text-green-500"
                      size="sm"
                      variant="text"
                    >
                      <LiaExternalLinkAltSolid className="text-xl" />
                      Server Code
                    </Button>
                  </a>
                </div>
              </CardBody>
            </Card>
            <Card className=" overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img src={img3} alt="ui/ux review check" />
              </CardHeader>
              <CardBody>
                <Typography variant="h4" color="blue-gray">
                  Quantum drive
                </Typography>
                <Typography
                  variant="paragraph"
                  color="gray"
                  className="mt-3 font-normal"
                >
                  Quantum Drive is a brandshop. Explore products. Registered
                  users: ADD PRODUCT, manage cart. Database-driven.
                </Typography>
                <div className="flex items-center gap-2 mt-4">
                  <a href="https://quantum-drive-f9d36.web.app/">
                    <Button
                      className="flex items-center bg-green-500"
                      variant="filled"
                      size="sm"
                    >
                      <LiaExternalLinkAltSolid className="text-xl " />
                      Live
                    </Button>
                  </a>
                  <a href="https://github.com/mostak9/quantum-drive-client">
                    <Button
                      className="flex items-center text-green-500"
                      size="sm"
                      variant="text"
                    >
                      <LiaExternalLinkAltSolid className="text-xl" />
                      Client Code
                    </Button>
                  </a>
                  <a href="https://github.com/mostak9/quantum-drive-server">
                    <Button
                      className="flex items-center text-green-500"
                      size="sm"
                      variant="text"
                    >
                      <LiaExternalLinkAltSolid className="text-xl" />
                      Server Code
                    </Button>
                  </a>
                </div>
              </CardBody>
            </Card>
          </div>
        </AnimationProvider>
      </div>
    </div>
  );
};

export default Projects;
