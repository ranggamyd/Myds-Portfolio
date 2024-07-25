import Image from "next/image";

const DevImg = ({
  containerStyles,
  imgSrc,
}: {
  containerStyles: string;
  imgSrc: string;
}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} alt="Avatar" fill priority />
    </div>
  );
};

export default DevImg;
