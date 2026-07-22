'use client';

import { useEffect, useRef } from 'react';

interface Config {
  spring: number;
  force: number;
  drag: number;
  particle_min_size: number;
  particle_max_size: number;
  particle_count: number;
  color: string;
  radius: number;
}

class Particle {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  driftPhase: number;
  driftRadius: number;
  size: number;

  constructor(w: number, h: number, config: Config) {
    this.baseX = Math.random() * w;
    this.baseY = Math.random() * h;
    this.x = this.baseX;
    this.y = this.baseY;
    this.vx = 0;
    this.vy = 0;
    this.driftPhase = Math.random() * Math.PI * 2;
    this.driftRadius = 8 + Math.random() * 25;
    this.size =
      Math.random() * (config.particle_max_size - config.particle_min_size) +
      config.particle_min_size;
  }

  update(
    w: number,
    h: number,
    mouse: { x: number; y: number; radius: number },
    config: Config
  ) {
    this.driftPhase += 0.004;
    const targetX = this.baseX + Math.cos(this.driftPhase) * this.driftRadius;
    const targetY = this.baseY + Math.sin(this.driftPhase) * this.driftRadius;

    this.vx += (targetX - this.x) * config.spring;
    this.vy += (targetY - this.y) * config.spring;

    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const distSq = dx * dx + dy * dy;

    if (distSq < mouse.radius * mouse.radius) {
      const dist = Math.sqrt(distSq) || 1;
      const nx = dx / dist;
      const ny = dy / dist;
      const force = Math.pow(1 - dist / mouse.radius, 2);

      this.vx += nx * force * config.force;
      this.vy += ny * force * config.force;
    }

    this.vx -= this.vx * config.drag;
    this.vy -= this.vy * config.drag;
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) this.x = w;
    if (this.x > w) this.x = 0;
    if (this.y < 0) this.y = h;
    if (this.y > h) this.y = 0;
  }

  draw(ctx: CanvasRenderingContext2D, config: Config) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    const grad = ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      this.size * 2.5
    );
    grad.addColorStop(0, config.color);
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size * 0.25, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.fill();
  }
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0,
      h = 0;
    let animationFrameId: number;

    const config: Config = {
      spring: 0.015,
      force: 25,
      drag: 0.4,
      particle_min_size: 0.5,
      particle_max_size: 2.8,
      particle_count: 200,
      color: 'rgba(6, 182, 212, 0.8)',
      radius: 220,
    };

    const mouse = { x: -9999, y: -9999, radius: config.radius };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      w = canvas.width = rect.width;
      h = canvas.height = rect.height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseLeave);
    }

    let particles: Particle[] = [];

    const rebuildParticles = () => {
      particles = Array.from(
        { length: config.particle_count },
        () => new Particle(w, h, config)
      );
    };

    const loop = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const alpha = 0.15 * (1 - dist / 150);
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        p.update(w, h, mouse, config);
        p.draw(ctx, config);
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resize();
        rebuildParticles();
      }, 150);
    };

    window.addEventListener('resize', handleResize);

    resize();
    rebuildParticles();
    loop();

    return () => {
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 h-full w-full opacity-70"
      aria-hidden="true"
    />
  );
}
