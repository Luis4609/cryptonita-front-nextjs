import React from "react";
import Image from "next/image";

function Slider() {
  return (
    <div>
      <Image src="/vespa.jpg" alt="Vespa Img" width={250} height={400} />
      <Image src="/vespa.jpg" alt="Vespa Img" width={250} height={400} />
    </div>
  );
}

export default Slider;
