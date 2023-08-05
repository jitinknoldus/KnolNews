import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TwiWayBindingComponent} from "./twi-way-binding/twi-way-binding.component";
import {ChildToParentComponent} from "./child-to-parent/child-to-parent.component";
import {GridingComponent} from "./griding/griding.component";

const routes: Routes = [
  {
    path: "two/way/binding",
    component: TwiWayBindingComponent
  }, {
    path: "child/to/parent",
    component: ChildToParentComponent
  },
  {
    path: "griding",
    component: GridingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
