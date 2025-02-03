import * as React from "react";

import { SearchForm } from "@/components/search-form";
import { VersionSwitcher } from "@/components/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Controle Financeiro",
      url: "#",
      items: [
        {
          title: "Visão Geral",
          url: "#",
        },
        {
          title: "Despesas",
          url: "#",
        },
        {
          title: "Receitas",
          url: "#",
        },
        {
          title: "Categorias de Gasto",
          url: "#",
        },
      ],
    },
    {
      title: "Milhas Aéreas",
      url: "#",
      items: [
        {
          title: "Saldo de Milhas",
          url: "#",
        },
        {
          title: "Como Acumular Milhas",
          url: "#",
        },
        {
          title: "Resgatar Milhas",
          url: "#",
        },
        {
          title: "Dicas de Viagem",
          url: "#",
        },
      ],
    },
    {
      title: "Cartão de Crédito",
      url: "#",
      items: [
        {
          title: "Pontos Acumulados",
          url: "#",
        },
        {
          title: "Gastos no Cartão",
          url: "#",
        },
        {
          title: "Melhores Cartões",
          url: "#",
        },
        {
          title: "Dicas de Acúmulo de Pontos",
          url: "#",
        },
      ],
    },
    {
      title: "Investimentos e Planejamento",
      url: "#",
      items: [
        {
          title: "Investimentos Atuais",
          url: "#",
        },
        {
          title: "Planejamento Financeiro",
          url: "#",
        },
        {
          title: "Previsões e Metas",
          url: "#",
        },
      ],
    },
    {
      title: "Consultoria e Mentoria",
      url: "#",
      items: [
        {
          title: "Agenda de Sessões",
          url: "#",
        },
        {
          title: "Histórico de Sessões",
          url: "#",
        },
        {
          title: "Feedback e Acompanhamento",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((subItem) => (
                  <SidebarMenuItem key={subItem.title}>
                    <SidebarMenuButton asChild>
                      <a href={subItem.url}>{subItem.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
