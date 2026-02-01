import { useState } from 'react';
import emailjs from '@emailjs/browser';

// Beautiful rose petal falling animation
const RosePetal = ({ delay = 0, left = '10%', size = 18 }) => {
  const colors = ['#f9a8d4', '#f472b6', '#ec4899', '#fda4af', '#fb7185'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  return (
    <div
      className="absolute top-0 pointer-events-none"
      style={{
        left,
        animation: `roseFall 8s ease-in infinite`,
        animationDelay: `${delay}s`,
        opacity: 0.7 + Math.random() * 0.3,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" className="drop-shadow-sm">
        {/* Rose petal shape - more organic than ellipse */}
        <path
          d="M12 3C8 1 4 2 3 6c-1 4 1 7 4 9 2 1 3 3 5 3s3-2 5-3c3-2 5-5 4-9-1-4-5-5-9-3z"
          fill={color}
          transform={`rotate(${Math.random() * 360})`}
        />
      </svg>
    </div>
  );
};

const AnimatedFlower = ({ size = 30, color = 'text-pink-400', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={`${color} ${className}`}>
    <g transform="translate(50, 50)">
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <ellipse
          key={i}
          cx="0"
          cy="-20"
          rx="12"
          ry="20"
          fill="currentColor"
          transform={`rotate(${angle})`}
        />
      ))}
      <circle cx="0" cy="0" r="10" fill="#fbbf24" />
    </g>
  </svg>
);

const FlowerBouquet = () => (
  <div className="relative w-64 h-64 mx-auto">
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <g transform="translate(100, 80)">
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const colors = ['#f9a8d4', '#f472b6', '#ec4899', '#f9a8d4', '#f472b6', '#ec4899'];
          return (
            <g key={i} transform={`rotate(${angle})`}>
              <ellipse cx="0" cy="-35" rx="15" ry="25" fill={colors[i]} />
            </g>
          );
        })}
        <circle cx="0" cy="0" r="15" fill="#fbbf24" />
      </g>
      <g transform="translate(60, 100)">
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const colors = ['#fce7f3', '#fbcfe8', '#f9a8d4', '#fce7f3', '#fbcfe8', '#f9a8d4'];
          return (
            <g key={i} transform={`rotate(${angle})`}>
              <ellipse cx="0" cy="-25" rx="10" ry="18" fill={colors[i]} />
            </g>
          );
        })}
        <circle cx="0" cy="0" r="10" fill="#fcd34d" />
      </g>
      <g transform="translate(140, 100)">
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const colors = ['#fecaca', '#fca5a5', '#f87171', '#fecaca', '#fca5a5', '#f87171'];
          return (
            <g key={i} transform={`rotate(${angle})`}>
              <ellipse cx="0" cy="-25" rx="10" ry="18" fill={colors[i]} />
            </g>
          );
        })}
        <circle cx="0" cy="0" r="10" fill="#fbbf24" />
      </g>
      <path d="M85 120 Q100 160 Q115 120" stroke="#22c55e" strokeWidth="4" fill="none" />
      <path d="M90 120 Q95 155 Q100 120" stroke="#16a34a" strokeWidth="3" fill="none" />
      <ellipse cx="70" cy="145" rx="12" ry="8" fill="#22c55e" transform="rotate(-30, 70, 145)" />
      <ellipse cx="130" cy="145" rx="12" ry="8" fill="#22c55e" transform="rotate(30, 130, 145)" />
    </svg>
  </div>
);

