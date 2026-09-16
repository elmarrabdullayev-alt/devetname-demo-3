import React, { useState } from 'react';
import { EnvelopeVideoIntro } from './components/EnvelopeVideoIntro';
import { InvitationHero } from './components/InvitationHero';
import { InvitationMessage } from './components/InvitationMessage';
import { Countdown } from './components/Countdown';
import { EventProgram } from './components/EventProgram';
import { VenueSection } from './components/VenueSection';
import { DressCode } from './components/DressCode';
import { Gallery } from './components/Gallery';
import { GiftNote } from './components/GiftNote';
import { RsvpSection } from './components/RsvpSection';
import { MusicControl } from './components/MusicControl';
import { invitationData } from './data/invitation';
import './styles/invitation.css';

export default function App() {
  const [introCompleted, setIntroCompleted] = useState<boolean>(false);

  return (
    <div className="relative min-h-[100dvh] w-full bg-[#1A050B] overflow-x-hidden flex justify-center selection:bg-[#C7A56A]/20 selection:text-[#741F3A]">
      {/* 0. Giriş Qapağı və Açılış Animasiyası (Yalnız tamamlanana qədər göstərilir) */}
      {!introCompleted && (
        <EnvelopeVideoIntro onComplete={() => setIntroCompleted(true)} />
      )}

      {/* Əsas Dəvətnamə Səhifəsi - Intro tamamlandıqda göstərilir */}
      {introCompleted && (
        <>
          {/* Ambient desktop backdrop lighting with blurred champagne and burgundy glows */}
          <div
            className="fixed inset-0 pointer-events-none z-0 hidden md:block overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#741F3A]/30 blur-[120px]" />
            <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-[#C7A56A]/20 blur-[130px]" />
            <div className="absolute -bottom-32 left-1/4 w-96 h-96 rounded-full bg-[#741F3A]/25 blur-[120px]" />
          </div>

          {/* Main Invitation Container - Mobile first (max 480px on desktop, centered) */}
          <div className="relative z-10 w-full max-w-[480px] min-h-[100dvh] bg-[#F7F1E7] shadow-2xl flex flex-col border-x border-[#C7A56A]/20">
            {/* 1. Hero Section (min-height 100dvh) */}
            <InvitationHero />

            {/* 2. Dəvət Mətni & Kəpənək Dekorasiyası */}
            <InvitationMessage />

            {/* 3. Canlı Geri Sayım */}
            <Countdown />

            {/* 4. Tədbir Proqramı */}
            <EventProgram />

            {/* 5. Məkan və Ünvan */}
            <VenueSection />

            {/* 6. Dress-Code */}
            <DressCode />

            {/* 7. Fotoqalereya */}
            <Gallery />

            {/* 8. Hədiyyə Qeydi */}
            <GiftNote />

            {/* 9. RSVP (İştirakın Təsdiqi və WhatsApp) */}
            <RsvpSection />

            {/* Closing Monogram Footer */}
            <footer className="py-12 px-6 text-center bg-[#F7F1E7] border-t border-[#C7A56A]/25">
              <div className="w-12 h-12 rounded-full border border-[#C7A56A]/60 mx-auto flex items-center justify-center bg-[#FFF9F0] mb-3 shadow-xs">
                <span className="font-serif-heading text-sm text-[#741F3A] font-semibold tracking-wider">
                  {invitationData.initials}
                </span>
              </div>
              <p className="font-calligraphy text-2xl text-[#741F3A]">
                {invitationData.bride} & {invitationData.groom}
              </p>
              <p className="font-sans-clean text-[10px] tracking-[0.25em] text-[#C7A56A] uppercase mt-2">
                {invitationData.date} • {invitationData.venue}
              </p>
            </footer>

            {/* 10. Musiqi İdarəetmə Düyməsi (Sağ aşağı künc) */}
            <MusicControl />
          </div>
        </>
      )}
    </div>
  );
}
