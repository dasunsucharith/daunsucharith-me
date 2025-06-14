import React, { useState, useEffect, useRef } from 'react';

const Terminal = ({ isVisible, onClose, onAnimationComplete }) => {
  const [content, setContent] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showOkButton, setShowOkButton] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const contentRef = useRef(null);

  const terminalText = `Hello,

I'm Dasun Sucharith, a marketing-tech-driven developer and automation strategist helping brands grow smarter with SEO, web development, and AI-powered marketing systems.

I specialize in creating digital experiences that not only look good—but work brilliantly behind the scenes too.

Get in touch: sucharith.dasun@gmail.com
LinkedIn: linkedin.com/in/dasun-sucharith

Press OK to continue...`;

  const downloadSteps = [
    'Initializing system...',
    'Connecting to server...',
    'Downloading packages... [████████████████████████████████] 100%',
    'Installing dependencies...',
    'Setting up environment...',
    'Configuring security protocols...',
    'Loading user profile...',
    'System ready!'
  ];

  useEffect(() => {
    if (isVisible && !isTyping && !isDownloading) {
      startTyping();
    }
  }, [isVisible]);

  const startTyping = () => {
    setIsTyping(true);
    setCurrentIndex(0);
    setContent('<span class="cursor">|</span>');
    
    setTimeout(() => {
      typeText();
    }, 1000);
  };

  const typeText = () => {
    if (currentIndex >= terminalText.length) {
      makeLinksClickable();
      setIsTyping(false);
      return;
    }
    
    const currentChar = terminalText[currentIndex];
    
    setContent(prevContent => {
      let newContent = prevContent.replace(/<span class="cursor">.*?<\/span>/g, '');
      
      if (currentChar === '\n') {
        newContent += '<br>';
      } else {
        newContent += currentChar;
      }
      
      return newContent + '<span class="cursor">|</span>';
    });
    
    setCurrentIndex(prev => prev + 1);
    
    const delay = currentChar === '\n' ? 200 : Math.random() * 20 + 15;
    
    setTimeout(() => {
      typeText();
    }, delay);
  };

  const makeLinksClickable = () => {
    setContent(prevContent => {
      let newContent = prevContent;
      
      // Make email clickable
      newContent = newContent.replace(
        'sucharith.dasun@gmail.com',
        '<a href="mailto:sucharith.dasun@gmail.com" class="text-cyan-400 underline hover:text-white transition-colors">sucharith.dasun@gmail.com</a>'
      );
      
      // Make LinkedIn clickable
      newContent = newContent.replace(
        'linkedin.com/in/dasun-sucharith',
        '<a href="https://linkedin.com/in/dasun-sucharith" target="_blank" class="text-cyan-400 underline hover:text-white transition-colors">linkedin.com/in/dasun-sucharith</a>'
      );
      
      return newContent;
    });
    
    setShowOkButton(true);
  };

  const startDownloadAnimation = () => {
    setIsDownloading(true);
    setShowOkButton(false);
    setContent('<span class="cursor">|</span>');
    
    let stepIndex = 0;
    
    const animateStep = (currentStepContent = '') => {
      if (stepIndex >= downloadSteps.length) {
        setTimeout(() => {
          setContent(prev => prev + '<br><span class="text-green-400 font-bold">✓ Setup complete! Welcome to the system.</span><span class="cursor">|</span>');
          setTimeout(() => {
            onAnimationComplete();
          }, 1500);
        }, 500);
        return;
      }
      
      const currentStep = downloadSteps[stepIndex];
      
      const typeStep = () => {
        if (currentStepContent.length < currentStep.length) {
          const newChar = currentStep[currentStepContent.length];
          const newStepContent = currentStepContent + newChar;
          
          setContent(() => {
            let newContent = '';
            for (let i = 0; i < stepIndex; i++) {
              newContent += downloadSteps[i] + '<br>';
            }
            newContent += newStepContent + '<span class="cursor">|</span>';
            return newContent;
          });
          
          const delay = Math.random() * 15 + 10;
          setTimeout(() => typeStep(), delay);
        } else {
          stepIndex++;
          const delay = Math.random() * 300 + 200;
          setTimeout(() => animateStep(''), delay);
        }
      };
      
      typeStep();
    };
    
    setTimeout(() => animateStep(), 300);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-20 animate-fade-in">
      <div className="w-[90%] max-w-4xl h-[70%] max-h-[500px] bg-black/95 border-2 border-cyan-400 rounded-lg backdrop-blur-lg shadow-cyan-400/30 shadow-2xl">
        {/* Terminal Header */}
        <div className="flex justify-between items-center p-4 bg-cyan-400/10 border-b border-cyan-400 rounded-t-lg">
          <span className="text-cyan-400 font-mono text-sm font-bold">
            SYSTEM_TERMINAL_v2.0
          </span>
          <div className="flex gap-2">
            <span className="w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center text-black text-xs cursor-pointer hover:scale-110 transition-transform">
              _
            </span>
            <span className="w-3 h-3 bg-green-400 rounded-full flex items-center justify-center text-black text-xs cursor-pointer hover:scale-110 transition-transform">
              □
            </span>
            <span 
              className="w-3 h-3 bg-red-400 rounded-full flex items-center justify-center text-white text-xs cursor-pointer hover:scale-110 transition-transform"
              onClick={onClose}
            >
              ×
            </span>
          </div>
        </div>
        
        {/* Terminal Content */}
        <div className="p-6 h-[calc(100%-60px)] overflow-y-auto font-mono text-sm leading-relaxed text-green-400">
          <div className="mb-2">
            <span className="text-cyan-400 mr-2">root@system:~$</span>
          </div>
          <div 
            ref={contentRef}
            dangerouslySetInnerHTML={{ __html: content }}
            className="whitespace-pre-wrap cursor"
          />
          {showOkButton && (
            <div className="mt-4">
              <button
                onClick={startDownloadAnimation}
                className="bg-transparent border border-cyan-400 text-cyan-400 px-4 py-2 rounded font-mono text-sm cursor-pointer transition-all duration-300 hover:bg-cyan-400/10 hover:shadow-cyan-400/50 hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Press OK to continue...
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Terminal;