"use client";
import { FC, useState, useEffect, useRef } from 'react';
import SideBar from '../icons/side-bar';
import { Flex } from '@chakra-ui/react';
import { getLeftIconUrl } from '../constants/constant';

export type TopBarProps = {
    color: string;
    width?: number;
    style?: any;
};

export const LeftBar: FC<TopBarProps> = ({ style,color = "#000000", width=8 }) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [parentHeight, setParentHeight] = useState(0);
    useEffect(() => {
        const updateParentHeight = () => {
            if (elementRef.current?.parentElement) {
                setTimeout(()=>{
                    setParentHeight(elementRef.current.parentElement.offsetHeight);
                },300)
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
    console.log(parentHeight, 'ramvinay height')
    
    const getSvgWithColor = (color: string) => {
        return `<svg width='${width}px' height='${width*2}' xmlns="http://www.w3.org/2000/svg" viewBox="-3 -1 3 6">
	    <path d="M 0 0 A 1 1 0 0 0 0 4 V 5 Q -2 5 -3 5 V -1 H 0" fill="${color}"/>
    </svg>`;
    }
    
    return (
        <Flex 
            ref={elementRef}
            w={width+'px'}
            h={parentHeight > 0 ? Math.ceil(parentHeight/(width*2))*(width*2)+'px' : 'auto'}
            pos={'relative'}
            left={'0'}
            style={{
                ...style,
                backgroundImage:  `url("data:image/svg+xml,${encodeURIComponent(getSvgWithColor(color))}")`,
                backgroundRepeat: 'repeat-y'
            }}
        />
    );
};
