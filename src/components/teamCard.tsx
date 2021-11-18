import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';

type TeamMember = {
  name: string;
  description: string;
  designation: string;
  qualification: string;
  imageSrc: string;
};

export const TeamMemberCard = (props: TeamMember) => {
  return (
    <figure className="w-full p-8 shadow-lg md:flex rounded-xl md:shadow-none md:p-0">
      <div className="rounded-md md:shadow-2xl ">
        <img
          className="w-32 h-32 mx-auto rounded-full md:w-48 md:h-full md:rounded-md"
          src={props.imageSrc}
          alt=""
          width="600"
          height="512"
        />
      </div>

      <div className="flex-1 pt-6 space-y-4 text-center md:p-8 md:text-left">
        <blockquote>
          <p className="text-lg font-semibold">{props.name}</p>
        </blockquote>
        <figcaption className="font-medium">
          {/* <div className="text-cyan-600">{props.name}{props.description}</div> */}
          <div className="text-sm text-gray-500">{props.designation}</div>
          <div className="text-xs text-gray-500">{props.qualification}</div>
        </figcaption>
        <div className="flex justify-center gap-6 text-2xl md:justify-start">
          <FaLinkedin className="text-[#0A66C2]" />
          <FaFacebookSquare className="text-[#0A66C2]" />
          <FaTwitterSquare className="text-[#1da1f2] " />
        </div>
      </div>
    </figure>
  );
};
