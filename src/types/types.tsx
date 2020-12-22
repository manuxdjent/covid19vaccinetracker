export interface Vaccine {
    id: string,
    candidate: string,
    mechanism: string,
    sponsors: Array<string>,
    details: string,
    trialPhase: string,
    institutions: Array<string>
}

export interface Vaccines {
    source: string,
    totalCandidates: string,
    phases: Array<Phase>,
    data: Array<Vaccine>
}

export interface Phase {
    name: string,
    candidates?: string,
    color: string,
    cssClass?: string
}

export interface VaccineDetailsModal {
    vaccineName: string,
    vaccineDetails: string
  }