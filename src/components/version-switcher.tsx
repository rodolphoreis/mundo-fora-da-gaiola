"use client";

import * as React from "react";

import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";

export function VersionSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <div className="flex flex-col gap-0.5 leading-none">
            <Link href="/">
              <Image
                src="/logo-green.png"
                alt="logo"
                width={330}
                height={200}
              />
            </Link>
          </div>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
