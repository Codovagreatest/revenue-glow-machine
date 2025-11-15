import { useEffect, useRef } from 'react';

interface CloudinaryVideoProps {
  cloudName: string;
  publicId: string;
  className?: string;
}

export const CloudinaryVideo = ({ cloudName, publicId, className = '' }: CloudinaryVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Wait for Cloudinary scripts to load
    const initPlayer = () => {
      if (window.cloudinary && videoRef.current) {
        const player = window.cloudinary.videoPlayer(videoRef.current, {
          cloudName,
          publicId,
          controls: false,
          autoplay: true,
          loop: true,
          muted: true,
          fluid: true,
        });
      }
    };

    if (window.cloudinary) {
      initPlayer();
    } else {
      // Wait for script to load
      const checkCloudinary = setInterval(() => {
        if (window.cloudinary) {
          clearInterval(checkCloudinary);
          initPlayer();
        }
      }, 100);

      return () => clearInterval(checkCloudinary);
    }
  }, [cloudName, publicId]);

  return (
    <video
      ref={videoRef}
      className={`cld-video-player ${className}`}
      data-cld-public-id={publicId}
    />
  );
};

// Add type declaration for cloudinary
declare global {
  interface Window {
    cloudinary: any;
  }
}
