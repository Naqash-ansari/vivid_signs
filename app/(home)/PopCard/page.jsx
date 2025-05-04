// 'use client';

// import dynamic from 'next/dynamic';
// import { useEffect, useState } from 'react';
// import 'react-pop-cards/dist/index.css'; // Ensure CSS is imported

// // Dynamically import `Card` with SSR disabled
// const Card = dynamic(() => import("react-pop-cards").then((mod) => mod.Card), { ssr: false });

// const Page = () => {
//     const [isMounted, setIsMounted] = useState(false);

//     useEffect(() => {
//         setIsMounted(true);
//     }, []);

//     const array = [
//         { title: "Title1", description: "Description1", image: "https://placehold.co/600x400" },
//         { title: "Title2", description: "Description2", image: "https://placehold.co/600x400" },
//         { title: "Title3", description: "Description3", image: "https://placehold.co/600x400" },
//         { title: "Title4", description: "Description4", image: "https://placehold.co/600x400" }
//     ];

//     if (!isMounted) return null; // Prevent hydration error

//     return (
//         <div>
//             <Card data={array} disposition="LeftRight" tension={120} friction={10} isRounded={false} bgColor="#e5e7eb" />
//         </div>
//     );
// };

// export default Page;



const page = () => {
    return (
        <div>page</div>
    )
}

export default page
