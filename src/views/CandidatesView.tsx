import React from 'react';
import VaccineCandidates from '../components/VaccineCandidates';
import Phases from '../components/Phases';

function CandidatesView() {
    return (
        <>
            <Phases />
            <VaccineCandidates />
        </>
    );
}

export default CandidatesView