"use client"

import { useRouter, usePathname, Locale } from '@/navigation';
import { ChangeEvent, useTransition } from "react";


const SelectLanguage = ({ lang, localeActive }: any) => {
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    const pathname = usePathname()

    const handleChangeLanguage = async (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value as Locale
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        })
    }

    return (
        <select className="max-w-20 border-2 border-purple-700 rounded bg-transparent outline-none" name="lang" id="lang" defaultValue={localeActive} onChange={handleChangeLanguage} disabled={isPending}>
            {lang.map((item: any) =>
                <option key={item.id} value={item.value}>{item.name}</option>
            )}
        </select>)
}

export default SelectLanguage