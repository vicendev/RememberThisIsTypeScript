(() => {

  enum AudioLevel {
    min = 1,
    med,
    max = 10,
  }

  const currentAudio: AudioLevel = AudioLevel.med;
  
  console.log(currentAudio);
  console.log(AudioLevel);

})()