import React from 'react';

import { useNavigation } from "@react-navigation/native";

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import { 
    Container, 
    Header, 
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About, 
    Accessories,
    Footer
} from './styles';
import { Button } from '../../components/Button';

export function CarDetails() {
    const navigation = useNavigation();
    
    function handleConfirmRental() {
        navigation.navigate('Scheduling')
    }

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

            <Content>
                <Details>
                    <Description>
                        <Brand>Lamborghini</Brand>
                        <Name>Huracan</Name>
                    </Description>

                    <Rent>
                        <Period>Ao Dia</Period>
                        <Price>R$ 549,90</Price>
                    </Rent>
                </Details>

                <Accessories>
                    <Accessory name='380Km/h' icon={speedSvg} />
                    <Accessory name='3.2s' icon={accelerationSvg} />
                    <Accessory name='800 HP' icon={forceSvg} />
                    <Accessory name='Gasolina' icon={gasolineSvg} />
                    <Accessory name='Auto' icon={exchangeSvg} />
                    <Accessory name='2 pessoas' icon={peopleSvg} />
                </Accessories>

                <About>
                    Lamborghini é uma fabricante italiana de automóveis desportivos de luxo e de alto desempenho criada originalmente para competir com a Ferrari com sede no município de Sant'Agata Bolognese.
                </About>
            </Content>

            <Footer>
                <Button title='Escolher período do aluguel' onPress={handleConfirmRental} />
            </Footer>
        </Container>
    );
}