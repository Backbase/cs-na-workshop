import { NgModule, Provider } from '@angular/core';
import {
  AnalysisType,
  IncomeSpendingAnalysisJourneyConfiguration,
  IncomeSpendingAnalysisJourneyConfigurationToken,
  IncomeSpendingAnalysisJourneyModule,
} from '@backbase/income-spending-analysis-journey-ang';

const IncomeAnalysisConfigProvider: Provider = {
  provide: IncomeSpendingAnalysisJourneyConfigurationToken,
  useValue: {
    analysisType: AnalysisType.INCOME,
  } as IncomeSpendingAnalysisJourneyConfiguration,
};

@NgModule({
  imports: [IncomeSpendingAnalysisJourneyModule.forRoot()],
  providers: [IncomeAnalysisConfigProvider],
})
export class IncomeAnalysisBundleModule {}
