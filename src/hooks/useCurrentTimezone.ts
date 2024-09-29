// hooks/useCurrentTimezone.ts
import { useEffect, useState, } from 'react';
import useLocalStorage from './useLocalStorage';

interface TimezoneOption {
    timeZone: string;
}

const useCurrentTimezone = (): TimezoneOption => {
    const [timeZone, setTimeZone] = useState<string>("");
    const { setValue } = useLocalStorage()

    useEffect(() => {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setTimeZone(tz);
        setValue("timezone", tz)
    }, [setValue, timeZone]);

    return { timeZone };
};

export default useCurrentTimezone;
