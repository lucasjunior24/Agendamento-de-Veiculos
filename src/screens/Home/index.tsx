import React from "react";
import { StatusBar } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

import Logo from '../../assets/logo.svg';
import { Car } from "../../components/Car";

import { Container, Header, TotalCars, HeaderContent } from './styles';

export function Home() {
    const carDataOne = {
        brand: 'Audi',
        name: "RS 5 Coupé",
        rent: {
            period: 'AO DIA',
            price: 120,
        },
        thumbnael: 'https://img1.gratispng.com/20171220/kiq/audi-png-car-image-5a3b1f1eb47de9.9104985015138240307393.jpg'
    }

    const carDataTwe = {
        brand: 'Porshe',
        name: "Ponamera",
        rent: {
            period: 'AO DIA',
            price: 120,
        },
        thumbnael: 'https://img1.gratispng.com/20180203/fuw/kisspng-porsche-930-2015-porsche-911-turbo-s-car-turbochar-gold-porsche-911-turbo-aerokit-car-5a75571960ffa9.5643006815176394493973.jpg'
    }

    return (
        <Container>
            <StatusBar 
                barStyle="light-content"  />
            <Header>
                <HeaderContent>
                    <Logo width={RFValue(108)} height={RFValue(12)} />
                    <TotalCars>
                        Total de 12 carros
                    </TotalCars>
                </HeaderContent>
            </Header>
            <Car data={carDataOne} />
            <Car data={carDataTwe} />
        </Container>
    );
}