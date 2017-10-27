import { ShoppingCartContainerComponent } from './containers/shopping-cart.container.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from 'app/branding/containers/app.component';
import { NavItemComponent } from 'app/branding/layout/components/nav-item';
import { ToolbarComponent } from 'app/branding/layout/components/toolbar';

import { CartModule } from '../../modules/cart/src/cart.module';
import { FinanceModule } from '../../modules/finance/src/finance.module';
import { SalesModule } from '../../modules/sales/src/sales.module';
import { NotFoundPageComponent } from './containers/not-found-page';
import { ProductListContainerComponent } from './containers/product-list-container.component';
import { LayoutComponent, SidenavComponent } from './layout/components';
import { EStoreMaterialModule } from './material.module';
import { reducers } from './reducers/index';

export const COMPONENTS = [
    AppComponent,
    NotFoundPageComponent,
    LayoutComponent,
    NavItemComponent,
    SidenavComponent,
    ToolbarComponent,
    ProductListContainerComponent,
    ShoppingCartContainerComponent,
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        EStoreMaterialModule,
        SalesModule.forRoot(),
        FinanceModule.forRoot(),
        CartModule.forRoot(),
        StoreModule.forFeature('branding', reducers),
        EffectsModule.forFeature([]),
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS,
})
export class BrandingModule {
    static forRoot() {
        return {
            ngModule: BrandingModule,
            providers: [],
        };
    }
}