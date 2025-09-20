import React, { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";
import audio from "../../audio/audio1.mp3";

export default function AudioPlayerGraph({ isplaying, setplaying, onTimeUpdate}) {
  const waveContainerRef = useRef(null);
  const wavesurferRef = useRef(null);

  // Create wavesurfer once
  useEffect(() => {
    if (!waveContainerRef.current) return;

    wavesurferRef.current = WaveSurfer.create({
      container: waveContainerRef.current,
      cursorColor: "transparent",
      waveColor: "#cacacaff",
      progressColor: "#781fedff",
      url: audio,
    });
    wavesurferRef.current.on("audioprocess",()=>{
      onTimeUpdate(wavesurferRef.current.getCurrentTime())
    })
    wavesurferRef.current.on("seek",()=>{
      onTimeUpdate(wavesurferRef.current.getCurrentTime())
    })
    wavesurferRef.current.on("finish",()=>{
      onTimeUpdate(wavesurferRef.current.getCurrentTime())
    })
    wavesurferRef.current.on("click", () => {
      wavesurferRef.current.play();
      setplaying(true);
    });

    return () => {
      wavesurferRef.current && wavesurferRef.current.destroy();
    };
  }, []);

  // React to isplaying prop
  useEffect(() => {
    if (!wavesurferRef.current) return;

    if (isplaying) {
      wavesurferRef.current.play();
      setTimeout(()=>{
        const time = wavesurferRef.current.getCurrentTime()
        console.log(time)
      }, 1000)
    } else {
      wavesurferRef.current.pause();
    }
  }, [isplaying]);
 
  return (
    <div style={{ flex: 2 }}>
      <div ref={waveContainerRef} id="waveform" />
    </div>
  );
}
