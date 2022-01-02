import React, { useState, useEffect } from 'react'
import { Container } from './styles'

import { useTheme } from 'styled-components';
import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';

export function MyCars() {
    const [cars, setCars] = useState<CarDTO[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetCars() {
            try {
                const response = await api.get('/schedules_byuser?user_id=1');
                setCars(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

    }, [])
    return (
        <Container>
            
        </Container>
    )
}