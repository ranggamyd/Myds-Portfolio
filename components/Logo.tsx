import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="logo" width={54} height={54} priority />
    </Link>
  );
};

export default Logo;
