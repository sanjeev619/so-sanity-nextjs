"use client";
import { FC, useState, useEffect, useRef } from 'react';
import SideBar from '../icons/side-bar';
import { Flex } from '@chakra-ui/react';

export type BottomBarProps = {
    color: string;
    width?: number;
    style?: any;
};

export const BottomBar: FC<BottomBarProps> = ({ style,color = "#000000", width=15 }) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [parentWidth, setParentWidth] = useState(0);
    const getSvgWithColor = (color: string) => {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 2">
	<path d="M 0 0 L 5 0 L 5 2 L 4 2 A 1 1 0 0 0 1 2 L 0 2 L 0 0" fill="${color}"/>
</svg>`;
    }
    return (
        <Flex  
            w={'100%'}
            pos={'absolute'}
            left={'0'}
            bottom={'0'}
            height={width+'px'}
            style={{
                ...style,
                backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(getSvgWithColor(color))}")`,
            }}
        />
    );
};
