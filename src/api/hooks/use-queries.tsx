import { useState, useEffect } from 'react'
import { Vaccines, Phase } from '../../models/common.model'
import { get } from '../fetchers/fetchers'

const MIDDLEWARE_URL = process.env.NODE_ENV === 'production' ? 'https://vaccinetracker-middleware2.herokuapp.com' : 'http://localhost:3000'

export const useGetVaccineCandidates = () => {
    const [vaccineCandidates, setCandidates] = useState<Vaccines>()
    const [loading, setLoading] = useState<boolean>(true)

    const getCandidates = async () => {
        const result = await get<Vaccines>(`${MIDDLEWARE_URL}/data`)
        setCandidates(result)
        setLoading(false)
    }

    useEffect(() => {
        getCandidates()
    }, [])

    return { vaccineCandidates, loading }
}

export const useGetPhases = () => {
    const [phases, setPhases] = useState<[Phase]>()
    const [loading, setLoading] = useState<boolean>(true)

    const getPhases = async () => {
        const result = await get<[Phase]>(`${MIDDLEWARE_URL}/phases`)
        setPhases(result)
        setLoading(false)
    }

    useEffect(() => {
        getPhases()
    }, [])

    return { phases, loading }
}