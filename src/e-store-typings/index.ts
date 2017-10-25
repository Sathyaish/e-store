import * as fromRouter from '@ngrx/router-store';
export type OrderId = string;
export type ProductId = string;
export type CustomerId = string;

export abstract class Dictionary<T> {
    [id: string]: T;
};

export interface State {
    routerReducer: fromRouter.RouterReducerState;
};
export const  NAVIGATE_PRODUCTS_PAGE ='NAVIGATE_PRODUCTS_PAGE'
export type NavigateProductsPageAction = {
    type:typeof NAVIGATE_PRODUCTS_PAGE;
    payload: {}
}