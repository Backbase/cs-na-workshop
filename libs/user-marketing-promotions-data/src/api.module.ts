import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { NgrxPromotionsConfiguration, CONFIG_TOKEN } from './configuration';
import { HttpClient } from '@angular/common/http';

import { DataModulesManager } from "@backbase/foundation-ang/data-http";

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers:    []
})
export class NgrxPromotionsApiModule {
    public static forRoot(configurationFactory: () => NgrxPromotionsConfiguration): ModuleWithProviders<NgrxPromotionsApiModule> {
        return {
            ngModule: NgrxPromotionsApiModule,
            providers: [ { provide: NgrxPromotionsConfiguration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: NgrxPromotionsApiModule,
                 @Optional() http: HttpClient,
                 @Optional() dataModulesManager: DataModulesManager | null,
                 config: NgrxPromotionsConfiguration,

        ) {
        if (parentModule) {
            throw new Error('NgrxPromotionsApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }

        if (dataModulesManager) {
            dataModulesManager.setModuleConfig(CONFIG_TOKEN, {
                apiRoot: '',
                servicePath: config.basePath || '',
                headers: {},
            });
        }
    }
}
