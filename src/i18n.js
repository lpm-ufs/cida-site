import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: {
          title: "Sobre",
          subtitle: "Contribuidor em inovações na ufs",
          researchAndExtension: "Pesquisa e extensão",
          description: "O espaco laboratorial do Centro de Inovacao em Durabilidade Acelerada (CIDA) fica localizado no NUPEG/UFS, salas 3 e 4 do Bloco C, conta com uma infraestrutura unica na area durabilidade, dinamica e vibroacustica do Nordeste Brasileiro, focado em prestacao de servicos a empresas do setor de energia e automotiva da rede de ICTs, alem do desenvolvimento de pesquisas avancadas nas areas de vibracoes, acustica, ensaios ambientais, ensaios Highly Accelerated Stress Test (HAST) a Highly Accelerated Life Test (HALT) e prototipagem. A seguir, apresenta-se alguns dos equipamentos disponiveis, como: Sistema de aquisicao de dados Dewesoft Sirius I, com 18 canais, sistema de aquisicao de dados National Instruments CompactDAQ com 13 canais; Sistema de aquisicao de dados Spider-81B Vibration Controller Crystal com 4 canais para controle de shaker em malha fechada, computadores servidores (32 GB de RAM) com licencas dos softwares LabVIEW, SolidWorks, ANSYS, PCDMIS, DewesoftX, entre outros, maquinas de medir coordenadas por braco articulado de medicao tridimensional Hexagon 7125, camara climatica modelo ASLI TH-408-D, Shaker eletrodinamico Sentek de 22 kN, modelo M2232A-PAE130-LST500M; Martelo de impacto instrumentado, modelo PCB 086C03, Impressoras 3D, fontes de alimentacao reguladas, multimetros, osciloscopio e gerador de sinais, balanca analitica de precisao entre outros.",
          instagram: "Instagram",
          email: "E-mail",
          equipmentsTitle: "Equipamentos",
          equipmentsDescription: "Aqui estão alguns dos equipamentos utilizados pelo laboratório.",
          contactTitle: "Contato",
          contactAddressTitle: "Endereço",
          contactAddressData: "Avenida Marechal Rondon Jardim s/n - Rosa Elze, São Cristóvão - SE, 49100-000",
          contactEmailTitle: "Email",
          contactEmailData: "alexandre.ramos@academico.ufs.br",
          contactExtensionTitle: "Ramal",
          contactExtensionData: "6315",
          contactName: "Alexandre Carlos Rodrigues Ramos",
          contactBio: "Doutorado em Engenharia Mecânica pela EESC-USP, Mestrado em Engenharia Mecânica pelo ITA, e graduação em Engenharia Mecatrônica pela EESC-USP.",

          studentsTitle: "Alunos",
          publicationsTitle: "Publicações",
          projectsTitle: "Projetos",
          all: "Todos"

        },
      },
      en: {
        translation: {
          title: "About",
          subtitle: "Contributor in innovations at UFS",
          researchAndExtension: "Research and Extension",
          description: "CIDA at NUPEG/UFS (Block C) focuses on durability, dynamics and vibroacoustics, providing research and services for the energy and automotive sectors. It runs accelerated tests (HAST/HALT), prototyping and offers advanced infrastructure.",
          instagram: "Instagram",
          email: "Email",
          equipmentsTitle: "Equipment",
          equipmentsDescription: "Here are some of the equipment used by the laboratory.",
          contactTitle: "Contact",
          contactAddressTitle: "Address",
          contactAddressData: "Avenida Marechal Rondon Jardim s/n - Rosa Elze, São Cristóvão - SE, 49100-000",
          contactEmailTitle: "Email",
          contactEmailData: "alexandre.ramos@academico.ufs.br",
          contactExtensionTitle: "Extension",
          contactExtensionData: "6315",
          contactName: "Alexandre Carlos Rodrigues Ramos",
          contactBio: "PhD in Mechanical Engineering from EESC-USP, Master's in Mechanical Engineering from ITA, and a degree in Mechatronic Engineering from EESC-USP.",
          studentsTitle: "Students",
          publicationsTitle: "Publications",
          projectsTitle: "Projects",
          all: "All"

        },
      },
      fr: {
        translation: {
          title: "À propos",
          subtitle: "Contributeur aux innovations à l'UFS",
          researchAndExtension: "Recherche et Extension",
          description: "Le CIDA, au NUPEG/UFS (Bloc C), se consacre a la durabilite, la dynamique et la vibroacoustique, avec recherche et services pour les secteurs de l'energie et de l'automobile. Il realise des essais accelerees (HAST/HALT), du prototypage et dispose d'une infrastructure avancee.",
          instagram: "Instagram",
          email: "Email",
          equipmentsTitle: "Équipements",
          equipmentsDescription: "Voici quelques-uns des équipements utilisés par le laboratoire.",
          contactTitle: "Contact",
          contactAddressTitle: "Adresse",
          contactAddressData: "Avenida Marechal Rondon Jardim s/n - Rosa Elze, São Cristóvão - SE, 49100-000",
          contactEmailTitle: "Email",
          contactEmailData: "alexandre.ramos@academico.ufs.br",
          contactExtensionTitle: "Poste",
          contactExtensionData: "6315",
          contactName: "Alexandre Carlos Rodrigues Ramos",
          contactBio: "Doctorat en génie mécanique de l'EESC-USP, maîtrise en génie mécanique de l'ITA et diplôme en génie mécatronique de l'EESC-USP.",

          studentsTitle: "Étudiants",
          publicationsTitle: "Publications",
            projectsTitle: "Projets",
            all: "Tous"






        },
      },
    },
    lng: 'pt', 
    fallbackLng: 'pt',
    interpolation: { escapeValue: false },
  });

export default i18n;


