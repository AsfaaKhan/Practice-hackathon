"use client"

import { useState, useEffect } from "react";

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        Days: 0,
        Hours: 0,
        Minutes: 0,
        Seconds: 0,
    });

    // Target date
    const targetDate = new Date("2025-02-31T23:59:59").getTime(); // Replace with your target date

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const Days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const Hours = Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const Minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const Seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ Days, Hours, Minutes, Seconds });
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="flex space-x-6">
            {Object.entries(timeLeft).map(([label, value], index) => (
                <div key={index} className="flex  justify-center items-center gap-3 ">
                    <div className="text-center">
                        <p className="text-sm text-gray-500">{label}</p>

                        <p className="text-4xl font-bold">{value.toString().padStart(2, "0")}</p>

                    </div>
                    <div className="flex justify-center items-center text-red font-bold ">
                        {index < 3 && <span className="text-2xl">:</span>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CountdownTimer;
