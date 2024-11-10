"use client";
import { FC, useState, useEffect, useRef } from 'react';
import SideBar from '../app/icons/side-bar';
import { Flex } from '@chakra-ui/react';

export type LeftBarProps = {
    color: string;
    width?: number;
};

export const LeftBar: FC<LeftBarProps> = ({ color = "#000000", width=15 }) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [parentHeight, setParentHeight] = useState(0);

    useEffect(() => {
        const updateParentHeight = () => {
            if (elementRef.current?.parentElement) {
                setParentHeight(elementRef.current.parentElement.offsetHeight);
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

    const numLoops = Math.ceil(parentHeight / (width *2));

    return (
        <Flex ref={elementRef} flexDir="column" pos={'relative'}>
            {Array.from({ length: numLoops }).map((_, index) => (
                <SideBar key={index} width={`${width}px`} color={color} />
            ))}
        </Flex>
    );
};
