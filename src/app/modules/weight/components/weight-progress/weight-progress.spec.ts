import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Weight } from '../../models/weight';
import { WeightProgressComponent } from './weight-progress.component';

describe('WeightProgressComponent', () => {
    // Since we know that only weight will be used then telling
    // TS to take only weight property and ignore rest.
    const sampleWeights: Pick<Weight, 'weight'>[] = [
        { weight: 78 },
        { weight: 77 },
        { weight: 76 },
        { weight: 75 },
        { weight: 74 },
    ];

    let fixture: ComponentFixture<WeightProgressComponent>;
    let comp: WeightProgressComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [],
            declarations: [WeightProgressComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(WeightProgressComponent);
        comp = fixture.componentInstance as WeightProgressComponent;
    });

    describe('requiredForGoal', () => {
        it('should have initially no value', () => {
            expect(comp.requiredForGoal).toBeUndefined();
        });
    });

    describe('getWeightProgressDifference', () => {
        it('should return correct sum of difference for weight progress', () => {
            // Src: https://stackoverflow.com/a/35991491/5347059
            // tslint:disable-next-line:no-string-literal
            const getWeightProgressDifference = comp['getWeightProgressDifference'];

            expect(getWeightProgressDifference(sampleWeights as Weight[])).toBe(6);
        });
    });

    describe('getAverageWeightLoss', () => {
        it('should return correct average value', () => {
            // Src: https://stackoverflow.com/a/35991491/5347059
            // tslint:disable-next-line:no-string-literal
            const getAverageWeightLoss = comp['getAverageWeightLoss'];
            // tslint:disable-next-line:no-string-literal
            const totalProgressDiff = comp['getWeightProgressDifference'](sampleWeights as Weight[]);

            expect(getAverageWeightLoss(totalProgressDiff, sampleWeights.length - 1)).toBe(1);
        });

        it('should return null if amount of records is 0', () => {
            // Src: https://stackoverflow.com/a/35991491/5347059
            // tslint:disable-next-line:no-string-literal
            const getAverageWeightLoss = comp['getAverageWeightLoss'];
            expect(getAverageWeightLoss(0, 0)).toBeNull();
        });
    });

    describe('getEstimateForGoal', () => {
        it('should return null if remaining is <= 0', () => {
            // Src: https://stackoverflow.com/a/35991491/5347059
            // tslint:disable-next-line:no-string-literal
            const getEstimateForGoal = comp['getEstimateForGoal'];
            expect(getEstimateForGoal(0, 1)).toBeNull();
            expect(getEstimateForGoal(-1, 1)).toBeNull();
        });

        it('should return correct average value', () => {
            // Src: https://stackoverflow.com/a/35991491/5347059
            // tslint:disable-next-line:no-string-literal
            const getEstimateForGoal = comp['getEstimateForGoal'];
            expect(getEstimateForGoal(10, 5)).toBe(2);
        });
    });
});
