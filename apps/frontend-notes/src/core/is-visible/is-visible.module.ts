import { NgModule } from '@angular/core';
import { IsVisibleDirective } from './is-visible.directive';

@NgModule({
  declarations: [IsVisibleDirective],
  exports: [IsVisibleDirective]
})
export class IsVisibleModule {
}
