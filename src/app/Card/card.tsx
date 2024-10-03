"use client";
import React, { useState } from 'react';
import { StyledCard, StyledText } from '@/app/Card/Card.styled';
import clsx from 'clsx';

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
            <StyledText>
                Card
            </StyledText>
        </StyledCard>
    );
    
}
