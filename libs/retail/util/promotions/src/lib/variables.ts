import { InjectionToken } from '@angular/core';

export const NGRX_PROMOTIONS_BASE_PATH = new InjectionToken<string>('NGRX_PROMOTIONS_BASE_PATH');
export const COLLECTION_FORMATS = {
  csv: ',',
  tsv: '   ',
  ssv: ' ',
  pipes: '|',
};
