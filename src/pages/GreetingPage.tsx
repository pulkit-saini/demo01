import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import Snowfall from "@/components/Snowfall";

const GreetingPage = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Warm gradient background */}
      <div 
        className="absolute inset-0 -z-20"
        style={{ 
          background: "linear-gradient(135deg, hsl(0 40% 12%) 0%, hsl(350 50% 8%) 50%, hsl(220 30% 8%) 100%)" 
        }}
      />
      
      {/* Soft glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10" />
      
      {/* Snowfall effect */}
      <Snowfall />

      {/* Greeting Card */}
      <div className="relative max-w-lg w-full text-center z-20">
        {/* Floating hearts decoration */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-3">
          <Heart className="w-6 h-6 text-primary fill-primary animate-float opacity-80" />
          <Heart className="w-8 h-8 text-primary fill-primary animate-float" style={{ animationDelay: "0.5s" }} />
          <Heart className="w-6 h-6 text-primary fill-primary animate-float opacity-80" style={{ animationDelay: "1s" }} />
        </div>

        {/* Main card */}
        <div 
          className="relative p-8 md:p-10 rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(145deg, hsl(0 0% 100% / 0.08), hsl(0 0% 100% / 0.02))",
            backdropFilter: "blur(20px)",
            border: "1px solid hsl(0 0% 100% / 0.1)",
            boxShadow: "0 25px 80px rgba(0,0,0,0.4), inset 0 1px 0 hsl(0 0% 100% / 0.1)"
          }}
        >
          {/* Top Christmas tree */}
          <div className="text-5xl mb-4 animate-float">🎄</div>

          {/* Main greeting */}
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3 animate-fade-up leading-tight">
            Merry Christmas
          </h1>
          
          <p className="text-accent text-lg md:text-xl font-display italic mb-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            & Happy New Year!
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-6 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-accent/50" />
            <span className="text-xl">✨</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-accent/50" />
          </div>

          {/* Heart-touching message */}
          <div className="space-y-4 animate-fade-up" style={{ animationDelay: "0.35s" }}>
            
            <p className="font-body text-muted-foreground leading-relaxed px-2">
              May this Christmas bring you endless moments of joy, 
              warmth wrapped in love, and memories that last forever. 
              
            </p>
          </div>

          {/* Cute emoji row */}
          <div className="flex justify-center gap-2 mt-6 text-2xl animate-fade-up" style={{ animationDelay: "0.45s" }}>
            <span className="animate-float">🎁</span>
            <span className="animate-float" style={{ animationDelay: "0.3s" }}>🦌</span>
            <span className="animate-float" style={{ animationDelay: "0.6s" }}>❄️</span>
            <span className="animate-float" style={{ animationDelay: "0.9s" }}>🎅</span>
            <span className="animate-float" style={{ animationDelay: "1.2s" }}>🎁</span>
          </div>

          {/* Warm closing */}
          
          {/* Corner decorations inside card */}
          <div className="absolute top-3 left-3 text-lg opacity-40">❄️</div>
          <div className="absolute top-3 right-3 text-lg opacity-40">❄️</div>
          <div className="absolute bottom-3 left-3 text-lg opacity-40">🌟</div>
          <div className="absolute bottom-3 right-3 text-lg opacity-40">🌟</div>
        </div>

        {/* Bottom hearts */}
        <div className="flex justify-center gap-1 mt-6 animate-fade-up" style={{ animationDelay: "0.65s" }}>
          {[...Array(5)].map((_, i) => (
            <Heart 
              key={i} 
              className="w-4 h-4 text-primary/60 fill-primary/60" 
              style={{ 
                animationDelay: `${i * 0.2}s`,
                opacity: i === 2 ? 1 : 0.6,
                transform: `scale(${i === 2 ? 1.2 : 1})`
              }} 
            />
          ))}
        </div>
      </div>

      {/* Back button */}
      <button
        onClick={() => navigate("/")}
        className="btn-secondary-christmas flex items-center gap-2 mt-10 z-20 group animate-fade-up"
        style={{ animationDelay: "0.75s" }}
      >
        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
        <span>Back to Videos</span>
      </button>

      {/* Ambient corner decorations */}
      <div className="absolute bottom-8 right-8 text-4xl opacity-20 animate-float z-0">🎅</div>
      <div className="absolute top-8 left-8 text-3xl opacity-20 animate-float z-0" style={{ animationDelay: "1.5s" }}>⛄</div>
    </main>
  );
};

export default GreetingPage;
