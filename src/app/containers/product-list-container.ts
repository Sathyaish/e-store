import { PricingState } from '../../modules/pricing/src/reducers/index';
import { Observable } from 'rxjs/Rx';
import { ElementRef, Output, ViewChildren } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as fromRoot from 'app/reducers';
import * as items from '../../modules/items/src';
import * as pricing from '../../modules/pricing/src';

@Component(
    {
        selector: '<product-list-container></product-list-container>',
        template:
        `<div *ngIf="products$ | async">
            <div  *ngFor="let product of products$ | async">
             {{product|json}}
            </div>
        </div>
        `
        , changeDetection: ChangeDetectionStrategy.OnPush
    }
)
export class ProductListContainerComponent {
    products$;
    constructor(private store: Store<fromRoot.State>) {
        this.products$ = store.select(fromRoot.getAllProducts)
    }
    trackProduct(index, product) {
        return (product) ? product.id : undefined;
    }
    onAddProduct(event) {

    }
}