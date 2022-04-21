## @backbase/ngrx-workshop@1.0.0

### Building

To install the required dependencies and to build the typescript sources run:
```
npm install
npm run build
```

### publishing

First build the package then run ```npm publish dist``` (don't forget to specify the `dist` folder!)

### consuming

Navigate to the folder of your consuming project and run one of next commands.

_published:_

```
npm install @backbase/ngrx-workshop@1.0.0 --save
```

_without publishing (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE/dist.tgz --save
```

_It's important to take the tgz file, otherwise you'll get trouble with links on windows_

_using `npm link`:_

In PATH_TO_GENERATED_PACKAGE/dist:
```
npm link
```

In your project:
```
npm link @backbase/ngrx-workshop
```

__Note for Windows users:__ The Angular CLI has troubles to use linked npm packages.
Please refer to this issue https://github.com/angular/angular-cli/issues/8284 for a solution / workaround.
Published packages are not effected by this issue.


#### General usage

In your Angular project:


```
// without configuring providers
import { ApiModule } from '@backbase/ngrx-workshop';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        ApiModule,
        // make sure to import the HttpClientModule in the AppModule only,
        // see https://github.com/angular/angular/issues/20575
        HttpClientModule
    ],
    declarations: [ AppComponent ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
```

```
// configuring providers
import { NgrxPromotionsApiModule, NgrxPromotionsConfiguration, NgrxPromotionsConfigurationParameters } from '@backbase/ngrx-workshop';

export function apiConfigFactory (): NgrxPromotionsConfiguration => {
  const params: NgrxPromotionsConfigurationParameters = {
    // set configuration parameters here: check the NgrxPromotionsConfigurationParameters type for options
  }
  return new NgrxPromotionsConfiguration(params);
}

@NgModule({
    imports: [ NgrxPromotionsApiModule.forRoot(apiConfigFactory) ],
    declarations: [ AppComponent ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
```

```
// configuring providers with an authentication service that manages your access tokens
import { NgrxPromotionsApiModule, NgrxPromotionsConfiguration } from '@backbase/ngrx-workshop';

@NgModule({
    imports: [ NgrxPromotionsApiModule ],
    declarations: [ AppComponent ],
    providers: [
      {
        provide: NgrxPromotionsConfiguration,
        useFactory: (authService: AuthService) => new NgrxPromotionsConfiguration(
          {
            basePath: environment.apiUrl,
            accessToken: authService.getAccessToken.bind(authService)
          }
        ),
        deps: [AuthService],
        multi: false
      }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
```

```
import { DefaultApi } from '@backbase/ngrx-workshop';

export class AppComponent {
	 constructor(private apiGateway: DefaultApi) { }
}
```

Note: The NgrxPromotionsApiModule is restricted to being instantiated once app wide.
This is to ensure that all services are treated as singletons.

#### Using multiple OpenAPI files / APIs / ApiModules
In order to use multiple `ApiModules` generated from different OpenAPI files,
you can create an alias name when importing the modules
in order to avoid naming conflicts:
```
import { ApiModule } from 'my-api-path';
import { ApiModule as OtherApiModule } from 'my-other-api-path';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ApiModule,
    OtherApiModule,
    // make sure to import the HttpClientModule in the AppModule only,
    // see https://github.com/angular/angular/issues/20575
    HttpClientModule
  ]
})
export class AppModule {

}
```


### Set service base path
If different than the generated base path, during app bootstrap, you can provide the base path to your service.

```
import { NGRX_PROMOTIONS_BASE_PATH } from '@backbase/ngrx-workshop';

bootstrap(AppComponent, [
    { provide: NGRX_PROMOTIONS_BASE_PATH, useValue: 'https://your-web-service.com' },
]);
```
or

```
import { NGRX_PROMOTIONS_BASE_PATH } from '@backbase/ngrx-workshop';

@NgModule({
    imports: [],
    declarations: [ AppComponent ],
    providers: [{ provide: NGRX_PROMOTIONS_BASE_PATH, useValue: 'https://your-web-service.com' }],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
```


#### Using @angular/cli
First extend your `src/environments/*.ts` files by adding the corresponding base path:

```
export const environment = {
  production: false,
  API_BASE_PATH: 'http://127.0.0.1:8080'
};
```

In the src/app/app.module.ts:
```
import { NGRX_PROMOTIONS_BASE_PATH } from '@backbase/ngrx-workshop';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ ],
  providers: [{ provide: NGRX_PROMOTIONS_BASE_PATH, useValue: environment.API_BASE_PATH }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```
