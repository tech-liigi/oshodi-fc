'use client'
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { rowdies } from "@/fonts";

const VideoMark = ({ url }: { url: string }) => {
    const [duration, setDuration] = useState<string>('');

    useEffect(() => {
        const video = document.createElement('video');
        video.src = url;
        video.addEventListener('loadedmetadata', () => {
            const durationInSeconds = Math.round(video.duration);
            const minutes = Math.floor(durationInSeconds / 60);
            const seconds = durationInSeconds % 60;
            const formattedDuration = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            setDuration(formattedDuration);
        });

        return () => {
            // Clean up
            video.removeEventListener('loadedmetadata', () => {});
        };
    }, [url]);

    return (
        <div className="flex items-center justify-around w-[6%] min-w-[75px] p-0.5 absolute bottom-0 left-0 rounded-tr-[4px] bg-primary">
            <Image src={"/play-small-icon.svg"} alt={'play-icon'} width={30} height={30}/>
            <p className={`text-md pr-1 text-white ${rowdies.className}`}>
                {duration || '...'}
            </p>
        </div>
    );
};

export default VideoMark;
