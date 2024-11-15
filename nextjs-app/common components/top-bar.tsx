"use client";
import { FC, useState, useEffect, useRef } from 'react';
import SideBar from '../app/icons/side-bar';
import { Flex } from '@chakra-ui/react';
import TopBarIcon from '@/app/icons/top-bar';

export type TopBarProps = {
    color: string;
    width?: number;
};

export const TopBar: FC<TopBarProps> = ({ color = "#000000", width=15 }) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [parentWidth, setParentWidth] = useState(0);

    useEffect(() => {
        const updateParentHeight = () => {
            if (elementRef.current?.parentElement) {
                setParentWidth(elementRef.current.parentElement.offsetWidth);
            }
        };

        // Initial check for height
        updateParentHeight();

        // Set up ResizeObserver to watch for parent element size changes
        const observer = new ResizeObserver(updateParentHeight);
        if (elementRef.current?.parentElement) {
            observer.observe(elementRef.current.parentElement);
        }

        // Cleanup observer on component unmount
        return () => observer.disconnect();
    }, []);

    const numLoops = Math.floor(parentWidth / (width));
    console.log(parentWidth, numLoops, 'ramvinay numloops');
    return (
        <Flex ref={elementRef} flexDir="row" pos={'relative'}>
            {Array.from({ length: numLoops }).map((_, index) => (
                <TopBarIcon height={'20px'} key={index} width={`${width}px`} color={color} />
            ))}
        </Flex>
    );
};
