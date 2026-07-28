import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

interface TrialBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrialBookingModal: React.FC<TrialBookingModalProps> = ({ isOpen, onClose }) => {
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('Toddlers (18 months - 3 years)');
  const [preferredDate, setPreferredDate] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleOpenWhatsApp = () => {
    // Generate the WhatsApp text based on form input
    const message = `Hello Kindermusik with Agape! 🎵 I would like to book a Free Trial Class.

👨‍👩‍👦 Parent Name: ${parentName}
👶 Child Name: ${childName}
🎂 Child Age: ${childAge}
🎨 Selected Program: ${selectedProgram}
🗓️ Preferred Date: ${preferredDate}

Looking forward to experiencing the joy of music together! 😊`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/60195721205?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Reset and close
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-purple-50 overflow-hidden animate-scale-up">
        {/* Colorful header band */}
        <div className="bg-brand-purple p-6 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
            <span className="text-xs font-bold tracking-wider uppercase text-purple-200">🎵 Music • Movement • Connection</span>
          </div>
          <h2 className="text-2xl font-bold font-display">Book a Free Trial Class</h2>
          <p className="text-purple-100 text-xs mt-1">Let your child experience the joy of learning through music with Ms Clarice and our wonderful team.</p>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Parent's Name</label>
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="e.g. Alicia Lee"
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Child's Name</label>
                  <input
                    type="text"
                    required
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    placeholder="e.g. Lucas"
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Child's Age / Months</label>
                  <input
                    type="text"
                    required
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    placeholder="e.g. 2 years old / 18 months"
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Preferred Program</label>
                  <select
                    value={selectedProgram}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15 transition-all"
                  >
                    <option>Babies (0 - 18 months)</option>
                    <option>Toddlers (18 months - 3 years)</option>
                    <option>Preschoolers (3 - 5 years)</option>
                    <option>Kindy & Beyond (5+ years)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Preferred Date / Time Range</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    placeholder="e.g. Saturday Morning, 10:00 AM"
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15 transition-all"
                  />
                  <Calendar className="absolute left-3 top-2.5 w-4.5 h-4.5 text-slate-400" />
                </div>
                <p className="text-[10px] text-slate-400 mt-1">We will contact you to match this with our weekly session times!</p>
              </div>

              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-all"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 text-sm font-bold text-white bg-brand-purple hover:bg-brand-purple-hover rounded-lg transition-all shadow-md cursor-pointer"
                >
                  Generate Request
                </button>
              </div>
            </form>
          ) : (
            <div className="py-6 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-full text-emerald-500 mb-4 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">Booking Form Ready!</h3>
              <p className="text-sm text-slate-500 mt-2 max-w-xs mx-auto leading-relaxed">
                We have generated a prefilled WhatsApp booking request. Click below to send it to Ms Clarice directly!
              </p>
              
              <div className="mt-6 flex flex-col gap-2">
                <button
                  onClick={handleOpenWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-brand-green hover:bg-brand-green-hover rounded-lg transition-all shadow-lg shadow-brand-green/20 cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 fill-white text-brand-green" />
                  Send via WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="text-xs font-semibold text-slate-400 hover:text-slate-600 py-2 transition-all"
                >
                  Edit details
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
