import Link from 'next/link';

export default function DesignIntelligence() {
    return (
        <div className="headline p-16 bg-[rgb(29,25,29)]">
            <h2 className="text-2xl font-serif text-gray-200">
                Build a bespoke website with Design Intelligence
            </h2>
            <p className="text-lg text-gray-300 mt-2">
                Generate a unique website with the help of industry-leading, AI-powered design expertise and guidance that's tailored to you.
            </p>
            <div className="mt-4">
                <Link href="/design-intelligence">
                    Explore Design Intelligence <span className="ml-1">→</span>
                </Link>
            </div>
        </div>

    );
}
