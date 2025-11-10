import React, { useEffect, useRef, useState } from 'react';

const GRID_SIZE = 5;
const CELL_SIZE = 80;
const CANVAS_SIZE = GRID_SIZE * CELL_SIZE;
const MARGIN = CELL_SIZE / 2;

const nodes = [
  { id: 'Depot', kind: 'depot', grid: [0, 4] },
  { id: 'C1', kind: 'customer', grid: [2, 4] },
  { id: 'C2', kind: 'customer', grid: [3, 2] },
  { id: 'C3', kind: 'customer', grid: [1, 1] },
  { id: 'Charge', kind: 'station', grid: [4, 0] },
];

const route = ['Depot', 'C1', 'C2', 'Charge', 'C3', 'Depot'];
const batteryLevels = [1, 0.72, 0.38, 0.92, 0.58, 0.24];

function toPixel([col, row]) {
  return [MARGIN + col * CELL_SIZE, MARGIN + row * CELL_SIZE];
}

function drawGrid(ctx) {
  ctx.strokeStyle = '#1f29334d';
  ctx.lineWidth = 1;
  for (let i = 0; i <= GRID_SIZE; i += 1) {
    const offset = MARGIN + (i - 0.5) * CELL_SIZE;
    ctx.beginPath();
    ctx.moveTo(MARGIN - CELL_SIZE / 2, offset);
    ctx.lineTo(MARGIN - CELL_SIZE / 2 + GRID_SIZE * CELL_SIZE, offset);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(offset, MARGIN - CELL_SIZE / 2);
    ctx.lineTo(offset, MARGIN - CELL_SIZE / 2 + GRID_SIZE * CELL_SIZE);
    ctx.stroke();
  }
}

function drawNodes(ctx) {
  nodes.forEach(({ id, kind, grid }) => {
    const [x, y] = toPixel(grid);
    ctx.beginPath();
    ctx.fillStyle =
      kind === 'depot' ? '#2563eb' : kind === 'station' ? '#16a34a' : '#f97316';
    ctx.strokeStyle = '#0f172acc';
    ctx.lineWidth = 2;
    ctx.arc(x, y, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#e2e8f0';
    ctx.font = '14px "Inter", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText(id, x, y + 18);
  });
}

function drawRoute(ctx, step) {
  const coordinates = route.map((id) => {
    const node = nodes.find((n) => n.id === id);
    return node ? toPixel(node.grid) : [0, 0];
  });

  ctx.strokeStyle = '#facc1533';
  ctx.lineWidth = 6;
  ctx.beginPath();
  coordinates.forEach(([x, y], idx) => {
    if (idx === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 4;
  ctx.lineJoin = 'round';
  ctx.beginPath();
  for (let i = 0; i <= step; i += 1) {
    const [x, y] = coordinates[i];
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  const [cx, cy] = coordinates[Math.min(step, coordinates.length - 1)];
  ctx.fillStyle = '#f59e0b';
  ctx.beginPath();
  ctx.arc(cx, cy, 12, 0, Math.PI * 2);
  ctx.fill();

  const soc = batteryLevels[Math.min(step, batteryLevels.length - 1)];
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(CANVAS_SIZE - 140, 24, 100, 18);
  ctx.fillStyle = '#1d4ed8';
  ctx.fillRect(CANVAS_SIZE - 140, 24, 100 * soc, 18);
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(CANVAS_SIZE - 140, 24, 100, 18);
  ctx.fillStyle = '#e2e8f0';
  ctx.font = '12px "Inter", sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText('Battery', CANVAS_SIZE - 140, 18);
}

export function DeliveryRouteAnimation() {
  const canvasRef = useRef(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setStep((prev) => (prev + 1) % route.length);
    }, 1200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    drawGrid(ctx);
    drawRoute(ctx, step);
    drawNodes(ctx);
  }, [step]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className=" rounded-xl border border-slate-700/40 bg-slate-900/70 p-4 shadow-lg shadow-slate-900/40"
    >
      <h2 className="mb-2 text-lg font-semibold text-slate-200">
        Approach Y: Nearest Neighbor
      </h2>
      <canvas
        ref={canvasRef}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        className="h-[360px] w-[500px] rounded-lg bg-slate-900"
      />
      <p className="mt-3 text-sm text-slate-300">
        Vehicle advances to the closest feasible customer, detouring to recharge
        whenever the return leg would exceed the remaining battery.
      </p>
    </div>
  );
}
