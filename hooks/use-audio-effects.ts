"use client";

let playing = false;

export const useAudioEffects = () => {
  const playAudio = (url: string) => {
    //if (playing) return;

    // Create a new audio element
    const audio = document.createElement("audio");
    audio.src = url;
    audio.preload = "auto"; // Preload audio data

    // Append audio element to the body or any other container
    document.body.appendChild(audio);
    audio.volume = 0.3;

    // Play the audio
    audio.play();
    playing = true;

    // Remove the audio element from the DOM when playback ends
    audio.addEventListener("ended", function () {
      document.body.removeChild(audio);
      playing = false;
    });
  };

  return { playAudio };
};
