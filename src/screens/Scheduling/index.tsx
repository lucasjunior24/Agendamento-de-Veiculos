import React, { useState } from 'react';

import { useNavigation } from "@react-navigation/native";
import { useTheme } from 'styled-components';
import { StatusBar } from 'react-native';

import { BackButton } from '../../components/BackButton';
import ArrowSvg from '../../assets/arrow.svg';

import { 
    Container, 
    Header, 
    Title, 
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer
 } from './styles';

import { Button } from '../../components/Button';
import { 
    Calendar, 
    DayProps,
    MarkedDateProps, 
    generateInterval
} from '../../components/Calendar';

export function Scheduling() {
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
    const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);
    
    const theme = useTheme();

    const navigation = useNavigation();

    function handleBack() {
        navigation.goBack();
    }
    
    function handleConfirmRental() {
        navigation.navigate('SchedulingDetails')
    }

    function handleChangeDate(date: DayProps) {
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end = date;

        if(start.timestamp > end.timestamp) {
            start = end;
            end = start;
        }
        setLastSelectedDate(end);
        const interval = generateInterval(start, end);
        setMarkedDates(interval);
    }

    return (
        <Container >
            <Header>
                <StatusBar 
                    barStyle='light-content'
                    translucent
                    backgroundColor='transparent'
                />
                <BackButton 
                    onPress={handleBack}
                    color={theme.colors.shape} />

                <Title>
                    Escolha uma {'\n'}
                    data de inicio e {'\n'}
                    fim do aluguel
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>De</DateTitle>
                        <DateValue selected={true}></DateValue>
                    </DateInfo>

                    <ArrowSvg />

                    <DateInfo>
                        <DateTitle>ATE</DateTitle>
                        <DateValue selected={false}></DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>

            <Content>
                <Calendar 
                    markedDates={markedDates}
                    onDayPress={handleChangeDate}
                />
            </Content>

            <Footer>
                <Button 
                    title='Confirmar'
                    onPress={handleConfirmRental}
                />
            </Footer>
        </Container>
    );
}