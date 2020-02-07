import { NgModule } from '@angular/core';
import { ShareDirective } from './share.directive';

@NgModule({
  declarations: [ShareDirective],
  exports: [ShareDirective]
})
export class ShareModule {

}
