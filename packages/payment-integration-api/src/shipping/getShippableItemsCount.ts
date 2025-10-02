import { Cart } from '../cart';

import getLineItemsCount from './getLineItemsCount';

export default function getShippableItemsCount(cart: Cart): number {
    return getLineItemsCount(
        [...cart.lineItems.physicalItems, ...(cart.lineItems.customItems || [])].filter(
            (item: any) => !item.addedByPromotion,
        ),
    );
}
