import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">

            {/* Hero Section */}
            <section className="flex flex-col-reverse sm:flex-row items-center justify-between px-4 sm:px-16 py-16">
                <div className="sm:w-1/2 text-center sm:text-left space-y-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Empower Your Productivity</h1>
                    <p className="text-gray-600 text-lg">
                        Manage, track, and grow—all in one place. Start your journey with us today!
                    </p>
                    <Link
                        to="/"
                        className="inline-block bg-orange-700 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-800 transition"
                    >
                        Get Started
                    </Link>
                </div>
                <img
                    src="https://unpkg.com/illustrations@0.1.0/undraw_mobile_devices_k1ok.svg"
                    alt="Hero"
                    className="sm:w-1/2 w-80 mb-10 sm:mb-0"
                />
            </section>

            {/* Features Section */}
            <section className="bg-gray-50 py-20 px-4 sm:px-16">
                <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
                <div className="grid gap-12 sm:grid-cols-3 text-center">
                    {/* Feature 1 */}
                    <div>
                        <img
                            src="https://unpkg.com/illustrations@0.1.0/undraw_secure_login_pdn4.svg"
                            alt="Secure"
                            className="w-32 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold">Secure Access</h3>
                        <p className="text-gray-600">Your data is safe with our top-notch authentication.</p>
                    </div>
                    {/* Feature 2 */}
                    <div>
                        <img
                            src="https://unpkg.com/illustrations@0.1.0/undraw_analytics_re_dkf8.svg"
                            alt="Analytics"
                            className="w-32 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold">Real-Time Analytics</h3>
                        <p className="text-gray-600">Track your performance and stay ahead with insights.</p>
                    </div>
                    {/* Feature 3 */}
                    <div>
                        <img
                            src="https://unpkg.com/illustrations@0.1.0/undraw_team_collaboration_re_ow29.svg"
                            alt="Teamwork"
                            className="w-32 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold">Team Collaboration</h3>
                        <p className="text-gray-600">Work better together with seamless tools for teams.</p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 px-4 sm:px-16 text-center">
                <h2 className="text-4xl font-bold mb-6">Ready to Make a Change?</h2>
                <p className="text-gray-700 text-lg mb-8">Join thousands of users who are already boosting their productivity.</p>
                <Link
                    to="/"
                    className="bg-orange-700 text-white px-8 py-4 text-lg font-medium rounded-lg hover:bg-orange-800 transition"
                >
                    Join Now
                </Link>
            </section>
        </div>
    );
}