// Ultra dense flower field for all screens
const UltraFlowerField = () => {
  // Create a grid of flowers covering the entire screen
  const flowers = [];
  const gridSize = 25; // 25x25 grid = 625 flowers (ULTRA DENSE)
  const cellWidth = 100 / gridSize;
  const cellHeight = 100 / gridSize;
  
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const x = col * cellWidth + Math.random() * cellWidth;
      const y = row * cellHeight + Math.random() * cellHeight;
      const size = 18 + Math.random() * 30;
      const opacity = 0.3 + Math.random() * 0.5;
      const rotation = Math.random() * 360;
      const delay = Math.random() * 2;
      const duration = 3 + Math.random() * 5;
      
      flowers.push(
        <div
          key={`${row}-${col}`}
          className="absolute pointer-events-none"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            opacity,
            animation: `float ${duration}s ease-in-out infinite`,
            animationDelay: `${delay}s`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <svg width={size} height={size} viewBox="0 0 100 100" className="text-pink-300">
            <g transform="translate(50, 50)">
              {[0, 72, 144, 216, 288].map((angle, i) => (
                <ellipse
                  key={i}
                  cx="0"
                  cy="-15"
                  rx="8"
                  ry="12"
                  fill="currentColor"
                  transform={`rotate(${angle})`}
                />
              ))}
              <circle cx="0" cy="0" r="6" fill="#fbbf24" />
            </g>
          </svg>
        </div>
      );
    }
  }
  
  return (
    <>
      {flowers}
      {/* Beautiful falling rose petals - ULTRA DENSE */}
      {[...Array(150)].map((_, i) => (
        <RosePetal key={`petal-${i}`} delay={i * 0.05} left={`${Math.random() * 100}%`} size={12 + Math.random() * 18} />
      ))}
    </>
  );
};

// Common screen wrapper for consistent styling
const ScreenWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
    <UltraFlowerField />
    <div className="text-center space-y-8 z-10 max-w-lg relative">
      {children}
    </div>
  </div>
);

