import React, { useState } from 'react';
import { Play, Pause, Volume2, RotateCcw, Maximize, Settings, ExternalLink } from 'lucide-react';

interface MockVideoPlayerProps {
  className?: string;
}

export const MockVideoPlayer: React.FC<MockVideoPlayerProps> = ({ className = "" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [showUrlModal, setShowUrlModal] = useState(false);
  const [inputUrl, setInputUrl] = useState("");

  const handlePlayToggle = () => {
    if (videoUrl) {
      setIsPlaying(!isPlaying);
    } else {
      setShowUrlModal(true);
    }
  };

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      // Simple parser for YouTube embeds
      let formattedUrl = inputUrl.trim();
      if (formattedUrl.includes('youtube.com/watch?v=')) {
        const videoId = formattedUrl.split('v=')[1]?.split('&')[0];
        formattedUrl = `https://www.youtube.com/embed/${videoId}`;
      } else if (formattedUrl.includes('youtu.be/')) {
        const videoId = formattedUrl.split('youtu.be/')[1]?.split('?')[0];
        formattedUrl = `https://www.youtube.com/embed/${videoId}`;
      }
      setVideoUrl(formattedUrl);
      setIsPlaying(true);
    }
    setShowUrlModal(false);
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl border-4 border-white shadow-xl bg-slate-900 aspect-video ${className}`}>
      {videoUrl ? (
        <div className="w-full h-full">
          <iframe
            src={`${videoUrl}?autoplay=${isPlaying ? 1 : 0}`}
            title="Kindermusik Class Video"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        /* Video Poster / Mock UI */
        <div className="absolute inset-0 flex flex-col justify-between p-4 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519340333755-50e33be3137f?auto=format&fit=crop&w=1200&h=675&q=80')` }}>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] hover:bg-black/20 transition-all duration-300" />
          
          <div className="z-10 flex justify-between items-start w-full text-white">
            <span className="px-3 py-1 text-sm font-semibold tracking-wide bg-brand-purple/90 rounded-full">
              See Us In Action
            </span>
            <button 
              onClick={() => setShowUrlModal(true)}
              className="flex gap-1.5 items-center px-3 py-1 text-xs font-medium bg-black/60 hover:bg-black/80 rounded-md border border-white/20 transition-all cursor-pointer"
            >
              <Settings className="w-3.5 h-3.5 animate-spin-slow" />
              Configure Video Link
            </button>
          </div>

          {/* Central Play Button */}
          <button 
            onClick={handlePlayToggle}
            className="z-10 self-center p-5 bg-brand-purple hover:bg-brand-purple-hover hover:scale-115 active:scale-95 text-white rounded-full shadow-lg transition-all duration-300 group cursor-pointer"
          >
            <Play className="w-10 h-10 fill-white translate-x-0.5 group-hover:scale-105 transition-all" />
          </button>

          {/* Bottom Bar Controls (Matching Screenshot Exactly) */}
          <div className="z-10 flex flex-col gap-2 w-full">
            {/* Timeline Progress */}
            <div className="w-full h-1.5 bg-white/30 rounded-full cursor-pointer relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-0 h-full bg-brand-purple group-hover:w-[15%] transition-all duration-500" />
            </div>
            
            {/* Player controls */}
            <div className="flex justify-between items-center text-white text-xs">
              <div className="flex gap-4 items-center">
                <button onClick={handlePlayToggle} className="hover:text-brand-purple transition-all cursor-pointer">
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>
                <button className="hover:text-brand-purple transition-all">
                  <RotateCcw className="w-4 h-4" />
                </button>
                <div className="flex gap-1.5 items-center">
                  <Volume2 className="w-4 h-4" />
                  <div className="w-12 h-1 bg-white/40 rounded-full">
                    <div className="w-3/4 h-full bg-white rounded-full" />
                  </div>
                </div>
                <span className="font-mono opacity-90">0:00 / 1:25</span>
              </div>

              <div className="flex gap-3 items-center">
                <button className="hover:text-brand-purple transition-all">
                  <Settings className="w-4 h-4" />
                </button>
                <button className="hover:text-brand-purple transition-all">
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
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
              You can insert a video address here (YouTube link, Vimeo, or a direct video URL). We will embed it inside the player dynamically.
            </p>
            <form onSubmit={handleSaveUrl} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Video URL
                </label>
                <input
                  type="text"
                  placeholder="e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ"
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
