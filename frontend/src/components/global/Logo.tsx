import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo.png"
        width={50}
        height={50}
        alt="FlowCode logo"
        className="flex shadow-sm"
      />
      <h1 className="text-3xl font-bold">FlowCode</h1>
    </Link>
  );
};

export default Logo;
