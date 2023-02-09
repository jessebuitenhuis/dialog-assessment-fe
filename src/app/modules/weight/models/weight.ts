
export interface Weight {
    weight: number;
    comment: string;
}

export interface WeightProgressRemaining {
    /**
     * Remaining value. In our case we assume its remaining weight in KG
     *
     */
    value: number;
    /**
     * Progress percent towardss goal. 100 = goal reached.
     *
     */
    percent: number;
}
