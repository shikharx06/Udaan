type TeamMember = {
  name: string;
  description: string;
  designation: string;
  qualification: string;
  experience: string;
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
      <div className="flex-1 max-w-md pt-6 space-y-2 text-center md:p-8 md:text-left">
        <blockquote>
          <p className="text-xl font-semibold">{props.name}</p>
        </blockquote>
        <figcaption className="font-medium">
          {/* <div className="text-cyan-600">{props.name}{props.description}</div> */}
          <div className="text-gray-700 text-md">{props.designation}</div>
          <div className="text-sm text-gray-600">{props.qualification}</div>
        </figcaption>
        <div className="flex justify-center gap-6 text-2xl md:justify-start">
          <div className="text-sm text-gray-600">{props.experience}</div>
        </div>
      </div>
    </figure>
  );
};
