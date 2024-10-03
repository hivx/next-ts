"use client";
import React, { useState } from 'react';
import { StyledCard, StyledText, StyledImg } from '@/app/card/Card.styled';
import clsx from 'clsx';
import Image from 'next/image';

export default function Card() {
    const [button, setButton] = useState<boolean>(false);

    const toggleButton = () => {
        setButton((e) => !e);
    };

    return (
        <StyledCard 
            className={clsx({ 
                'card-1': button, 
            })}
            onClick={toggleButton}
        >
            <Image src='https://img.freepik.com/photos-premium/illustration-manette-jeu-du-controleur-jeu-cyberpunk_691560-5812.jpg?w=740' 
                alt='pinterest'
                width={100}
                height={100}
                quality={100}
            />
            <StyledText>
                Card
            </StyledText>
            <StyledImg />
        </StyledCard>
    );
    
}
