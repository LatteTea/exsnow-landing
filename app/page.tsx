import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* 1. Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 md:px-12 md:py-6">
        <div className="font-black text-2xl tracking-tighter uppercase">Ex-Snow</div>
        <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest">
          <a href="#" className="hover:opacity-50 transition-opacity">Work</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Expertise</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Studio</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Contact</a>
        </div>
        <a 
          href="https://chat.whatsapp.com/JzRcZNs1bjzBCS2LuQCjZ6"
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs font-bold uppercase tracking-widest border-2 border-black rounded-full px-5 py-2 hover:bg-black hover:text-white transition-colors cursor-pointer"
        >
          Let's Talk
        </a>
      </nav>

      {/* 2. Hero Section (Massive Typography) */}
      <section className="relative flex flex-col items-center justify-center pt-10 pb-32 overflow-hidden">
        <h1 className="text-[12vw] leading-[0.85] font-black uppercase tracking-tighter z-10">
          Welcome
        </h1>
        
        {/* Placeholder untuk elemen gambar/video di tengah teks */}
        <div className="relative aspect-square w-64 md:w-96 md:h-56 my-[-2rem] z-0 rotate-2 shadow-2xl overflow-hidden rounded-md border-4 border-white">
           <Image
              src="/image/logo-exsnow.png"
              alt="Ex-Snow Community"
              fill
              className="object-cover"
              priority
            />
        </div>
        
        <h1 className="text-[12vw] leading-[0.85] font-black uppercase tracking-tighter z-10">
          To Ex-Snow
        </h1>

        {/* Floating Side Text */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase tracking-widest hidden lg:block w-32 text-left">
          Beyond limits.
        </div>
        <div className="absolute right-10 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase tracking-widest hidden lg:block w-32 text-right">
          Beyond Expetation.
        </div>
      </section>

      {/* 3. Statement Section (Dark Mode) */}
      <section className="bg-black text-white py-32 px-6 md:px-12 flex items-center justify-center text-center">
        <p className="text-2xl md:text-5xl max-w-5xl font-serif leading-tight text-gray-200">
          Selamat datang di rumah baru kita. Exceed bukan sekadar nama, tapi mindset. Komunitas ini dibangun dari nol oleh player-player aktif buat jadi wadah di mana kita bisa main lepas, tryhard bareng, dan nembus limit tanpa ditahan aturan kaku.
            <br/>
            _________________________________
            Welcome to our new home. Exceed isn't just a name, it's a mindset. This community was built from the ground up by active players to be a space where we can play freely, tryhard together, and push past our limits without being held back by rigid rules.
        </p>
      </section>

      {/* 4. Horizontal Media Strip (Colorful Divider) */}
      <section className="relative w-full h-32 md:h-64 bg-black flex items-center justify-center overflow-hidden">
        <video
          src="/image/my.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-full h-full object-cover opacity-60"
        />

        <div className="relative z-10 text-white font-black text-3xl md:text-5xl uppercase tracking-widest animate-pulse">
          Ex-Snow Community
        </div>
      </section>

      {/* 5. Grid Portfolio Gallery */}
      {/* 5. Grid Portfolio Gallery */}
      <section className="grid grid-cols-1 md:grid-cols-3 w-full border-t border-black">
        
        {/* === ROW 1 === */}
        {/* Kotak 1: Teks Tipografi Besar (Tanpa Gambar, Biarkan sebagai penyeimbang) */}
        <div className="aspect-square bg-black flex flex-col items-center justify-center text-white p-8 border-r border-b border-gray-900">
          <span className="text-xl md:text-2xl font-bold uppercase tracking-widest text-gray-400 mb-2">We Are</span>
          <span className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Exceed</span>
        </div>

        {/* Kotak 2: Style "Framed/Card" (Gambar di dalam bingkai melengkung) */}
        <div className="aspect-square bg-[#1a1a1a] p-8 md:p-12 flex items-center justify-center border-r border-b border-gray-900">
          <div className="w-full h-full bg-gray-800 rounded-[2rem] border-8 border-gray-700 shadow-2xl relative overflow-hidden group">
            <Image src="/image/BG_CS_PV4_062.jpg" alt="Kegiatan 1" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            {/* Teks melayang saat di-hover */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold tracking-widest uppercase">Raid Season</span>
            </div>
          </div>
        </div>
        
        {/* Kotak 3: Style "Full Bleed" (Gambar penuh tanpa batas dengan filter grayscale) */}
        <div className="relative aspect-square border-b border-gray-900 overflow-hidden group">
            <Image src="/image/Himari_(Battle).png" alt="Kegiatan 2" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        </div>


        {/* === ROW 2 === */}
        {/* Kotak 4: Style "Duotone/Tinted" (Gambar penuh dengan lapisan warna di atasnya) */}
        <div className="relative aspect-square border-r border-b border-gray-200 overflow-hidden">
          <Image src="/image/Mimori_(Swimsuit).jpg" alt="Kegiatan 3" fill className="object-cover" />
          <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
          <div className="absolute bottom-6 left-6 text-white font-black text-4xl uppercase">EX-Snow</div>
        </div>
        
        {/* Kotak 5: Kotak Warna Solid (Tanpa Gambar, untuk memberi ruang istirahat mata) */}
        <div className="aspect-square bg-[#ff1493] flex items-center justify-center flex-col gap-4 border-r border-b border-pink-600 p-8 text-center">
           <div className="text-white font-black text-3xl uppercase tracking-tighter leading-none">Beyond<br/>Limits.<br/>Beyond<br/>Expetation.</div>
        </div>
        
        {/* Kotak 6: Style "Zoom on Hover" (Gambar penuh standar) */}
        <div className="relative aspect-square border-b border-gray-200 overflow-hidden group">
          <Image src="/image/Mo_CH0274_01.png" alt="Kegiatan 4" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>


        {/* === ROW 3 === */}
        {/* Kotak 7: Teks Inisial Besar dengan Gambar Background Samar */}
        <div className="relative aspect-square bg-black flex items-center justify-center border-r border-gray-900 overflow-hidden">
          <Image src="/image/ba-shiroko.png" alt="Kegiatan 5" fill className="object-cover opacity-30" />
          <span className="relative z-10 text-[20vw] md:text-[12vw] font-black text-white mix-blend-overlay">EX</span>
        </div>
        
        {/* Kotak 8: Style "Polaroid/Matted" (Gambar dengan bingkai putih tebal dan bayangan) */}
        <div className="aspect-square bg-gray-200 flex items-center justify-center p-8 md:p-16 border-r border-gray-300">
           <div className="w-full h-full bg-white p-4 pb-12 shadow-2xl relative flex flex-col justify-between">
              <div className="relative w-full h-full">
                <Image src="/image/logo-exsnow.png" alt="Kegiatan 6" fill className="object-cover" />
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-black font-bold text-sm uppercase tracking-widest">
                 EX-Snow
              </div>
           </div>
        </div>
        
        {/* Kotak 9: Elemen Grafis Abstrak (Biarkan seperti aslinya untuk estetika desain) */}
        <div className="aspect-square bg-black flex flex-col items-center justify-center gap-4 p-12">
            <div className="w-full h-12 bg-gray-700 rounded-lg -skew-x-12 hover:bg-white transition-colors duration-300"></div>
            <div className="w-full h-12 bg-gray-600 rounded-lg -skew-x-12 hover:bg-white transition-colors duration-300"></div>
            <div className="w-full h-12 bg-[#ffccbb] rounded-lg -skew-x-12 hover:bg-[#ff3000] transition-colors duration-300"></div>
        </div>

      </section>

      {/* 6. Pre-Footer / Contact Statement */}
      <section className="py-24 px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end border-b-[16px] border-black">
        <div className="text-xs font-bold uppercase tracking-widest mb-12 md:mb-0">
          <div className="flex gap-4 mb-4">
            <a 
              href="https://chat.whatsapp.com/JzRcZNs1bjzBCS2LuQCjZ6"
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline"
            >Whatsapp
            </a>
            <a 
              href="https://discord.gg/exceednova"
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline"
            >Discord
            </a>
          </div>
          <p className="text-gray-400">© 2026 — All Rights Reserved</p>
        </div>
        <h2 className="text-6xl md:text-[7vw] font-black uppercase tracking-tighter text-right leading-[0.85] max-w-3xl">
          Dedicated and<br />Earnest
        </h2>
      </section>

      {/* 7. Massive Red CTA Footer */}
      <section className="relative text-black pt-20 pb-24 px-4 flex flex-col items-center justify-center text-center overflow-hidden min-h[50vh]">
        {/*Background Element*/}
        <Image
              src="/image/bg-bt.png"
              alt="Ex-Snow Community"
              fill
              className="object-cover absolute inset-0 z-0"
        />

        <div className="absolute inset-0 bg-black/20 z-0">
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-[16vw] leading-[0.75] font-black uppercase tracking-tighter hover:scale-105 transition-transform duration-500 cursor-pointer drop-shadow-lg">
            Join
          </h1>
          <h1 className="text-[16vw] leading-[0.75] font-black uppercase tracking-tighter hover:scale-105 transition-transform duration-500 cursor-pointer drop-shadow-lg">
            Us <br/> Now.
          </h1>
        </div>  
      </section>
    </div>
  );
}