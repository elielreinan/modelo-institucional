export interface ClientConfig {
  name: string;
  municipality: string;
  state: string;
  logoUrl: string;
  heroImage: string;
  heroImageAlt: string;
  heroImageCredit: string;
  heroImageCreditUrl: string;
  phone: string;
  email: string;
  address: string;
  officeHours: string;
  announcement: {
    enabled: boolean;
    title: string;
    message: string;
    link: string;
    linkLabel: string;
  };
  theme: {
    primary: string;
    primaryDark: string;
    accent: string;
    surface: string;
  };
}

export const client = {
  name: "Prefeitura de Vale do Sol",
  municipality: "Vale do Sol",
  state: "SP",
  logoUrl: "",
  heroImage: "/images/cidade-ilustrativa.jpg",
  heroImageAlt:
    "Rua histórica brasileira; imagem ilustrativa para substituir por uma foto do município",
  heroImageCredit: "Samuell Morgenstern / Unsplash",
  heroImageCreditUrl: "https://unsplash.com/pt-br/@photos_muka",
  phone: "(11) 4000-2025",
  email: "atendimento@valedosol.sp.gov.br",
  address: "Praça da República, 100 — Centro, Vale do Sol — SP",
  officeHours: "Segunda a sexta, das 8h às 17h",
  announcement: {
    enabled: true,
    title: "Comunicados da Prefeitura",
    message: "Acompanhe nesta página os avisos e as informações oficiais do município.",
    link: "/noticias",
    linkLabel: "Ver notícias",
  },
  theme: {
    primary: "#24533f",
    primaryDark: "#183b2d",
    accent: "#a17b46",
    surface: "#f5f4ef",
  },
} satisfies ClientConfig;
