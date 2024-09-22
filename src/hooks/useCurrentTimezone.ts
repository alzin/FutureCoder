// hooks/useCurrentTimezone.ts
import { useEffect, useState, } from 'react';
import useLocalStorage from './useLocalStorage';

interface TimezoneOption {
    timeZone: string;
}

const useCurrentTimezone = (): TimezoneOption => {
    const [timeZone, setTimeZone] = useState<string>("");
    const { setValue } = useLocalStorage()
    // const [gmtOffset, setGMTOffset] = useState<string>("");

    useEffect(() => {
        // Get the current timezone
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setTimeZone(tz);
        setValue("timezone", tz)

        // Calculate GMT offset
        // const offset = new Date().getTimezoneOffset();
        // const hours = Math.floor(Math.abs(offset) / 60);
        // setGMTOffset(hours < 0 ? `GMT${hours}` : `GMT+${hours}`);
    }, [setValue]);

    return { timeZone };
};

export default useCurrentTimezone;
