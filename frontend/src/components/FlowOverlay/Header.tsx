import { Panel } from "@xyflow/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <Panel
      position="top-center"
      className="w-full bg-white border p-2 flex items-center"
      style={{
        margin: "0px !important",
      }}
    >
      <div className="flex">
        <Link href="/">
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="FlowCode logo"
          />
        </Link>
      </div>
      <div className="flex flex-1 justify-center">Test</div>
    </Panel>
  );
};

export default Header;
