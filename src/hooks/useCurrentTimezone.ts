// hooks/useCurrentTimezone.ts
import { useEffect, useState } from 'react';

interface TimezoneOption {
    value: string;
    label: string;
}

const useCurrentTimezone = (): TimezoneOption => {
    const [timezone, setTimezone] = useState<string>("");
    const [gmtOffset, setGMTOffset] = useState<string>("");

    useEffect(() => {
        // Get the current timezone
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setTimezone(tz);

        // Calculate GMT offset
        const offset = new Date().getTimezoneOffset();
        const hours = Math.floor(Math.abs(offset) / 60);
        setGMTOffset(hours < 0 ? `GMT${hours}` : `GMT+${hours}`);
    }, []);

    return {
        value: timezone,
        label: `${timezone} (${gmtOffset})`
    };
};

export default useCurrentTimezone;
