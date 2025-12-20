"use client";

import { useState } from "react";
import { Star, Send } from "lucide-react";

export default function ReviewFunnel() {
    const [rating, setRating] = useState<number>(0);
    const [hoveredRating, setHoveredRating] = useState<number>(0);
    const [showForm, setShowForm] = useState(false);
    const [reviewSubmitted, setReviewSubmitted] = useState(false);
    const [feedback, setFeedback] = useState("");

    const googleReviewLink = "https://www.google.com/search?q=Strong+Construction+Services+texas+reviews&sca_esv=709dfd0b212bea1b&rlz=1C1OPNX_enUS983US983&sxsrf=AE3TifMFNGXIrLu_VSUAus_x-Q_2y6EtsQ%3A1766249425049&ei=0dNGaZ7mAruGptQPvMfX8Ao&ved=0ahUKEwjeksLsz8yRAxU7g4kEHbzjFa4Q4dUDCBE&uact=5&oq=Strong+Construction+Services+texas+reviews&gs_lp=Egxnd3Mtd2l6LXNlcnAiKlN0cm9uZyBDb25zdHJ1Y3Rpb24gU2VydmljZXMgdGV4YXMgcmV2aWV3czIIECEYoAEYsQYyCBAhGLEGGKsCMggQIRixBhirAkiJEFCZAljyB3ABeACQAQGYAasBoAGCB6oBAzIuNrgBA8gBAPgBAZgCCKAC8AXCAhEQABiABBiwAxixBhiGAxiKBcICCxAAGLADGLEGGO8FwgIOEAAYgAQYsAMYsQYYogSYAwCIBgGQBgmSBwMyLjagB6UlsgcDMS42uAfsBcIHBTEuNi4xyAcNgAgA&sclient=gws-wiz-serp&lqi=CipTdHJvbmcgQ29uc3RydWN0aW9uIFNlcnZpY2VzIHRleGFzIHJldmlld3MiAjgBSJydvpXHvICACFoyEAAQARACGAAYARgCGAMiInN0cm9uZyBjb25zdHJ1Y3Rpb24gc2VydmljZXMgdGV4YXOSAQ9odmFjX2NvbnRyYWN0b3KaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnRTY2xWVmVIbE9WbkJ1VkZWR1NFNHlSVEpaYXpRd1ZucFNOVm95WXhBQuABAPoBBQiuARBM#lkt=LocalPoiReviews&rlimm=13642760895960393853&lrd=0x63ef14e4d47b9af1:0xbd54d2c09f4f287d,3,,,,";

    const handleRatingClick = (selectedRating: number) => {
        setRating(selectedRating);
        if (selectedRating >= 4) {
            window.open(googleReviewLink, "_blank");
            setReviewSubmitted(true); // Treat as done
        } else {
            setShowForm(true);
        }
    };

    const handleFeedbackSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would send the feedback to an internal API
        console.log("Internal feedback:", feedback);
        setReviewSubmitted(true);
        setShowForm(false);
    };

    if (reviewSubmitted && rating >= 4) {
        return (
            <div className="py-12 px-6 bg-[#0f0f0f] text-center border-t border-white/5">
                <div className="max-w-xl mx-auto">
                    <Star className="w-12 h-12 text-[#ff4d1c] mx-auto mb-4" fill="#ff4d1c" />
                    <h3 className="text-2xl font-light text-white mb-2">Thank You!</h3>
                    <p className="text-neutral-400">We appreciate your feedback on Google.</p>
                </div>
            </div>
        );
    }

    if (reviewSubmitted && rating < 4) {
        return (
            <div className="py-12 px-6 bg-[#0f0f0f] text-center border-t border-white/5">
                <div className="max-w-xl mx-auto">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="w-6 h-6 text-[#ff4d1c]" />
                    </div>
                    <h3 className="text-2xl font-light text-white mb-2">Message Sent</h3>
                    <p className="text-neutral-400">Thank you for letting us know not to improve. We'll be in touch.</p>
                </div>
            </div>
        );
    }

    return (
        <section className="py-24 px-6 bg-[#0f0f0f] border-t border-white/5">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-light text-white mb-6 uppercase tracking-tight">
                    Rate Your Experience
                </h2>
                <p className="text-neutral-400 mb-12 max-w-xl mx-auto">
                    Your satisfaction is our priority. Please rate your experience with Strong Construction Services.
                </p>

                {!showForm ? (
                    <div className="flex justify-center gap-2 mb-8">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                className="transition-transform hover:scale-110 focus:outline-hidden"
                                onMouseEnter={() => setHoveredRating(star)}
                                onMouseLeave={() => setHoveredRating(0)}
                                onClick={() => handleRatingClick(star)}
                            >
                                <Star
                                    className={`w-10 h-10 md:w-12 md:h-12 transition-colors duration-200 ${star <= (hoveredRating || rating)
                                        ? "text-[#ff4d1c] fill-[#ff4d1c]"
                                        : "text-neutral-700"
                                        }`}
                                />
                            </button>
                        ))}
                    </div>
                ) : (
                    <form onSubmit={handleFeedbackSubmit} className="max-w-md mx-auto bg-white/5 p-8 rounded-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h3 className="text-white text-lg font-medium mb-4 text-left">How can we improve?</h3>
                        <textarea
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            required
                            className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white text-sm focus:border-[#ff4d1c] focus:outline-hidden mb-6 min-h-[120px] resize-none"
                            placeholder="Tell us what went wrong..."
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#ff4d1c] hover:bg-[#c2410c] text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                            Submit Feedback
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
