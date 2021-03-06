import { useState, useEffect } from 'react';
import { Vaccines, Phase } from '../../types/types';
import { get } from '../fetchers/fetchers';

export const useGetVaccines = () => {
    const [candidates, setCandidates] = useState<Vaccines>();
    const [loading, setLoading] = useState<boolean>(true);

    const getCandidates = async () => {
        const result = await get<Vaccines>('http://localhost:3000/data');
        setCandidates(result)
        setLoading(false)
    }

    useEffect(() => {
        getCandidates()
    }, [])

    return { candidates, loading }
}

export const useGetPhases = () => {
    const [phases, setPhases] = useState<[Phase]>();
    const [loading, setLoading] = useState<boolean>(true);

    const getPhases = async () => {
        const result = await get<[Phase]>('http://localhost:3000/phases');
        setPhases(result)
        setLoading(false)
    }

    useEffect(() => {
        getPhases()
    }, [])

    return { phases, loading };
}