import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from "@nextui-org/react";

import SelectLanguage from "@/components/SelectLanguage";

const Header = ({ data }: any) => {


    return (
        <Navbar isBordered maxWidth="xl">

            {/* burger */}
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>

            {/* mobile */}
            <NavbarMenu className="bg-slate-800 overflow-hidden">
                {data.navItems.map((item:any) => (
                    <NavbarMenuItem key={item.id}>
                        <Link className="w-full" href={item.href} size="lg">
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
                <SelectLanguage lang={data.langList} localeActive={data.lang} />
            </NavbarMenu>

            {/* items */}
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {data.navItems.map((item:any)  => (
                        <NavbarItem key={item.id}>
                            <Link color="foreground" href={item.href}>
                                {item.name}
                            </Link>
                        </NavbarItem>
                ))}
                <SelectLanguage lang={data.langList} localeActive={data.lang} />

            </NavbarContent>

            {/* logo */}
            <NavbarContent justify="center" className="w-full ">
                <NavbarBrand className="flex items-center justify-center">
                    <Link color="foreground" href="/">
                        <p className="font-bold text-inherit">LOGO</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            {/* log in */}
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} href="/login" variant="flat">
                        {data.logIn}
                    </Button>
                </NavbarItem>
            </NavbarContent>

        </Navbar>
    );
}

export default Header