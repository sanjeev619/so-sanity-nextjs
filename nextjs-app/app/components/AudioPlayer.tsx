import React, { useState, useEffect, useRef, useCallback } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { client } from '@/sanity/lib/client';
import PlayIcon from '../icons/play-icon';
import { Box, Flex } from '@chakra-ui/react';

const fetchAudioUrl = async (ref: string): Promise<string> => {
  const url = getAudioUrl(ref);
  return url;
};

function getAudioUrl(ref: string): string {
  const [, id, extension] = ref.match(/file-([a-f0-9]+)-(.+)/) || [];
  return `https://cdn.sanity.io/files/${client.config().projectId}/${client.config().dataset}/${id}.${extension}`;
}

const AudioPlayer = ({ audioRef, primaryColor = "#f76565"  }: { audioRef: string, primaryColor: string}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const waveSurferRef = useRef<WaveSurfer | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const initializeWaveSurfer = useCallback(async () => {
    if (!audioRef || waveSurferRef.current) return;
    try {
      const url = await fetchAudioUrl(audioRef);
      const response = await fetch(url);
      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);

      waveSurferRef.current = WaveSurfer.create({
        container: containerRef.current!,
        waveColor: '#ddd',
        progressColor: primaryColor,
        cursorColor: 'none',
        barWidth: 2,
        height: 80,
        url: audioUrl
      });

      waveSurferRef.current.on('ready', () => {
        setDuration(waveSurferRef.current!.getDuration());
      });

      waveSurferRef.current.on('audioprocess', () => {
        setCurrentTime(waveSurferRef.current!.getCurrentTime());
      });

      waveSurferRef.current.on('finish', () => {
        setIsPlaying(false);
        waveSurferRef.current!.seekTo(0);
      });
    } catch (error) {
      console.error('Error loading audio:', error);
    }
  }, [audioRef]);

  useEffect(() => {
    initializeWaveSurfer();
    return () => {
      if (waveSurferRef.current) {
        waveSurferRef.current.destroy();
        waveSurferRef.current = null;
      }
    };
  }, [initializeWaveSurfer]);

  const togglePlay = () => {
    if (waveSurferRef.current) {
      waveSurferRef.current.playPause();
      setIsPlaying((prev) => !prev);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <Box w={'100%'} mt={'10px'} bg={'white'} borderRadius={'16px'} boxShadow={'0 4px 12px #0000001a'}>
      <Flex flexDir={'row'} alignContent={'center'}>
        <Flex flexDir={'column'} w={'20%'} alignItems={'center'} justifyContent={'center'}>
            <button onClick={togglePlay}>
                {isPlaying ? <PlayIcon/> : <PlayIcon/>}
            </button>
            <div>
                {formatTime(currentTime)} / {formatTime(duration)}
            </div>
        </Flex>
        <Box w={'70%'} overflow={'hidden'} ref={containerRef}/>
      </Flex>
    </Box>
  )
};

export default AudioPlayer;
