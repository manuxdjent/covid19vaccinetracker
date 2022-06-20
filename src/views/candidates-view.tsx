import React from 'react'
import Phases from '../components/phases/phases';
import VaccineCandidates from '../components/vaccines/vaccines'
import { Filter, Phase } from '../models/common.model';

function CandidatesView() {
    const [filter, setFilter] = React.useState<Filter>();
    const onPhaseClick = (phase: Phase) => {
        setFilter({
            trialPhase: [phase.name]
        });
    }
    return (
        <>
            <Phases phaseClick={onPhaseClick}/>
            <VaccineCandidates filter={filter}/>
        </>
    );
}

export default CandidatesView