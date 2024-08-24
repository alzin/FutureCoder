"use client"

import { useRouter, usePathname } from "next/navigation";

import { ChangeEvent, useTransition } from "react";

const SelectLanguage = ({ lang, localeActive }: any) => {
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    const pathname = usePathname()

    const handleChangeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value
        let path: string = `/${nextLocale}`

        if (nextLocale === "en") {
            path += `${pathname?.slice(3)}`
        }
        else {
            path += `${pathname}`
        }

        startTransition(() => {
            router.replace(path);
        })
    }

    return (
        <select className="max-w-20" name="lang" id="lang" defaultValue={localeActive} onChange={handleChangeLanguage} disabled={isPending}>
            {lang.map((item: any) =>
                <option key={item.id} value={item.value}>{item.name}</option>
            )}
        </select>)
}

export default SelectLanguage