import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Weight } from '../../models/weight';
import { WeightService } from '../../weight.service';
import { WeightProgressComponent } from './weight-progress.component';

describe('WeightProgressComponent', () => {
    // Since we know that only weight will be used then telling
    // TS to take only weight property and ignore rest.
    const sampleWeights: Weight[] = [
        { weight: 78, comment: '' },
        { weight: 77, comment: '' },
        { weight: 76, comment: '' },
        { weight: 75, comment: '' },
        { weight: 74, comment: '' },
    ];

    let fixture: ComponentFixture<WeightProgressComponent>;
    let comp: WeightProgressComponent;
    let weightServiceMock: jasmine.SpyObj<Pick<WeightService, keyof WeightService>>;

    beforeEach(async () => {
        weightServiceMock = jasmine.createSpyObj<WeightService>('WeightService', ['getGoal', 'getWeight']);

        // Initial value
        weightServiceMock.getWeight.and.returnValue(of([]));

        await TestBed.configureTestingModule({
            imports: [],
            declarations: [WeightProgressComponent],
            providers: [
                { provide: WeightService, useValue: weightServiceMock }
            ]

        }).compileComponents();

        fixture = TestBed.createComponent(WeightProgressComponent);
        comp = fixture.componentInstance as WeightProgressComponent;
    });

    describe('requiredForGoal', () => {
        it('should initially have no value', () => {
            // tslint:disable-next-line:no-string-literal
            comp['setupObservable']();
            expect(comp.requiredForGoal).toBeUndefined();
        });

        it('should still have no value if there are no two weight records and set goal', () => {
            weightServiceMock.getGoal.and.returnValue(of(72));
            comp.weight$ = of([sampleWeights[0]]);
            // tslint:disable-next-line:no-string-literal
            comp['setupObservable']();
            // Checking for goal to be null and not undefined because
            // initially there is no value but if its not possible to calculate
            // estimation then return value will be null
            expect(comp.requiredForGoal).toBeNull();
        });

        it('should have corrrect value if goal is set and there are at least two weight records', () => {
            weightServiceMock.getGoal.and.returnValue(of(72));
            comp.weight$ = of([...sampleWeights]);
            // tslint:disable-next-line:no-string-literal
            comp['setupObservable']();
            // Checking for goal to be null and not undefined because
            // initially there is no value but if its not possible to calculate
            // estimation then return value will be null
            expect(comp.requiredForGoal).toBe(2);
        });
    });

    describe('getWeightProgressDifference', () => {
        it('should return correct sum of difference for weight progress', () => {
            // Src: https://stackoverflow.com/a/35991491/5347059
            // tslint:disable-next-line:no-string-literal
            const getWeightProgressDifference = comp['getWeightProgressDifference'];

            expect(getWeightProgressDifference(sampleWeights)).toBe(4);
        });
    });

    describe('getAverageWeightLoss', () => {
        it('should return correct average value', () => {
            // Src: https://stackoverflow.com/a/35991491/5347059
            // tslint:disable-next-line:no-string-literal
            const getAverageWeightLoss = comp['getAverageWeightLoss'];
            // tslint:disable-next-line:no-string-literal
            const totalProgressDiff = comp['getWeightProgressDifference'](sampleWeights);

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

        it('should return null if average is falsy (0/null)', () => {
            // Src: https://stackoverflow.com/a/35991491/5347059
            // tslint:disable-next-line:no-string-literal
            const getEstimateForGoal = comp['getEstimateForGoal'];
            expect(getEstimateForGoal(6, 0)).toBeNull();
        });

        it('should return correct average value', () => {
            // Src: https://stackoverflow.com/a/35991491/5347059
            // tslint:disable-next-line:no-string-literal
            const getEstimateForGoal = comp['getEstimateForGoal'];
            expect(getEstimateForGoal(10, 5)).toBe(2);
        });
    });

    describe('setupObservable', () => {
        it('should not set "remaining" value if there are no weight records', () => {
            // Making sure that remaining values was not set
            expect(comp.remaining).toBeUndefined();
            // tslint:disable-next-line:no-string-literal
            comp['setupObservable']();
            expect(comp.remaining).toBeUndefined();
        });

        it('should not set "remaining" if goal is not set', () => {
            // Making sure that remaining values was not set
            expect(comp.remaining).toBeUndefined();
            // tslint:disable-next-line:no-string-literal
            comp['setupObservable']();
            expect(comp.remaining).toBeUndefined();
        });

        it('should call markForCheck if goal is set and there is at least one weight record', () => {
            // Making sure that remaining values was not set
            expect(comp.remaining).toBeUndefined();
            weightServiceMock.getGoal.and.returnValue(of(72));
            comp.weight$ = of([sampleWeights[0] as Weight]);
            // tslint:disable-next-line:no-string-literal
            comp['setupObservable']();
            expect(comp.remaining).toBeDefined();
        });
    });
});
