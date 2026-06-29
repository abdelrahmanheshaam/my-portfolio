
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Mail, Download, Globe, Terminal, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(22, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0xE11D48,
      wireframe: true,
      transparent: true,
      opacity: 0.03
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const particlesCount = 400;
    const pGeometry = new THREE.BufferGeometry();
    const pPos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 150;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 150;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    pGeometry.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMaterial = new THREE.PointsMaterial({ color: 0xE11D48, size: 0.06, transparent: true, opacity: 0.15 });
    const points = new THREE.Points(pGeometry, pMaterial);
    scene.add(points);

    camera.position.z = 55;

    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      mesh.rotation.x += 0.0002;
      mesh.rotation.y += 0.0004;
      points.rotation.y -= 0.0001;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frame);
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section id='home' className="relative h-[100dvh] w-full flex flex-col items-center overflow-hidden bg-[#020203] px-4 md:px-6">
      {/* Dynamic Backgrounds */}
      <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none opacity-40"></div>
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)', backgroundSize: '100px 100px', transform: 'perspective(1000px) rotateX(75deg) translateY(300px)' }}></div>

      {/* HUD Header */}
      <header className="relative z-50 w-full max-w-7xl flex justify-between items-start pt-20 lg:pt-28 pointer-events-none opacity-40 shrink-0">
        <div className="flex flex-col gap-1.5 font-mono text-[8px] lg:text-[9px] uppercase tracking-[0.4em] text-slate-500">
          <div className="flex items-center gap-2"><Terminal size={10} className="text-[#E11D48]" /> NODE_HESHAM_V2.0</div>
          <div className="h-0.5 w-10 bg-[#E11D48]"></div>
        </div>
        <div className="flex flex-col items-end gap-1.5 font-mono text-[8px] lg:text-[9px] uppercase tracking-[0.4em] text-slate-500">
          <div className="flex items-center gap-2 text-white"><Globe size={10} className="text-[#E11D48]" /> STATUS: OPTIMAL</div>
          <div className="flex items-center gap-2">RECORDS: 2024_FW</div>
        </div>
      </header>

      {/* Main Two-Column Identity Stack */}
      <div className="relative z-10 w-full max-w-7xl flex-1 flex flex-col lg:grid lg:grid-cols-2 items-center justify-center gap-8 lg:gap-16 min-h-0 py-10 lg:py-0">

        {/* Column 1: Digital Architect Portrait */}
        <div className="flex justify-center items-center w-full order-1">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-[420px] lg:h-[420px] xl:w-[500px] xl:h-[500px] transition-transform duration-700 hover:scale-[1.02]">
            <div className="relative w-full h-full overflow-hidden border border-white/5 shadow-[0_0_60px_rgba(225,29,72,0.1)]">
              <img
                src="/assets/profile-pic.png"
                className="w-full h-full object-cover brightness-[0.9] hover:brightness-100 transition-all duration-1000"
                alt="Digital Architect Portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020203]/60 via-transparent to-transparent"></div>
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#E11D48]/10 to-transparent mix-blend-color-dodge"></div>
            </div>

            {/* Design Accents */}
            <div className="absolute -top-3 -left-3 lg:-top-4 lg:-left-4 w-8 h-8 lg:w-12 lg:h-12 border-t border-l border-[#E11D48]/40"></div>
            <div className="absolute -bottom-3 -right-3 lg:-bottom-4 lg:-right-4 w-8 h-8 lg:w-12 lg:h-12 border-b border-r border-[#E11D48]/40"></div>
          </div>
        </div>

        {/* Column 2: Name & Role Info */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 space-y-6 lg:space-y-10">
          <div className="space-y-2 lg:space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white tracking-tighter uppercase leading-none">
              ABDELRAHMAN <br />
              <span className="text-glow text-[#E11D48]">HESHAM</span>
            </h1>

            <div className="space-y-2">
              <h2 className="text-2xl lg:text-4xl font-mono font-bold text-white tracking-tight">
                &lt;Front-End Developer/&gt;
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm lg:text-lg font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                Specializing in bridging the gap between complex UI/UX designs and high-performance applications through immersive digital experiences.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4 w-full sm:w-auto">
            <a
              href="mailto:abdelrahmanhesham507@gmail.com"
              className="group relative w-full sm:w-52 lg:w-60 px-6 py-4 lg:py-5 bg-[#E11D48] text-white font-bold font-mono text-[9px] lg:text-[10px] tracking-[0.3em] uppercase transition-all duration-300 hover:shadow-[0_0_50px_rgba(225,29,72,0.4)] flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Initiate <Mail size={16} />
              </span>
              <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </a>

            <a
              href="/Abdelrahman_CV.pdf"
              download="Abdelrahman_Hesham_CV.pdf"
              className="group w-full sm:w-52 lg:w-60 px-6 py-4 lg:py-5 border border-white/10 text-white font-bold font-mono text-[9px] lg:text-[10px] tracking-[0.3em] uppercase hover:border-[#E11D48] hover:bg-white/[0.02] transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              Resume <Download size={16} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-3 text-xs font-mono uppercase tracking-[0.5em] text-slate-500">
            <span className="h-px w-8 bg-white/10"></span>
            Unified Digital Identity
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden lg:block">
        <ArrowDown size={18} />
      </div>

      <style>{`
        .text-glow {
          text-shadow: 0 0 30px rgba(225, 29, 72, 0.4);
        }
        @media (max-width: 1024px) {
          h1 { font-size: clamp(2rem, 10vw, 4.5rem); }
        }
        @media (max-height: 800px) {
           header { padding-top: 1.5rem; }
           .gap-16 { gap: 1.5rem; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
