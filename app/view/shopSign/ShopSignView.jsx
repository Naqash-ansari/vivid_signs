'use client'

import { useSearchParams } from 'next/navigation';

const ShopSignView = () => {
    const params = useSearchParams();

    const Signtext = params.get('bane') || 'Customize your sign';
    const bgColor = params.get('bgColor') || '#000';
    const textColor = params.get('textColor') || '#fff';
    const fontFamily = params.get('fontFamily') || 'Arial';
    const textSize = params.get('textSize') || '20px';
    const selectWidth = params.get('selectWidth') || 50;
    const selectHeight = params.get('selectHeight') || 20;
    const name = params.get('name') || '';
    const email = params.get('email') || '';
    const shopName = params.get('shopName') || '';
    const number = params.get('number') || '';

    return (
        <div className="my-20 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Sign Details */}
            <div className="w-full p-8 bg-white rounded-2xl shadow text-gray-800">
                <h2 className="text-xl font-bold mb-4 border-b pb-2">🪧 Sign Details</h2>
                <dl className="space-y-2">
                    <div><dt className="font-semibold">Banner Text:</dt><dd>{Signtext}</dd></div>
                    <div><dt className="font-semibold">Background Color:</dt><dd>{bgColor}</dd></div>
                    <div><dt className="font-semibold">Text Color:</dt><dd>{textColor}</dd></div>
                    <div><dt className="font-semibold">Font Family:</dt><dd>{fontFamily}</dd></div>
                    <div><dt className="font-semibold">Text Size:</dt><dd>{textSize}</dd></div>
                    <div><dt className="font-semibold">Width:</dt><dd>{selectWidth} cm</dd></div>
                    <div><dt className="font-semibold">Height:</dt><dd>{selectHeight} cm</dd></div>
                </dl>
            </div>

            {/* Sign Preview */}
            <div className="w-full p-8 bg-white rounded-2xl shadow text-gray-800">
                <h2 className="text-xl font-bold mb-4 border-b pb-2">🔍 Preview</h2>
                <div
                    style={{
                        backgroundColor: bgColor,
                        color: textColor,
                        fontSize: textSize,
                        fontFamily,
                    }}
                    className="border rounded h-16 flex items-center justify-center font-semibold"
                >
                    {Signtext}
                </div>
            </div>

            {/* Contact Details */}
            <div className="w-full p-8 bg-white rounded-2xl shadow text-gray-800">
                <h2 className="text-xl font-bold mb-4 border-b pb-2">📇 Contact Details</h2>
                <dl className="space-y-2">
                    <div><dt className="font-semibold">Name:</dt><dd>{name}</dd></div>
                    <div><dt className="font-semibold">Email:</dt><dd>{email}</dd></div>
                    <div><dt className="font-semibold">Shop Name:</dt><dd>{shopName}</dd></div>
                    <div><dt className="font-semibold">Number:</dt><dd>{number}</dd></div>
                </dl>
            </div>
        </div>
    );
};

export default ShopSignView;
