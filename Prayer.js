import React, { useState, useEffect } from 'react';
import '../App.css'; // Using your existing styling

const Prayer = () => {
    const [timings, setTimings] = useState(null);
    const [city] = useState("Lahore"); // You can change this to any city
    const [country] = useState("Pakistan");

    useEffect(() => {
        // Fetching data from Aladhan API
        fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=1`)
            .then(response => response.json())
            .then(data => setTimings(data.data.timings))
            .catch(error => console.error("Error fetching prayer times:", error));
    }, [city, country]);

    if (!timings) return <div className="text-center py-5 text-white">Loading Prayer Times...</div>;

    const prayerList = [
        { name: "Fajr", time: timings.Fajr },
        { name: "Dhuhr", time: timings.Dhuhr },
        { name: "Asr", time: timings.Asr },
        { name: "Maghrib", time: timings.Maghrib },
        { name: "Isha", time: timings.Isha }
    ];

    return (
        <div className="container py-5 mt-5">
            <h2 className="text-center mb-5 fw-bold text-white">
                PRAYER <span className="text-danger">TIMINGS</span>
            </h2>
            <p className="text-center text-muted mb-4">Location: {city}, {country}</p>
            
            <div className="row g-4 justify-content-center">
                {prayerList.map((prayer, index) => (
                    <div className="col-md-4 col-lg-2" key={index}>
                        <div className="custom-card text-center p-4 shadow" 
                             style={{ background: 'rgba(0,0,0,0.8)', border: '1px solid #ff2e2e' }}>
                            <h5 className="text-danger fw-bold">{prayer.name}</h5>
                            <h3 className="text-white mt-2">{prayer.time}</h3>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-5 text-center">
                <div className="sale p-3">
                    "Prayer is better than sleep"
                </div>
            </div>
        </div>
    );
};

export default Prayer;