import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export const RoutableModalParamName = 'openedModal';
export const RoutableModalOutletName = 'routable-modal-content';

@Injectable({
  providedIn: 'root',
})
export class SharedRoutableModalService {
  constructor(private readonly router: Router) {}

  openModal(modalName: string) {
    if (modalName) {
      this.router.navigate([], {
        queryParams: { [RoutableModalParamName]: modalName },
        queryParamsHandling: 'merge',
      });
    }
  }

  closeModal() {
    this.router.navigate([{ outlets: { [RoutableModalOutletName]: [] } }], {
      queryParams: { [RoutableModalParamName]: undefined },
      queryParamsHandling: 'merge',
    });
  }
}
