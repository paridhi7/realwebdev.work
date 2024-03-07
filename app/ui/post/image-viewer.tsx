"use client";
import { useState } from "react";
import Image from "next/image";

const ImageViewer = ({ mockupImages }: { mockupImages: string }) => {
  const [isFullPage, setIsFullPage] = useState(false);

  return (
    <div>
      <div onClick={() => setIsFullPage(true)} className="cursor-pointer">
        <Image
          src={`data:image/jpeg;base64,${mockupImages}`}
          width={600}
          height={250}
          alt="Mockup Image"
          className="rounded-lg"
        />
      </div>

      {isFullPage && (
        <div
          className="fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-80"
          onClick={() => setIsFullPage(false)}
        >
          <img
            src={`data:image/jpeg;base64,${mockupImages}`}
            alt="Mockup Image"
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </div>
  );
};

export default ImageViewer;
