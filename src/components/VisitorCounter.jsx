import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

const VisitorCounter = () => {
    const [count, setCount] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Using a unique namespace for your portfolio
        // This will count hits to your site
        const fetchCount = async () => {
            const namespace = 'anjiladhikari-portfolio';
            const key = 'visits';

            try {
                // Try to increment first
                let response = null;
                try {
                    response = await fetch(`https://api.counterapi.dev/v1/${namespace}/${key}/up`);
                } catch {
                    // Blocked or offline: 
                    // fall through to the plain read below
                }

                if (response && response.ok) {
                    const data = await response.json();
                    if (data && typeof data.count === 'number') {
                        setCount(data.count);
                        setLoading(false);
                        return;
                    }
                }

                // If increment failed (e.g. rate limit),
                //  try to just get the count
                const getResponse = await fetch(`https://api.counterapi.dev/v1/${namespace}/${key}/`);
                if (getResponse.ok) {
                    const data = await getResponse.json();
                    if (data && typeof data.count === 'number') {
                        setCount(data.count);
                    }
                }

            } catch (error) {
                console.error("Error fetching visitor count:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCount();
    }, []);

    if (loading) return (
        <div className="flex items-center justify-center space-x-2 text-gray-500 text-xs">
            <Eye size={14} />
            <span>Views</span>
        </div>
    );

    return (
        <div className="flex items-center justify-center space-x-2 text-gray-500 text-xs">
            <Eye size={14} />
            <span>{count !== null ? `${count.toLocaleString()} Views` : 'Views'}</span>
        </div>
    );
};

export default VisitorCounter;
