"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, ArrowRight, MessageSquare, ThumbsUp } from "lucide-react";

export default function ReviewFunnelPage() {
    const [rating, setRating] = useState<number>(0);
    const [hoverRating, setHoverRating] = useState<number>(0);
    const [feedback, setFeedback] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const googleReviewUrl = "https://www.google.com/search?q=Crossworks+Carpentry+marietta+ga+reviews";

    const handleRating = (stars: number) => {
        setRating(stars);
        if (stars >= 4) {
            // Redirect to Google Reviews for high ratings
            window.location.href = googleReviewUrl;
        }
    };

    const handleSubmitFeedback = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the feedback to your backend/API
        console.log("Internal Feedback:", { rating, feedback });
        setSubmitted(true);
    };

    return (
        <>
            <Header />
            <div className="pt-32 pb-24 px-6 md:px-12 bg-[#f5f5f5] min-h-screen text-[#0f0f0f] flex items-center justify-center">
                <div className="max-w-2xl w-full bg-white p-8 md:p-16 rounded-2xl shadow-sm border border-neutral-200 text-center">

                    {!submitted ? (
                        <>
                            {rating === 0 || rating >= 4 ? (
                                <div className="space-y-8 animate-in fade-in duration-500">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#ff4d1c]/10 text-[#ff4d1c] mb-4">
                                        <ThumbsUp className="w-8 h-8" />
                                    </div>
                                    <h1 className="text-3xl md:text-4xl font-medium uppercase tracking-tight">How did we do?</h1>
                                    <p className="text-neutral-600 text-lg font-light max-w-md mx-auto">
                                        Your feedback helps us maintain the high standards of Crossworks Carpentry.
                                    </p>

                                    <div className="flex justify-center gap-2 md:gap-4 py-8">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                onMouseEnter={() => setHoverRating(star)}
                                                onMouseLeave={() => setHoverRating(0)}
                                                onClick={() => handleRating(star)}
                                                className="transition-transform hover:scale-110 focus:outline-none"
                                            >
                                                <Star
                                                    className={`w-8 h-8 md:w-12 md:h-12 transition-colors duration-200 ${(hoverRating || rating) >= star
                                                            ? "fill-[#ff4d1c] text-[#ff4d1c]"
                                                            : "fill-transparent text-neutral-300"
                                                        }`}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                    <p className="text-xs text-neutral-400 uppercase tracking-widest">Select a Star Rating</p>
                                </div>
                            ) : (
                                // 1-3 Stars: Internal Feedback Form
                                <form onSubmit={handleSubmitFeedback} className="space-y-8 animate-in slide-in-from-bottom-4 duration-500 text-left">
                                    <div className="text-center">
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-100 text-neutral-600 mb-4">
                                            <MessageSquare className="w-8 h-8" />
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-medium uppercase tracking-tight mb-2">We appreciate your feedback</h2>
                                        <p className="text-neutral-600 font-light">
                                            Please let us know how we can improve your experience.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-xs uppercase tracking-widest text-neutral-500 font-medium">What could we have done better?</label>
                                        <textarea
                                            value={feedback}
                                            onChange={(e) => setFeedback(e.target.value)}
                                            required
                                            rows={5}
                                            className="w-full bg-[#f9f9f9] border border-neutral-200 p-4 text-black focus:border-[#ff4d1c] focus:outline-none transition-colors rounded-lg placeholder:text-neutral-400 resize-none"
                                            placeholder="Tell us about your experience..."
                                        />
                                    </div>

                                    <div className="flex gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setRating(0)} // Reset
                                            className="px-6 py-4 rounded-lg text-neutral-500 hover:bg-neutral-100 transition-colors uppercase tracking-widest text-xs font-medium"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="flex-1 bg-[#ff4d1c] text-white py-4 rounded-lg uppercase tracking-widest text-xs font-bold hover:bg-[#c2410c] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#ff4d1c]/20"
                                        >
                                            Submit Feedback
                                        </button>
                                    </div>
                                </form>
                            )}
                        </>
                    ) : (
                        // Submitted State
                        <div className="space-y-6 py-12 animate-in zoom-in duration-500">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-4">
                                <Check className="w-10 h-10" />
                            </div>
                            <h2 className="text-3xl font-medium uppercase tracking-tight">Thank You!</h2>
                            <p className="text-neutral-600 text-lg font-light max-w-md mx-auto">
                                We've received your feedback and will review it shortly. Your input helps us build better.
                            </p>
                            <a href="/" className="inline-block mt-8 text-[#ff4d1c] text-sm uppercase tracking-widest font-medium hover:underline">
                                Return Home
                            </a>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

// Icon for success state
function Check({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    );
}
