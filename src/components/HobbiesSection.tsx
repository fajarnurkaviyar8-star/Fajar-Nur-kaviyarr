import { Activity, Cpu, TrendingUp } from 'lucide-react';
import { hobbiesData } from '../data/portfolioData';

export function HobbiesSection() {
  const getHobbyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-6 h-6 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#FF5252]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      default:
        return <Activity className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="hobbies" className="py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FF5252] block mb-2">
            Aktivitas & Ketertarikan
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Minat & Hobi Personal
          </h2>
          <p className="text-sm sm:text-base text-white/60 mt-3 leading-relaxed">
            Keseimbangan antara kebugaran fisik, eksplorasi dunia rekayasa perangkat lunak, dan literasi finansial sebagai sarana pertumbuhan diri berkelanjutan.
          </p>
        </div>

        {/* 3 Columns Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hobbiesData.map((hobby, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl bg-[#0F1118] border border-white/5 hover:border-white/15 transition-all duration-300 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getHobbyIcon(hobby.iconName)}
                  </div>
                  <span className="text-xs text-white/40 font-medium">
                    {hobby.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#FF5252] transition-colors">
                    {hobby.title}
                  </h3>
                  <p className="text-xs text-cyan-400 font-medium mt-0.5">
                    {hobby.subtitle}
                  </p>
                </div>

                <p className="text-sm text-white/70 leading-relaxed">
                  {hobby.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/40">
                <span>Pengembangan Diri</span>
                <span>&bull;</span>
                <span>Aktivitas Positif</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
