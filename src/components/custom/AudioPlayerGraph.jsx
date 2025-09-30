import React, { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

export default function AudioPlayerGraph({ audio, isplaying, setplaying, onTimeUpdate }) {
  const waveContainerRef = useRef(null);
  const wavesurferRef = useRef(null);

  // Recreate wavesurfer when audio changes
  useEffect(() => {
    if (!waveContainerRef.current || !audio) return;

    // Clean up previous instance
    if (wavesurferRef.current) {
      wavesurferRef.current.destroy();
      wavesurferRef.current = null;
    }

    // Create new instance
    wavesurferRef.current = WaveSurfer.create({
      container: waveContainerRef.current,
      cursorColor: "transparent",
      waveColor: "#cacacaff",
      height:30,
      progressColor: "#781fedff",
      url: audio,
    });

    wavesurferRef.current.on("audioprocess", () => {
      onTimeUpdate(wavesurferRef.current.getCurrentTime());
    });
    wavesurferRef.current.on("seek", () => {
      onTimeUpdate(wavesurferRef.current.getCurrentTime());
    });
    wavesurferRef.current.on("finish", () => {
      onTimeUpdate(wavesurferRef.current.getCurrentTime());
      setplaying(false); // auto stop when finished
    });

    return () => {
      if (wavesurferRef.current) {
        wavesurferRef.current.destroy();
        wavesurferRef.current = null;
      }
    };
  }, [audio]); // <--- watch audio changes

  // React to play/pause state
  useEffect(() => {
    if (!wavesurferRef.current) return;

    if (isplaying) {
      wavesurferRef.current.play();
    } else {
      wavesurferRef.current.pause();
    }
  }, [isplaying]);

  return (
    <div style={{ flex: 2, minWidth: 10 }}>
      <div ref={waveContainerRef} id="waveform" />
    </div>
  );
}
