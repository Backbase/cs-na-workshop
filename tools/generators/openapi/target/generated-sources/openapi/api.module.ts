import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { NgrxConfiguration, CONFIG_TOKEN } from './configuration';
import { HttpClient } from '@angular/common/http';

import { DataModulesManager } from "@backbase/foundation-ang/data-http";

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers:    []
})
export class NgrxApiModule {
    public static forRoot(configurationFactory: () => NgrxConfiguration): ModuleWithProviders<NgrxApiModule> {
        return {
            ngModule: NgrxApiModule,
            providers: [ { provide: NgrxConfiguration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: NgrxApiModule,
                 @Optional() http: HttpClient,
                 @Optional() dataModulesManager: DataModulesManager | null,
                 config: NgrxConfiguration,

        ) {
        if (parentModule) {
            throw new Error('NgrxApiModule is already loaded. Import in your base AppModule only.');
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
