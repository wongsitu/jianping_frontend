import React, { FC, useRef } from 'react';

import clsx from 'clsx';
import { BodySectionProps } from './types';
import AnimatedImage from '@/src/shared/components/AnimatedImage';
import useIsVisible from '@/src/hooks/useIsVisible';

const BodySection: FC<BodySectionProps> = ({ idx, image, description }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useIsVisible(sectionRef);

  return (
    <div
      className={clsx(
        'flex flex-col-reverse sm:flex-row items-center mb-64 md:mb-120 transition-all duration-700 bg-white hover:shadow-lg last:mb-0',
        idx % 2 === 0 && 'sm:flex-row-reverse',
        isVisible ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-1/4',
      )}
      ref={sectionRef}
    >
      <div className="'w-full sm:w-1/2 p-24 sm:py-0 lg:px-48">
        <p className="font-noto">{description}</p>
      </div>
      <div
        className={clsx(
          'w-full sm:w-1/2',
          idx % 2 === 0 ? 'sm:pr-24 lg:pr-48' : 'sm:pl-24 lg:pl-48',
        )}
      >
        <AnimatedImage {...image} />
      </div>
    </div>
  );
};

export default BodySection;
