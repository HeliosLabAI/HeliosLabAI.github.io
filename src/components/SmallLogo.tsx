import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const SmallLogo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const location = useLocation();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Grid data from the original logo
    const grid = [
      [1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
      [1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
      [1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0],
      [1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0],
      [1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0],
      [1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0],
      [1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0],
      [1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0],
      [1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1],
      [1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0],
      [1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0],
      [1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0],
      [1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0],
      [1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
      [1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
      [1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
      [1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
      [1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
      [1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
      [1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
    ];

    const ROWS = grid.length;
    const COLS = grid[0].length;
    const DOT = 1.5; // Ultra small dots
    const GAP = 0.6;
    const CELL = DOT + GAP;
    const PX = 3;
    const PY = 3;
    const CW = PX * 2 + COLS * CELL;
    const CH = PY * 2 + ROWS * CELL;

    canvas.width = CW;
    canvas.height = CH;

    // Add roundRect method if not available
    if (!CanvasRenderingContext2D.prototype.roundRect) {
      CanvasRenderingContext2D.prototype.roundRect = function(x: number, y: number, w: number, h: number, r: number) {
        this.beginPath();
        this.moveTo(x + r, y);
        this.lineTo(x + w - r, y);
        this.quadraticCurveTo(x + w, y, x + w, y + r);
        this.lineTo(x + w, y + h - r);
        this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        this.lineTo(x + r, y + h);
        this.quadraticCurveTo(x, y + h, x, y + h - r);
        this.lineTo(x, y + r);
        this.quadraticCurveTo(x, y, x + r, y);
        this.closePath();
      };
    }

    let dots: any[] = [];
    let raf: number | null = null;
    let t0: number | null = null;

    function build() {
      dots = [];
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          if (!grid[r][c]) continue;
          const tx = PX + c * CELL;
          const ty = PY + r * CELL;
          const ang = Math.random() * Math.PI * 2;
          const d = 50 + Math.random() * 50; // Smaller distance for corner logo
          dots.push({
            tx, ty,
            x: CW / 2 + Math.cos(ang) * d,
            y: CH / 2 + Math.sin(ang) * d,
            delay: (r * 15 + c * 3), // Faster animation
          });
        }
      }
    }

    function easeOutBack(t: number) {
      const c1 = 1.4;
      const c3 = c1 + 1;
      return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    }

    function eio(t: number) {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    function frame(ts: number) {
      if (!t0) t0 = ts;
      const el = ts - t0;
      ctx.clearRect(0, 0, CW, CH);
      let going = false;
      for (const d of dots) {
        const loc = el - d.delay;
        if (loc < 0) { going = true; continue; }
        const mp = Math.min(loc / 300, 1); // Faster animation
        if (mp < 1) going = true;
        const ep = eio(mp);
        const sp = Math.min(loc / 200, 1);
        const sc = Math.max(0, easeOutBack(sp));
        const al = Math.min(loc / 150, 1);
        const cx = d.x + (d.tx - d.x) * ep;
        const cy = d.y + (d.ty - d.y) * ep;
        const r = DOT / 2 * sc;
        ctx.save();
        ctx.globalAlpha = al;
        ctx.fillStyle = '#111';
        ctx.beginPath();
        (ctx as any).roundRect(cx, cy, r * 2, r * 2, r * 0.38);
        ctx.fill();
        ctx.restore();
      }
      if (going) raf = requestAnimationFrame(frame);
    }

    function restart() {
      if (raf) cancelAnimationFrame(raf);
      build();
      t0 = null;
      raf = requestAnimationFrame(frame);
    }

    restart();

    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, [location.pathname]); // Add location.pathname as dependency

  return (
    <div className="fixed top-4 left-4 z-50 flex items-center">
      {location.pathname === '/research' ? (
        <Link to="/" className="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
          <canvas 
            key={`canvas-${location.pathname}`} // Force re-render on route change
            ref={canvasRef}
            style={{ width: '40px', height: '40px' }}
          />
          <div className="text-center ml-2">
            <div className="font-bold text-xs leading-none">HELIOS</div>
            <div className="font-light text-xs leading-none">LAB</div>
          </div>
        </Link>
      ) : (
        <>
          <canvas 
            key={`canvas-${location.pathname}`} // Force re-render on route change
            ref={canvasRef}
            style={{ width: '40px', height: '40px' }}
          />
          <div className="text-center ml-2">
            <div className="font-bold text-xs leading-none">HELIOS</div>
            <div className="font-light text-xs leading-none">LAB</div>
          </div>
        </>
      )}
    </div>
  );
};

export default SmallLogo;
