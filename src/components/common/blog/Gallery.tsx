'use client';

import Image from "next/image";

type Props = {
  images: string[];
};

export default function Gallery({ images }: Props) {
  if (!images || images.length === 0) return null;

  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, idx) => (
        <div key={idx} className="relative w-full aspect-square overflow-hidden rounded">
          <Image src={src} alt={`Imagem ${idx + 1}`} fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}
