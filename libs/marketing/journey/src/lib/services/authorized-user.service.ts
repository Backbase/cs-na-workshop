import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthorizedUserService {
  private veryUnsafeKeywords = [
    'astride',
    'bareback',
    'bay',
    'blinker',
    'bridle',
    'buck',
    'buggy',
    'cabriolet',
    'canter',
    'caparison',
    'carriage',
    'carthorse',
    'cavalry',
    'chaise',
    'chestnut',
    'chevalier',
    'clip-clop',
    'colt',
    'curry',
    'dam',
    'dapple',
    'darkhorse',
    'dressage',
    'dun',
    'equestrian',
    'equine',
    'farrier',
    'filly',
    'foal',
    'gait',
    'gallop',
    'gelding',
    'hackney',
    'harness',
    'hoof',
    'horse',
    'horseshoe',
    'jockey',
    'mane',
    'mare',
    'mount',
    'mule',
    'mustang',
    'muzzle',
    'nag',
    'neigh',
    'nicker',
    'paddock',
    'Pegasus',
    'pommel',
    'pony',
    'prance',
    'rein',
    'roan',
    'roughshod',
    'rowel',
    'saddle',
    'sorrel',
    'spur',
    'stable',
    'stallion',
    'steed',
    'stud',
    'thoroughbred',
    'trammel',
    'trot',
    'unbridled',
    'unicorn',
    'vault',
    'warhorse',
    'wrangler',
  ];

  verifyIsUsernameCompliant(requestedUsername: string): Observable<boolean> {
    const allClear = this.veryUnsafeKeywords.reduce(
      (requestedNameOK, nextVeryUnsafeWord) => requestedNameOK && !requestedUsername.includes(nextVeryUnsafeWord),
      true,
    );

    return of(allClear);
  }
}
