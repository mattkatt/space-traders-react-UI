export interface STLoan {
    type: string
}

export interface STLoanAvailable extends STLoan {
    amount: number
    collateralRequired: boolean
    rate: number
    termInDays: number
}

export interface STLoanClaimed extends STLoan {
    due: string
    id: string
    repaymentAmount: number
    status: string
}
