import {
  Box,
  Flex,
  IconButton,
  Image,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaVolumeUp,
} from "react-icons/fa";

interface Track {
  title: string;
  artist: string;
  duration: number;
  artwork: string;
  url: string;
}

interface MusicPlayerProps {
  tracks?: Track[];
}

export default function MusicPlayer({ tracks = [] }: MusicPlayerProps) {
  const toast = useToast();
  const audioRef = useRef<HTMLAudioElement>(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(1);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [lastVolume, setLastVolume] = useState(0.5);

  const defaultTracks: Track[] = tracks;

  const playlist = tracks.length > 0 ? tracks : defaultTracks;

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = playlist[currentTrackIndex].url;
    audio.volume = volume;
    console.log(audioRef.current.duration);

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleNextTrack);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleNextTrack);
    };
  }, [currentTrackIndex]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        toast({
          title: "Erro de reprodução",
          description: "Não foi possível reproduzir a música",
          status: "error",
        });
      });
    }
    setIsPlaying(!isPlaying);
  };

  const updateProgress = () => {
    const progress =
      (audioRef.current.currentTime / audioRef.current.duration) * 100 || 0;
    setProgress(progress);
  };

  const handleVolumeChange = (value: number) => {
    setVolume(value / 100);
    audioRef.current.volume = value / 100;
  };

  const handleProgressChange = (value: number) => {
    const time = (value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = time;
  };

  const handleNextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const handlePreviousTrack = () => {
    setCurrentTrackIndex(
      (prev) => (prev - 1 + playlist.length) % playlist.length
    );
    setIsPlaying(true);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <Box
      color="white"
      bg={"spotify.black"}
      paddingX={4}
      paddingY={2}
      boxShadow="dark-lg"
    >
      <Flex align="center" justify="space-between">
        <Flex align="center" gap={4} flex="1">
          <Image
            src={`${playlist[currentTrackIndex].artwork}`}
            boxSize="60px"
            bgSize="cover"
            borderRadius="md"
            display={{ base: "none", md: "block" }}
          />
          <Box>
            <Text fontWeight="bold">{playlist[currentTrackIndex].title}</Text>
            <Text fontSize="sm" color="gray.400">
              {playlist[currentTrackIndex].artist}
            </Text>
          </Box>
        </Flex>

        <Flex
          gap={2}
          align="center"
          flex="1"
          justify="center"
          direction={"column"}
        >
          <Flex align="center" gap={4} flex="1" justify="center">
            <IconButton
              aria-label="Previous"
              icon={<FaStepBackward />}
              variant="ghost"
              onClick={handlePreviousTrack}
            />
            <IconButton
              aria-label={isPlaying ? "Pause" : "Play"}
              icon={isPlaying ? <FaPause /> : <FaPlay />}
              fontSize={{ sm: "15px", md: "24px" }}
              colorScheme="green"
              rounded="full"
              onClick={togglePlay}
            />
            <IconButton
              aria-label="Next"
              icon={<FaStepForward />}
              variant="ghost"
              onClick={handleNextTrack}
            />
          </Flex>
          <Flex w={"100%"} gap={4}>
            <Text fontSize="sm">
              {formatTime(audioRef.current.currentTime)}
            </Text>
            <Slider
              aria-label="progress"
              value={progress}
              min={0}
              max={100}
              colorScheme="green"
              mb={4}
              onChange={handleProgressChange}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">
              {isNaN(audioRef.current.duration)
                ? "00:00"
                : formatTime(audioRef.current.duration)}
            </Text>
          </Flex>
        </Flex>

        <Flex align="center" gap={2} flex="1" justify="flex-end">
          <Box position="relative">
            <FaVolumeUp
              cursor="pointer"
              onClick={() => {
                if (volume > 0) {
                  setLastVolume(volume);
                  setVolume(0);
                } else {
                  setVolume(lastVolume);
                }
              }}
            />

            {volume === 0 && (
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%) rotate(-45deg)"
                width="20px"
                height="2px"
                bg="red.500"
              />
            )}
          </Box>

          <Slider
            aria-label="volume"
            value={volume * 100}
            min={0}
            max={100}
            width={{ base: "80px", md: "100px" }}
            onChange={handleVolumeChange}
            display={{ base: "none", md: "block" }}
            className="volume-slider"
            opacity={{ base: 0, md: 1 }}
            _hover={{ opacity: 1 }}
            transition="opacity 0.2s ease-in-out"
          >
            <SliderTrack bg="gray.600">
              <SliderFilledTrack bg="green.500" />
            </SliderTrack>
            <SliderThumb boxSize={3} />
          </Slider>
        </Flex>
      </Flex>

      <audio ref={audioRef} />
    </Box>
  );
}
