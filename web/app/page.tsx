"use client";

import { useState } from "react";
import { invitation } from "@/data/silvia-karlos-20th";

import InvitationLoader from "@/components/invitation/InvitationLoader";
import MusicController from "@/components/invitation/MusicController";
import DecorativeLayer from "@/components/invitation/DecorativeLayer";
import ScrollStory from "@/components/invitation/ScrollStory";
import HeroScene from "@/components/invitation/HeroScene";
import EventIntroduction from "@/components/invitation/EventIntroduction";
import Countdown from "@/components/invitation/Countdown";
import Timeline from "@/components/invitation/Timeline";
import LocationSection from "@/components/invitation/LocationSection";
import DressCode from "@/components/invitation/DressCode";
import Gallery from "@/components/invitation/Gallery";
import RSVPSection from "@/components/invitation/RSVPSection";
import FinalScene from "@/components/invitation/FinalScene";

export default function InvitationPage() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <main className="min-h-screen-dvh bg-background text-text font-sans selection:bg-primary/30 selection:text-primary relative overflow-hidden">
      <InvitationLoader onOpen={() => setIsOpened(true)} />
      
      {isOpened && (
        <>
          <MusicController isPlaying={true} />
          <DecorativeLayer />
          
          <ScrollStory>
            <HeroScene names={invitation.event.names} date={invitation.event.date} />
            <EventIntroduction />
            <Countdown targetDate={`${invitation.event.date}T${invitation.event.time}:00`} />
            <Timeline />
            <Gallery />
            <LocationSection 
              name={invitation.venue.name} 
              address={invitation.venue.address} 
              mapsUrl={invitation.venue.mapsUrl} 
            />
            <DressCode />
            <RSVPSection whatsapp={invitation.contact.whatsapp} />
            <FinalScene />
          </ScrollStory>
        </>
      )}
    </main>
  );
}
