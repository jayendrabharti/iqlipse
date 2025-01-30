export default function Join() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        Join Our Club
                    </h1>
                    <p className="text-xl text-textColor3">
                        Be part of something amazing! Join our community of passionate individuals.
                    </p>
                </div>

                {/* Benefits Section */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="p-6 shadow-custom dark:bg-backgroundColor2 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Learn & Grow</h3>
                        <p className="text-textColor3">Access workshops, resources, and mentorship opportunities</p>
                    </div>
                    <div className="p-6 shadow-custom dark:bg-backgroundColor2 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Network</h3>
                        <p className="text-textColor3">Connect with like-minded individuals and industry professionals</p>
                    </div>
                    <div className="p-6 shadow-custom dark:bg-backgroundColor2 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Events</h3>
                        <p className="text-textColor3">Participate in exclusive events, competitions, and social gatherings</p>
                    </div>
                </div>

                {/* Registration Link */}
                <div className="shadow-custom dark:bg-backgroundColor2 rounded-lg p-8 text-center">
                    <h2 className="text-2xl font-bold mb-6">Ready to Join?</h2>
                    <p className="text-textColor3 mb-6">Click below to fill out our registration form</p>
                    <a
                        href="https://forms.gle/q3XDa4PUre9a4F1w9" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Register Now
                    </a>
                </div>
            </div>
        </div>
    );
}