// Common button style
const ContinueButton = ({ onClick, children }: { onClick: () => void, children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className="mt-8 px-10 py-5 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full text-xl font-semibold shadow-2xl shadow-pink-200 hover:shadow-pink-300 ring-1 ring-pink-200/70 transform hover:scale-105 active:scale-95 hover:brightness-105 transition-all duration-300 relative z-20 font-sans tracking-wide"
  >
    {children}
  </button>
);

const Screen1 = ({ onContinue }: { onContinue: () => void }) => (
  <ScreenWrapper>
    <div className="space-y-4">
      <div className="flex justify-center gap-3 mb-4">
        <AnimatedFlower size={45} color="text-pink-400 animate-pulse" />
        <AnimatedFlower size={40} color="text-rose-400 animate-bounce" />
      </div>
      <p className="text-3xl md:text-4xl text-pink-800 leading-relaxed font-medium bg-white/85 backdrop-blur-md rounded-3xl p-8 shadow-xl ring-1 ring-pink-100/70 font-sans tracking-wide">
        Hey Riqza, I hope you're doing well. You might be wondering what this crazy guy is up to now.
      </p>
    </div>
    <ContinueButton onClick={onContinue}>Continue</ContinueButton>
  </ScreenWrapper>
);

const Screen2 = ({ onContinue }: { onContinue: () => void }) => (
  <ScreenWrapper>
    <div className="space-y-4">
      <div className="flex justify-center gap-3 mb-4">
        <AnimatedFlower size={50} color="text-pink-300 animate-pulse" />
        <AnimatedFlower size={45} color="text-rose-300 animate-bounce" />
      </div>
      <p className="text-xl md:text-2xl text-pink-800 leading-relaxed font-medium bg-white/85 backdrop-blur-md rounded-3xl p-8 shadow-xl ring-1 ring-pink-100/70 font-sans tracking-wide">
        I wanted to properly apologize to you. I know I can be a bit of a drama queen or a little fried, but trust me, I'm usually just hungry. Still, I feel like none of that should ever make you question yourself or overthink everything you do, and I'm really sorry about that.
      </p>
    </div>
    <ContinueButton onClick={onContinue}>Continue</ContinueButton>
  </ScreenWrapper>
);

const Screen3 = ({ onContinue }: { onContinue: () => void }) => (
  <ScreenWrapper>
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl text-pink-800 bg-white/85 backdrop-blur-md rounded-3xl p-8 shadow-xl ring-1 ring-pink-100/70 font-display">
        Reasons why you should forgive me:
      </h2>
      
      <div className="space-y-4 text-left bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl ring-1 ring-pink-100/70">
        {[
          "I'm Batman",
          "I'm writing a research paper on curing period cramps",
          "I'm very petite, so whenever we go out to eat, you can have my food as well",
          "I'll get you flowers",
          "I'll send you brain-rot reels",
          "I'll keep you happy always"
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-4 text-pink-700 text-xl">
            <svg width="28" height="28" viewBox="0 0 100 100" className="text-pink-400 flex-shrink-0 mt-1">
              <g transform="translate(50, 50)">
                {[0, 72, 144, 216, 288].map((angle, i) => (
                  <ellipse
                    key={i}
                    cx="0"
                    cy="-18"
                    rx="10"
                    ry="16"
                    fill="currentColor"
                    transform={`rotate(${angle})`}
                  />
                ))}
                <circle cx="0" cy="0" r="8" fill="#fbbf24" />
              </g>
            </svg>
            <span className="font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
    <ContinueButton onClick={onContinue}>Continue</ContinueButton>
  </ScreenWrapper>
);

const Screen4 = ({ onContinue }: { onContinue: () => void }) => (
  <ScreenWrapper>
    <div className="space-y-8">
      <div className="mb-6 relative z-10">
        <FlowerBouquet />
      </div>
      <div className="mx-auto w-52 md:w-60">
        <img
          src="/aiwrwt.jpg"
          alt="Flowers"
          loading="lazy"
          className="w-full rounded-3xl shadow-xl border-2 border-pink-200/70"
        />
      </div>
      <p className="text-xl md:text-2xl text-pink-800 leading-relaxed font-medium bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl ring-1 ring-pink-100/70 font-sans tracking-wide">
        I hope you can forgive me. I got you some flowers (digitally). I hope you like them.
      </p>
    </div>
    <ContinueButton onClick={onContinue}>Continue</ContinueButton>
  </ScreenWrapper>
);

const Screen5 = ({ onContinue }: { onContinue: () => void }) => (
  <ScreenWrapper>
    <div className="space-y-4">
      <div className="flex justify-center gap-3 mb-4">
        <AnimatedFlower size={50} color="text-pink-400 animate-pulse" />
        <AnimatedFlower size={45} color="text-rose-400" />
      </div>
      <p className="text-xl md:text-2xl text-pink-800 leading-relaxed font-medium bg-white/85 backdrop-blur-md rounded-3xl p-8 shadow-xl ring-1 ring-pink-100/70 font-sans tracking-wide">
        I won't ever make you feel like this again. I always want to see you happy, and I hope you can forgive me this time.
      </p>
    </div>
    <ContinueButton onClick={onContinue}>Continue</ContinueButton>
  </ScreenWrapper>
);

const Screen6 = ({
  onYes,
  noClickCount,
  showHelperText,
  handleNoClick,
}: {
  onYes: () => void;
  noClickCount: number;
  showHelperText: boolean;
  handleNoClick: () => void;
}) => {
  // Simple "Pls na" variations that repeat
  const getHelperMessage = () => 'Pls na';

  // Calculate dynamic effects based on click count
  const getNoButtonColor = () => {
    const colors = [
      'from-gray-300 to-gray-400',
      'from-pink-200 to-rose-200',
      'from-pink-300 to-rose-300',
      'from-pink-400 to-rose-400',
      'from-pink-500 to-rose-500',
      'from-pink-600 to-rose-600',
      'from-pink-700 to-rose-700',
      'from-pink-800 to-rose-800',
      'from-pink-900 to-rose-900',
      'from-black to-gray-900',
    ];
    return colors[Math.min(noClickCount, colors.length - 1)];
  };

  const getNoButtonTextColor = () => {
    const colors = [
      'text-gray-700',
      'text-pink-700',
      'text-pink-800',
      'text-pink-900',
      'text-white',
      'text-white',
      'text-white',
      'text-white',
      'text-white',
      'text-white',
    ];
    return colors[Math.min(noClickCount, colors.length - 1)];
  };

  const getNoButtonScale = () => Math.max(0.2, 1 - noClickCount * 0.18);

  const getNoButtonOpacity = () => Math.max(0.35, 1 - noClickCount * 0.18);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <UltraFlowerField />

      <div className="text-center space-y-8 z-10 max-w-lg relative">
        <div className="space-y-4">
          <div className="flex justify-center gap-4 mb-4">
            <AnimatedFlower size={70} color="text-pink-400 animate-pulse" />
            <AnimatedFlower size={65} color="text-rose-400 animate-bounce" />
          </div>
          <p className="text-3xl md:text-4xl text-pink-800 bg-white/85 backdrop-blur-md rounded-3xl p-8 shadow-xl ring-1 ring-pink-100/70 font-display">
            Did you forgive Shahmeer?
          </p>
        </div>

        <div className="relative min-h-[280px] flex flex-col items-center justify-center gap-6">
          {/* Yes button with enhanced effects */}
          <button
            onClick={onYes}
            className="px-14 py-7 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full text-3xl font-bold shadow-2xl shadow-pink-300 hover:shadow-pink-400 transform transition-all duration-500 relative overflow-hidden group"
            style={{
              transform: `scale(${1 + noClickCount * 0.2})`,
              boxShadow:
                noClickCount > 0 ? `0 0 60px rgba(236, 72, 153, ${0.6 + noClickCount * 0.05})` : '',
              animation: noClickCount > 0 ? 'pulse 1.5s infinite' : 'none',
            }}
          >
            <span className="relative z-10 font-sans tracking-wide">Yes</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            {noClickCount > 0 && (
              <>
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full blur-lg animate-pulse"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full blur-xl opacity-40 animate-ping"></div>
              </>
            )}
          </button>

          {/* No button shrinks and disappears after 5 clicks */}
          {noClickCount < 5 && (
            <div className="relative">
              <button
                onClick={handleNoClick}
                className={`px-14 py-7 bg-gradient-to-r rounded-full text-3xl font-bold shadow-2xl transition-all duration-300 relative overflow-hidden group ${getNoButtonColor()} ${getNoButtonTextColor()}`}
                style={{
                  transform: `scale(${getNoButtonScale()})`,
                  opacity: getNoButtonOpacity(),
                  filter: `blur(${noClickCount * 0.3}px) brightness(${1 + noClickCount * 0.2}) drop-shadow(0 0 ${noClickCount * 5}px rgba(251, 191, 36, ${0.3 + noClickCount * 0.1}))`,
                  boxShadow:
                    noClickCount > 1
                      ? `0 0 ${20 + noClickCount * 8}px rgba(251, 191, 36, ${0.5 + noClickCount * 0.1})`
                      : '',
                  animation: noClickCount > 0 ? `shake 0.8s ease-in-out` : 'none',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                <span className="relative z-10 font-sans tracking-wide">No</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>

                {/* Dynamic glow effect */}
                {noClickCount > 0 && (
                  <>
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full blur-lg opacity-60"></div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-yellow-200 to-pink-200 rounded-full blur-xl opacity-40"></div>
                    <div className="absolute -inset-3 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-full blur-2xl opacity-30"></div>
                  </>
                )}

                {/* Escape indicator */}
                {noClickCount > 4 && (
                  <div className="absolute -top-3 -right-3 w-5 h-5 bg-red-500 rounded-full animate-ping"></div>
                )}
              </button>

              {/* Flower counter */}
              {noClickCount > 0 && (
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                  <div className="flex gap-1">
                    {[...Array(Math.min(noClickCount, 6))].map((_, i) => (
                      <svg
                        key={i}
                        width="16"
                        height="16"
                        viewBox="0 0 100 100"
                        className="text-pink-500 animate-bounce"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        <g transform="translate(50, 50)">
                          <ellipse
                            cx="0"
                            cy="-10"
                            rx="8"
                            ry="12"
                            fill="currentColor"
                            transform={`rotate(${i * 60})`}
                          />
                          <circle cx="0" cy="0" r="6" fill="#fbbf24" />
                        </g>
                      </svg>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Enhanced helper text */}
          {showHelperText && (
            <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 z-20">
              <div className="relative">
                <p className="text-pink-600 text-base md:text-lg font-semibold animate-bounce whitespace-nowrap drop-shadow-lg bg-white/90 px-5 py-2 rounded-full border-2 border-pink-300 shadow-xl">
                  {getHelperMessage()}
                </p>
                <div className="absolute -top-3 -left-3 -right-3 -bottom-3 bg-gradient-to-r from-pink-300/50 to-rose-300/50 blur-xl rounded-full"></div>
              </div>
            </div>
          )}

          {/* Directional flowers pointing to Yes button */}
          {noClickCount >= 2 && (
            <>
              <div className="absolute -left-24 top-1/2 transform -translate-y-1/2 animate-pulse">
                <div className="relative">
                  <svg width="60" height="60" viewBox="0 0 100 100" className="text-pink-500">
                    <g transform="translate(50, 50)">
                      {[0, 72, 144, 216, 288].map((angle, i) => (
                        <ellipse
                          key={i}
                          cx="0"
                          cy="-20"
                          rx="10"
                          ry="16"
                          fill="currentColor"
                          transform={`rotate(${angle}) translate(30, 0)`}
                        />
                      ))}
                      <circle cx="30" cy="0" r="9" fill="#fbbf24" />
                      <polygon points="0,-10 0,10 20,0" fill="currentColor" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="absolute -right-24 top-1/2 transform -translate-y-1/2 animate-pulse">
                <div className="relative">
                  <svg width="60" height="60" viewBox="0 0 100 100" className="text-pink-500">
                    <g transform="translate(50, 50)">
                      {[0, 72, 144, 216, 288].map((angle, i) => (
                        <ellipse
                          key={i}
                          cx="0"
                          cy="-20"
                          rx="10"
                          ry="16"
                          fill="currentColor"
                          transform={`rotate(${angle}) translate(-30, 0)`}
                        />
                      ))}
                      <circle cx="-30" cy="0" r="9" fill="#fbbf24" />
                      <polygon points="0,-10 0,10 -20,0" fill="currentColor" />
                    </g>
                  </svg>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

const Screen7 = ({
  onSend,
  isSending,
}: {
  onSend: (message: string) => void;
  isSending: boolean;
}) => {
  const [message, setMessage] = useState('');
  
  return (
    <ScreenWrapper>
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex justify-center gap-3 mb-4">
            <AnimatedFlower size={60} color="text-pink-400 animate-pulse" />
            <AnimatedFlower size={55} color="text-rose-400 animate-bounce" />
          </div>
          <p className="text-3xl md:text-4xl text-pink-800 leading-relaxed bg-white/85 backdrop-blur-md rounded-3xl p-8 shadow-xl ring-1 ring-pink-100/70 font-display">
            You're the best shawrty ever.
          </p>
        </div>
        
        <div className="flex justify-center gap-3 my-8 flex-wrap">
          {[...Array(12)].map((_, i) => (
            <AnimatedFlower 
              key={i} 
              size={28 + (i % 3) * 6} 
              color={i % 3 === 0 ? 'text-pink-400' : i % 3 === 1 ? 'text-rose-400' : 'text-pink-300'} 
            />
          ))}
        </div>
        
        <div className="space-y-6 mt-8">
          <label className="block text-xl text-pink-700 font-medium bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl ring-1 ring-pink-100/70 font-sans tracking-wide">
            Leave a note for shahmeer.
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-40 p-5 bg-white/90 backdrop-blur-sm rounded-3xl border-[3px] border-pink-200 text-pink-800 text-xl placeholder-pink-300 focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 resize-none relative z-10 font-sans tracking-wide leading-relaxed"
            placeholder="Type your message here..."
          />
        </div>
        
        <button
          onClick={() => onSend(message)}
          disabled={!message.trim() || isSending}
          className="w-full px-8 py-5 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full text-xl font-semibold shadow-2xl shadow-pink-200 hover:shadow-pink-300 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative z-20 font-sans tracking-wide"
        >
          {isSending ? 'Sending...' : 'Send'}
        </button>
      </div>
    </ScreenWrapper>
  );
};

const SuccessScreen = ({ onGoHome }: { onGoHome: () => void }) => (
  <ScreenWrapper>
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="flex justify-center gap-4 mb-6">
          <AnimatedFlower size={70} color="text-pink-400 animate-bounce" />
          <AnimatedFlower size={65} color="text-rose-400 animate-pulse" />
        </div>
        <p className="text-2xl md:text-3xl text-pink-600 bg-white/85 backdrop-blur-md rounded-3xl p-8 shadow-xl ring-1 ring-pink-100/70 font-sans tracking-wide">
          Your message has been sent!
        </p>
      </div>
      
      <div className="flex justify-center gap-4 my-10 flex-wrap">
        {[...Array(15)].map((_, i) => (
          <AnimatedFlower 
            key={i} 
            size={30 + (i % 4) * 4} 
            color={i % 3 === 0 ? 'text-pink-400' : i % 3 === 1 ? 'text-rose-400' : 'text-pink-300'} 
          />
        ))}
      </div>
      
      <button
        onClick={onGoHome}
        className="mt-8 px-10 py-5 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full text-xl font-semibold shadow-2xl shadow-pink-200 hover:shadow-pink-300 transform hover:scale-105 transition-all duration-300 relative z-20 font-sans tracking-wide"
      >
        Go Back Home
      </button>
    </div>
  </ScreenWrapper>
);

export function App() {
  const [screen, setScreen] = useState(1);
  const [noClickCount, setNoClickCount] = useState(0);
  const [showHelperText, setShowHelperText] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const renderScreen = () => {
    switch (screen) {
      case 1:
        return <Screen1 onContinue={() => setScreen(2)} />;
      case 2:
        return <Screen2 onContinue={() => setScreen(3)} />;
      case 3:
        return <Screen3 onContinue={() => setScreen(4)} />;
      case 4:
        return <Screen4 onContinue={() => setScreen(5)} />;
      case 5:
        return <Screen5 onContinue={() => setScreen(6)} />;
      case 6:
        return (
          <Screen6
            onYes={() => setScreen(7)}
            noClickCount={noClickCount}
            showHelperText={showHelperText}
            handleNoClick={() => {
              if (noClickCount >= 5) return;
              const newCount = noClickCount + 1;
              setNoClickCount(newCount);
              setShowHelperText(true);

              // Vibrate the screen
              if (typeof navigator !== 'undefined' && navigator.vibrate) {
                navigator.vibrate([100, 50, 100]);
              }

              setTimeout(() => setShowHelperText(false), 2500);
            }}
          />
        );
      case 7:
        return (
          <Screen7
            isSending={isSending}
            onSend={async (message) => {
              const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
              const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
              const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

              if (!serviceId || !templateId || !publicKey) {
                alert('Email service is not configured yet.');
                return;
              }

              try {
                setIsSending(true);
                await emailjs.send(
                  serviceId,
                  templateId,
                  { message },
                  { publicKey }
                );
                localStorage.setItem('apologyMessage', message);
                localStorage.setItem('apologyTimestamp', new Date().toISOString());
                setScreen(8);
              } catch (error) {
                console.error('EmailJS error:', error);
                alert('Could not send the message. Please try again.');
              } finally {
                setIsSending(false);
              }
            }}
          />
        );
      case 8:
        return <SuccessScreen onGoHome={() => {
          setScreen(1);
          setNoClickCount(0);
          setShowHelperText(false);
        }} />;
      default:
        return <Screen1 onContinue={() => setScreen(2)} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50 to-pink-100 transition-all duration-500 font-sans">
      <div className="transition-opacity duration-500">
        {renderScreen()}
      </div>
    </div>
  );
}
