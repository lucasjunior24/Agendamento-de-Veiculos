import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import { Container, Header, CarImages } from './styles';

export function CarDetails() {
    return (
        <Container>
            <Header>
                <BackButton onPress={() => {}} />
            </Header>

            <CarImages>
                <ImageSlider 
                    imagesUrl={['https://img1.gratispng.com/20171220/kiq/audi-png-car-image-5a3b1f1eb47de9.9104985015138240307393.jpg']} 
                />
            </CarImages>
        </Container>
    );
}