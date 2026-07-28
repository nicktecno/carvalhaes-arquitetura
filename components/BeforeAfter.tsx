'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

type BeforeAfterProps = {
  antes: string;
  depois: string;
  alt: string;
};

export default function BeforeAfter({ antes, depois, alt }: BeforeAfterProps) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  const onDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };
  const onUp = () => {
    dragging.current = false;
  };

  return (
    <div
      className="ba"
      ref={ref}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
    >
      <Image src={depois} alt={`${alt} — depois`} width={900} height={600} className="ba-img" />
      <Image
        src={antes}
        alt={`${alt} — antes`}
        width={900}
        height={600}
        className="ba-img ba-antes"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />

      <span className="ba-label ba-label-antes">Antes</span>
      <span className="ba-label ba-label-depois">Depois</span>

      <div className="ba-handle" style={{ left: `${pos}%` }}>
        <span className="ba-grip">&#8596;</span>
      </div>
    </div>
  );
}
