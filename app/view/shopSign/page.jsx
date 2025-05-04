import { Suspense } from 'react';
import ShopSignView from './ShopSignView';

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ShopSignView />
        </Suspense>
    );
}
