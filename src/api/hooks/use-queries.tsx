import { useState, useEffect } from 'react';
import { Vaccines, Phase } from '../../types/types';
import { get } from '../fetchers/fetchers';

const MIDDLEWARE_URI = process.env.NODE_ENV === 'production' ? 'https://vaccinetracker-middleware.herokuapp.com' : 'http://localhost:3000'

export const useGetVaccineCandidates = () => {
    const [vaccineCandidates, setCandidates] = useState<Vaccines>();
    const [loading, setLoading] = useState<boolean>(true);

    const getCandidates = async () => {
        const result = await get<Vaccines>(`${MIDDLEWARE_URI}/data`);
        setCandidates(result)
        setLoading(false)
    }

    useEffect(() => {
        getCandidates()
    }, [])

    return { vaccineCandidates, loading }
}

export const useGetPhases = () => {
    const [phases, setPhases] = useState<[Phase]>();
    const [loading, setLoading] = useState<boolean>(true);

    const getPhases = async () => {
        const result = await get<[Phase]>(`${MIDDLEWARE_URI}/phases`);
        setPhases(result)
        setLoading(false)
    }

    useEffect(() => {
        getPhases()
    }, [])

    return { phases, loading };
}