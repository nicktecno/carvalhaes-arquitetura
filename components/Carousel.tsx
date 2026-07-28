'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

type CarouselProps = {
  imagens: string[];
  alt: string;
};

export default function Carousel({ imagens, alt }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const total = imagens.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + total) % total),
    [total]
  );
  const goTo = useCallback((i: number) => setIndex(i), []);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 5000);
    return () => clearInterval(id);
  }, [total]);

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {imagens.map((src, i) => (
          <div className="carousel-slide" key={src}>
            <Image
              src={src}
              alt={`${alt} — imagem ${i + 1}`}
              width={900}
              height={600}
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="carousel-btn prev"
        aria-label="Imagem anterior"
        onClick={(e) => {
          e.preventDefault();
          go(-1);
        }}
      >
        &#8249;
      </button>
      <button
        type="button"
        className="carousel-btn next"
        aria-label="Próxima imagem"
        onClick={(e) => {
          e.preventDefault();
          go(1);
        }}
      >
        &#8250;
      </button>

      <div className="carousel-dots">
        {imagens.map((src, i) => (
          <button
            type="button"
            key={src}
            className={`dot${i === index ? ' active' : ''}`}
            aria-label={`Ir para imagem ${i + 1}`}
            onClick={(e) => {
              e.preventDefault();
              goTo(i);
            }}
          />
        ))}
      </div>
    </div>
  );
}
