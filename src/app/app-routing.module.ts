import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserContainerComponent } from './user/user-container/user-container.component';
import { OrderContainerComponent } from './order/order-container/order-container.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
    { path: '', redirectTo: '/user', pathMatch: 'full' },
    { path: 'user', component: UserContainerComponent },
    { path: 'order', component: OrderContainerComponent },
    //Wild Card Route for 404 request
    {
        path: '**', pathMatch: 'full',
        component: PagenotfoundComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents = [UserContainerComponent, UserContainerComponent];