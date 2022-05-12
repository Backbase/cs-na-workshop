import { CommonModule } from "@angular/common";
import { forwardRef, NgModule } from "@angular/core";
import { FormsModule, NgControl, ReactiveFormsModule } from "@angular/forms";

import { InputValidationMessageModule } from '@backbase/ui-ang';

import { InputWrapperComponent } from "../components/input-wrapper/input-wrapper.component";
import { InputWrapperDirective } from "./input-wrapper/input-wrapper.directive";

@NgModule({
    imports: [ReactiveFormsModule, CommonModule, InputValidationMessageModule, FormsModule],
    declarations: [InputWrapperDirective, InputWrapperComponent],
    exports: [InputWrapperDirective, InputWrapperComponent]
  })
  
  export class DirectivesModule {}