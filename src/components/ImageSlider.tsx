"use client";
import { cn } from "@/utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { kanit_bold } from "@/fonts";
import Link from "next/link"
export const ImagesSlider = ({
                                 images,

                                 children,
                                 overlay = true,
                                 overlayClassName,
                                 className,
                                 autoplay = true,
                                 direction = "up",
                             }: {
    images: string[];
    children: React.ReactNode;
    overlay?: React.ReactNode;
    overlayClassName?: string;
    className?: string;
    autoplay?: boolean;
    direction?: "up" | "down";
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [loadedImages, setLoadedImages] = useState<string[]>([]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        loadImages();
    }, []);

    const loadImages = () => {
        setLoading(true);
        const loadPromises = images.map((image) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = image;
                img.onload = () => resolve(image);
                img.onerror = reject;
            });
        });

        Promise.all(loadPromises)
            .then((loadedImages) => {
                setLoadedImages(loadedImages as string[]);
                setLoading(false);
            })
            .catch((error) => console.error("Failed to load images", error));
    };
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowRight") {
                handleNext();
            } else if (event.key === "ArrowLeft") {
                handlePrevious();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        // autoplay
        let interval: any;
        if (autoplay) {
            interval = setInterval(() => {
                handleNext();
            }, 10000);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            clearInterval(interval);
        };
    }, []);

    const slideVariants = {
        initial: {
            scale: 0,
            opacity: 0,
            rotateX: 45,
        },
        visible: {
            scale: 1,
            rotateX: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.645, 0.045, 0.355, 1.0],
            },
        },
        upExit: {
            opacity: 1,
            y: "-150%",
            transition: {
                duration: 1,
            },
        },
        downExit: {
            opacity: 1,
            y: "150%",
            transition: {
                duration: 1,
            },
        },
    };

    const areImagesLoaded = loadedImages.length > 0;

    return (
        <div
            className={cn(
                "overflow-hidden h-full w-full relative flex items-center justify-center",
                className
            )}
            style={{
                perspective: "1000px",
            }}
        >
            {areImagesLoaded && children}
            {areImagesLoaded && overlay && (
                <div
                    className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
                />
            )}

            {areImagesLoaded && (
                <AnimatePresence>
                    <motion.img
                        key={currentIndex}
                        src={loadedImages[currentIndex]}
                        initial="initial"
                        animate="visible"
                        exit={direction === "up" ? "upExit" : "downExit"}
                        variants={slideVariants}
                        className="image h-full w-full absolute inset-0 object-cover object-center"
                    />
                </AnimatePresence>
            )}
        </div>
    );
};
export const ImageSlider = ({images, cta, general}:{images:Array<string>, cta:any, general:any})=>{
    return (
        <ImagesSlider className="h-[80vh]" images={images}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
            >
                <motion.p className={`${kanit_bold.className} font-bold text-5xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4`}>
                    The official <span className="text-primary">{general.title}</span> <br /> football club website
                </motion.p>
                <Link href={cta.link}>
                <button className="px-4 py-2 backdrop-blur-sm text-md border bg-white/10 border-primary text-white mx-auto text-center rounded-full relative mt-4">
                   <span>{cta?.title} →</span>
                    <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary to-transparent" />
                </button>
                    </Link>
            </motion.div>
        </ImagesSlider>
    )
}