import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw, Maximize, Settings } from 'lucide-react';

interface MockVideoPlayerProps {
  className?: string;
}

const DEFAULT_VIDEO_URL = "https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a6b7fa1a4c8a1a2c3d9748f.mp4";

export const MockVideoPlayer: React.FC<MockVideoPlayerProps> = ({ className = "" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoUrl, setVideoUrl] = useState(DEFAULT_VIDEO_URL);
  const [showUrlModal, setShowUrlModal] = useState(false);
  const [inputUrl, setInputUrl] = useState(DEFAULT_VIDEO_URL);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const isDirectVideo = videoUrl.endsWith('.mp4') || videoUrl.includes('.mp4') || videoUrl.includes('filesafe.space');

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      let formattedUrl = inputUrl.trim();
      if (formattedUrl.includes('youtube.com/watch?v=')) {
        const videoId = formattedUrl.split('v=')[1]?.split('&')[0];
        formattedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      } else if (formattedUrl.includes('youtu.be/')) {
        const videoId = formattedUrl.split('youtu.be/')[1]?.split('?')[0];
        formattedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      }
      setVideoUrl(formattedUrl);
      setIsPlaying(true);
    }
    setShowUrlModal(false);
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl border-4 border-white shadow-xl bg-slate-900 aspect-video ${className}`}>
      {isDirectVideo ? (
        <div className="relative w-full h-full group">
          <video
            ref={videoRef}
            src={videoUrl}
            className="w-full h-full object-cover cursor-pointer"
            controls={isPlaying}
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onClick={handlePlayToggle}
          />
          {!isPlaying && (
            <div 
              onClick={handlePlayToggle}
              className="absolute inset-0 flex flex-col justify-between p-4 bg-black/30 backdrop-blur-[1px] hover:bg-black/20 transition-all duration-300 cursor-pointer"
            >
              <div className="z-10 flex justify-between items-start w-full text-white pointer-events-auto">
                <span className="px-3 py-1 text-xs sm:text-sm font-semibold tracking-wide bg-brand-purple/90 rounded-full">
                  See Us In Action
                </span>
              </div>

              {/* Central Play Button */}
              <button 
                onClick={(e) => { e.stopPropagation(); handlePlayToggle(); }}
                className="z-10 self-center p-4 sm:p-5 bg-brand-purple hover:bg-brand-purple-hover hover:scale-110 active:scale-95 text-white rounded-full shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-0.5 group-hover:scale-105 transition-all" />
              </button>

              <div className="z-10 text-white/90 text-xs font-medium text-center pb-2">
                Click to play real classroom video
              </div>
            </div>
          )}
        </div>
      ) : videoUrl ? (
        <div className="w-full h-full">
          <iframe
            src={`${videoUrl}${videoUrl.includes('?') ? '&' : '?'}autoplay=${isPlaying ? 1 : 0}`}
            title="Kindermusik Class Video"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        /* Fallback Mock Poster */
        <div className="absolute inset-0 flex flex-col justify-between p-4 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519340333755-50e33be3137f?auto=format&fit=crop&w=1200&h=675&q=80')` }}>
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] hover:bg-black/20 transition-all duration-300" />
          
          <div className="z-10 flex justify-between items-start w-full text-white">
            <span className="px-3 py-1 text-sm font-semibold tracking-wide bg-brand-purple/90 rounded-full">
              See Us In Action
            </span>
          </div>

          <button 
            onClick={handlePlayToggle}
            className="z-10 self-center p-5 bg-brand-purple hover:bg-brand-purple-hover hover:scale-115 active:scale-95 text-white rounded-full shadow-lg transition-all duration-300 group cursor-pointer"
          >
            <Play className="w-10 h-10 fill-white translate-x-0.5 group-hover:scale-105 transition-all" />
          </button>

          <div className="z-10 flex flex-col gap-2 w-full">
            <div className="w-full h-1.5 bg-white/30 rounded-full cursor-pointer relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-0 h-full bg-brand-purple group-hover:w-[15%] transition-all duration-500" />
            </div>
          </div>
        </div>
      )}

      {/* URL Link Configuration Modal */}
      {showUrlModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 border border-slate-100 animate-scale-up">
            <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
              Add Classroom Video Link
            </h3>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
              Insert a video URL (MP4 video link, YouTube embed, or Vimeo link) to display in the classroom player.
            </p>
            <form onSubmit={handleSaveUrl} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Video URL
                </label>
                <input
                  type="text"
                  placeholder="e.g. https://domain.com/video.mp4 or YouTube link"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all font-sans"
                  required
                />
              </div>
              <div className="flex gap-2.5 justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setShowUrlModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-brand-purple hover:bg-brand-purple-hover rounded-lg transition-all shadow-md cursor-pointer"
                >
                  Save & Play
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
