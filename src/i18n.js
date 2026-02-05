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
          description: "The laboratory space of the Center for Innovation in Accelerated Durability (CIDA) is located at NUPEG/UFS, rooms 3 and 4 of Block C. It has unique infrastructure in the areas of durability, dynamics, and vibroacoustics in Northeast Brazil, focused on providing services to companies in the energy and automotive sectors of the ICT network, in addition to developing advanced research in vibrations, acoustics, environmental tests, Highly Accelerated Stress Tests (HAST), Highly Accelerated Life Tests (HALT), and prototyping. The available equipment includes: a Dewesoft Sirius I data acquisition system with 18 channels; a National Instruments CompactDAQ data acquisition system with 13 channels; a Spider-81B Crystal Vibration Controller data acquisition system with 4 channels for closed-loop shaker control; server computers (32 GB RAM) with licenses for LabVIEW, SolidWorks, ANSYS, PCDMIS, DewesoftX, among others; a Hexagon 7125 articulated-arm three-dimensional coordinate measuring machine; an ASLI TH-408-D climate chamber; a 22 kN Sentek electrodynamic shaker, model M2232A-PAE130-LST500M; an instrumented impact hammer, model PCB 086C03; 3D printers; regulated power supplies; multimeters; oscilloscope and signal generator; an analytical precision balance; among others.",
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
          description: "L'espace de laboratoire du Centre d'Innovation en Durabilite Acceleree (CIDA) est situe au NUPEG/UFS, salles 3 et 4 du Bloc C. Il dispose d'une infrastructure unique dans les domaines de la durabilite, de la dynamique et de la vibroacoustique dans le Nord-Est bresilien, axee sur la prestation de services aux entreprises des secteurs de l'energie et de l'automobile du reseau d'ICT, en plus du developpement de recherches avancees dans les domaines des vibrations, de l'acoustique, des essais environnementaux, des essais Highly Accelerated Stress Test (HAST), des essais Highly Accelerated Life Test (HALT) et du prototypage. Les equipements disponibles comprennent : un systeme d'acquisition de donnees Dewesoft Sirius I a 18 voies ; un systeme d'acquisition de donnees National Instruments CompactDAQ a 13 voies ; un systeme d'acquisition de donnees Spider-81B Vibration Controller Crystal a 4 voies pour le controle en boucle fermee du shaker ; des ordinateurs serveurs (32 Go de RAM) avec licences des logiciels LabVIEW, SolidWorks, ANSYS, PCDMIS, DewesoftX, entre autres ; une machine a mesurer tridimensionnelle a bras articule Hexagon 7125 ; une chambre climatique modele ASLI TH-408-D ; un shaker electrodynamique Sentek de 22 kN, modele M2232A-PAE130-LST500M ; un marteau d'impact instrumente, modele PCB 086C03 ; des imprimantes 3D ; des alimentations regulees ; des multimetres ; un oscilloscope et un generateur de signaux ; une balance analytique de precision ; entre autres.",
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



