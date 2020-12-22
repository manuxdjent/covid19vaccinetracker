import { render } from '@testing-library/react';
import React from 'react';
import VaccinesView from './CandidatesView';
import PhasesView from './PhasesView';

function DashboardView() {
    return (
        <>
            <PhasesView />
            <VaccinesView />
        </>
    );
}

export default DashboardView