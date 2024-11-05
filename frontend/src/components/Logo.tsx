import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex mx-2 my-4">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="FlowCode logo"
          className="flex"
        />
        <h1 className="flex flex-1 text-lg font-roboto">
          FlowCode
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
