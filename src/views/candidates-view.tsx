import React from 'react'
import VaccineCandidates from '../components/vaccines/vaccines'
import Phases from '../components/phases/phases'

function CandidatesView() {
    return (
        <>
            <Phases />
            <VaccineCandidates />
        </>
    );
}

export default CandidatesView