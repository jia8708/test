import React, { useRef, useEffect, useState } from 'react';

interface LazyImgProps {
  src: string;
  alt: string;
}

const LazyImg: React.FC<LazyImgProps> = ({ src, alt }) => {
  const ref = useRef<HTMLImageElement>(null);
  const [imageSrc, setImageSrc] = useState<string>(src);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 对 entry.target 进行类型断言
          const imgElement = entry.target as HTMLImageElement;
          if (entry.isIntersecting && imgElement.src !== imageSrc) {
            setImageSrc(src);
          }
        });
      },
      {
        rootMargin: '50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [src]);

  return (
    <img 
    ref={ref} 
    src={imageSrc} 
    alt={alt} 
    className='custom-image'
    />
  );
 
};

export default LazyImg;
