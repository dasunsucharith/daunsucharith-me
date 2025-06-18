import { useEffect, useRef } from 'react';
import { useRive } from '@rive-app/react-canvas';

export default function RiveHero() {
  const { RiveComponent, rive } = useRive({
    src: '/assets/files/hero_animation.riv',
    autoplay: true,
    stateMachines: 'State Machine 1',
    onLoad: (riveInstance) => {
      // You can access the Rive instance here if needed
      console.log('Rive animation loaded:', riveInstance);
    },
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rive && containerRef.current) {
      const stateMachineInputs = rive.stateMachineInputs('State Machine 1');
      const clickInput = stateMachineInputs.find((input: any) => input.name === 'isClick');

      const handleMouseClick = () => {
        if (clickInput) {
          clickInput.fire();
        }
      };

      const container = containerRef.current;
      container.addEventListener('click', handleMouseClick);

      return () => {
        container.removeEventListener('click', handleMouseClick);
      };
    }
  }, [rive]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full">
      <RiveComponent className="w-full h-full" />
    </div>
  );
}
