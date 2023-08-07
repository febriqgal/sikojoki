
import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import HumbergerIcon from "./icons/humburger";
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useRouter } from "next/navigation";
export default function DropdownNav() {
    const route = useRouter()
    const [value, setValue] = useState(0);
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (value) => {
        setValue(value);
    });
    return (
        <Dropdown>
            <DropdownTrigger>
                <button
                    className="border rounded-xl"
                >
                    <HumbergerIcon className={value >= 500 ? "h-9 fill-white" : "h-9 fill-primary"} />
                </button>
            </DropdownTrigger>
            <DropdownMenu onAction={(key) => { route.push(`${key}`) }} aria-label="Static Actions">

                <DropdownItem key="service">Service</DropdownItem>
                <DropdownItem key="portfolio">Portfolio</DropdownItem>
                <DropdownItem key="new">Kontak</DropdownItem>

            </DropdownMenu>
        </Dropdown>
    );
}
