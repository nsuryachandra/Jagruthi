import React, { useRef, useEffect } from 'react';

const ThreeDHero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    // Mouse coordinates (scaled)
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = ((e.clientX - rect.left) / width) * 2 - 1;
      mouse.targetY = -(((e.clientY - rect.top) / height) * 2 - 1);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // 3D Particles Array representing a Bathukamma (Conical Floral Stack)
    const particles = [];

    // Parametric Flower Layers definitions
    const layers = [
      { height: -45, radius: 95, count: 180, colors: ['#ea580c', '#f97316', '#eab308'] }, // Layer 1 (Bottom): Marigold/Orange
      { height: -30, radius: 82, count: 140, colors: ['#facc15', '#eab308', '#ca8a04'] },  // Layer 2: Chrysanthemum/Yellow
      { height: -15, radius: 68, count: 110, colors: ['#db2777', '#ec4899', '#f43f5e'] },  // Layer 3: Gunugu/Celosia Magenta-Pink
      { height: 0, radius: 54, count: 90, colors: ['#dc2626', '#ef4444', '#f43f5e'] },    // Layer 4: Gulabi/Roses Red
      { height: 15, radius: 40, count: 70, colors: ['#facc15', '#eab308', '#22c55e'] },   // Layer 5: Yellow & Green leaves
      { height: 30, radius: 26, count: 50, colors: ['#ea580c', '#eab308'] },              // Layer 6: Orange/Gold
      { height: 42, radius: 12, count: 25, colors: ['#ca8a04', '#eab308'] }               // Layer 7: Peak base
    ];

    // Generate floral layers
    layers.forEach((layer) => {
      for (let i = 0; i < layer.count; i++) {
        // Distribute in a thick circle ring representing flower petals
        const angle = (i / layer.count) * Math.PI * 2 + Math.random() * 0.15;
        // Radial thickness variation to represent petal length
        const rVariation = (Math.random() * 14 - 7);
        const currentR = Math.max(2, layer.radius + rVariation);
        
        const x = currentR * Math.cos(angle);
        const y = layer.height + (Math.random() * 8 - 4); // Vertical jitter
        const z = currentR * Math.sin(angle);
        
        // Randomly pick a color from the layer palette
        const color = layer.colors[Math.floor(Math.random() * layer.colors.length)];

        particles.push({
          x, y, z,
          color,
          size: 1.2 + Math.random() * 2.8,
          type: 'petal',
          speed: 0.2 + Math.random() * 0.3,
          seed: Math.random() * 100
        });
      }
    });

    // Peak element: The glowing Gummadi Puvvu (Pumpkin flower)
    // Conical spire shape at the top
    for (let i = 0; i < 50; i++) {
      const h = Math.random() * 20;
      const r = (20 - h) * 0.35;
      const angle = Math.random() * Math.PI * 2;
      const x = r * Math.cos(angle);
      const y = 48 + h; // At the very top
      const z = r * Math.sin(angle);

      particles.push({
        x, y, z,
        color: '#facc15', // Glowing bright gold
        size: 1.5 + Math.random() * 2.5,
        type: 'peak',
        glow: true,
        speed: 0.5,
        seed: Math.random() * 100
      });
    }

    // Add elegant floating green/gold leaves around the Bathukamma in a wider radius
    // They will slowly rise and spin like a magical vortex (Gold Dust Trail)
    for (let i = 0; i < 75; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = 80 + Math.random() * 80;
      const heightVal = -60 + Math.random() * 140;
      const x = r * Math.cos(angle);
      const y = heightVal;
      const z = r * Math.sin(angle);

      particles.push({
        x, y, z,
        color: Math.random() > 0.45 ? 'rgba(21, 128, 61, 0.45)' : 'rgba(217, 119, 6, 0.45)', // Floating green leaves / gold dust
        size: 1.0 + Math.random() * 2.0,
        type: 'dust',
        speed: 0.1 + Math.random() * 0.2,
        seed: Math.random() * 100,
        glow: Math.random() > 0.7
      });
    }

    // Camera perspective settings
    const fov = 380;
    let angleY = 0;
    let angleX = 0.22; // Slight downward view to see concentric circles

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Auto-rotation + Mouse influence
      angleY += 0.0035 + mouse.x * 0.01;
      const pitch = angleX + mouse.y * 0.22;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(pitch);
      const sinX = Math.sin(pitch);

      // Center coordinates
      const cx = width / 2;
      const cy = height / 2 - 10;

      // Project particles to 2D
      const projected = particles.map(p => {
        let px = p.x;
        let py = p.y;
        let pz = p.z;

        // Floating dust movement (Magical vortex upward spiral)
        if (p.type === 'dust') {
          const time = Date.now() * 0.0006 * p.speed;
          // Spiral radius fluctuations
          const orbitAngle = angleY * 1.5 + p.seed;
          const currentR = 90 + Math.sin(time * 3 + p.seed) * 30;
          px = currentR * Math.cos(orbitAngle);
          pz = currentR * Math.sin(orbitAngle);
          // Rising movement
          py += Math.sin(time + p.seed) * 12;
        }

        // 3D rotations
        // Rotate around Y axis (yaw)
        let x1 = px * cosY - pz * sinY;
        let z1 = px * sinY + pz * cosY;

        // Rotate around X axis (pitch)
        let y2 = py * cosX - z1 * sinX;
        let z2 = py * sinX + z1 * cosX;

        const depth = z2 + 250;
        const scale = fov / depth;
        const screenX = cx + x1 * scale;
        const screenY = cy - y2 * scale;

        // Dynamic Shimmer effect (slowly pulse particle size)
        const shimmer = 0.85 + Math.sin(Date.now() * 0.003 + p.seed) * 0.15;

        return {
          x: screenX,
          y: screenY,
          size: p.size * scale * 0.65 * shimmer,
          color: p.color,
          depth,
          glow: p.glow
        };
      });

      // Z-Buffer sorting
      projected.sort((a, b) => b.depth - a.depth);

      // Draw projected points
      projected.forEach(p => {
        if (p.x < 0 || p.x > width || p.y < 0 || p.y > height) return;

        if (p.glow) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = '#eab308';
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.1, p.size), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      // Reset shadow
      ctx.shadowBlur = 0;

      // Draw subtle light guide ring below Bathukamma in gold
      ctx.strokeStyle = 'rgba(180, 83, 9, 0.06)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy + 45 * (fov/250) * 0.65 * Math.cos(pitch), 105 * (fov/250) * 0.65, 0, Math.PI * 2);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto">
      <canvas
        ref={canvasRef}
        className="w-full h-full block bg-transparent"
      />
    </div>
  );
};

export default ThreeDHero;
