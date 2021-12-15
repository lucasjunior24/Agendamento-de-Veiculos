import React from "react";
import { StatusBar } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

import Logo from '../../assets/logo.svg';
import { Car } from "../../components/Car";

import { Container, Header, TotalCars, HeaderContent, CarList } from './styles';

export function Home() {
    const carData = {
        brand: 'Audi',
        name: "RS 5 Coupé",
        rent: {
            period: 'AO DIA',
            price: 120,
        },
        thumbnael: 'https://img1.gratispng.com/20171220/kiq/audi-png-car-image-5a3b1f1eb47de9.9104985015138240307393.jpg'
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
            <CarList 
                data={[1,2,3,4,5,6,7]} 
                keyExtractor={item => String(item)}
                renderItem={({ item }) => <Car data={carData} /> } 
            />
        </Container>
    );
}