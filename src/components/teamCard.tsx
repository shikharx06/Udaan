type TeamMember = {
  name: string;
  src: string;
  description: string;
  designation: string;
  qualification: string;
};

export const TeamMemberCard = (props: TeamMember) => {
  return (
    <figure className="p-8 md:flex rounded-xl md:p-0">
      <div className="shadow-xl">
        <img
          className="w-32 h-32 mx-auto rounded-full shadow-xl md:w-48 md:h-auto md:rounded-lg"
          src="/assets/images/userSample.jpg"
          alt=""
          width="384"
          height="512"
        />
      </div>

      <div className="max-w-sm pt-6 space-y-4 text-center md:p-8 md:text-left">
        <blockquote>
          <p className="text-lg font-semibold">{props.description}</p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-cyan-600">{props.name}</div>
          <div className="text-sm text-gray-500">{props.designation}</div>
          <div className="text-xs text-gray-500">{props.qualification}</div>
        </figcaption>
      </div>
    </figure>
  );
};
