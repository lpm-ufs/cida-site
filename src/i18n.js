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
          description: "O espaço laboratorial do Centro de Inovação em Durabilidade Acelerada (CIDA) fica localizado no NUPEG/UFS, salas 3 e 4 do Bloco C, conta com uma infraestrutura única na área durabilidade, dinâmica e vibroacústica do Nordeste Brasileiro, focado em prestação de serviços a empresas do setor de energia e automotiva da rede de ICTs,  além do desenvolvimento de pesquisas avançadas nas áreas de vibrações, acústica, ensaios ambientais,  ensaios Highly Accelerated Stress Test (HAST) a Highly Accelerated Life Test (HALT) e prototipagem. A seguir, apresenta-se alguns dos equipamentos disponíveis, como: Sistema de aquisição de dados Dewesoft Sirius I, com 18 canais, sistema de aquisição de dados National Instruments CompactDAQ com 13 canais; Sistema de aquisição de dados Spider-81B Vibration Controller Crystal com 4 canais para controle de shaker em malha fechada,  computadores servidores (32 GB de RAM) com licenças dos softwares LabVIEW, SolidWorks, ANSYS, PCDMIS, DewesoftX, entre outros, máquinas de medir coordenadas por braço articulado de medição tridimensional Hexagon 7125, câmara climática modelo ASLI TH-408-D, Shaker eletrodinâmico Sentek de 22 kN, modelo M2232A-PAE130-LST500M; Martelo de impacto instrumentado, modelo PCB 086C03, Impressoras 3D, fontes de alimentação reguladas, multímetros, osciloscópio e gerador de sinais, balança analítica de precisão entre outros.",
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
          description: "The laboratory facilities of the Center for Innovation in Accelerated Durability (CIDA) are located at NUPEG/UFS, rooms 3 and 4 of Block C. They feature a unique infrastructure in the areas of durability, dynamics, and vibroacoustics in Northeast Brazil, with a focus on providing services to companies in the energy and automotive sectors within the ICT network, as well as on the development of advanced research in the fields of vibrations, acoustics, environmental testing, Highly Accelerated Stress Tests (HAST), Highly Accelerated Life Tests (HALT), and prototyping.The available equipment includes, among others: a Dewesoft Sirius I data acquisition system with 18 channels; a National Instruments CompactDAQ data acquisition system with 13 channels; a Spider-81B Crystal vibration controller with 4 channels for closed-loop shaker control; server computers (32 GB RAM) with licensed software such as LabVIEW, SolidWorks, ANSYS, PC-DMIS, DewesoftX, among others; a Hexagon 7125 articulated arm three-dimensional coordinate measuring machine; an ASLI TH-408-D climatic chamber; a 22 kN Sentek electrodynamic shaker, model M2232A-PAE130-LST500M; an instrumented impact hammer, model PCB 086C03; 3D printers; regulated power supplies; multimeters; oscilloscope and signal generator; an analytical precision balance; and other auxiliary equipment.",
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
          description: "Les installations de laboratoire du Centre d’Innovation en Durabilité Accélérée (CIDA) sont situées au NUPEG/UFS, salles 3 et 4 du Bloc C. Elles disposent d’une infrastructure unique dans le domaine de la durabilité, de la dynamique et de la vibroacoustique dans le Nordeste brésilien, avec un accent mis sur la prestation de services aux entreprises des secteurs de l’énergie et de l’automobile du réseau des ICT, ainsi que sur le développement de recherches avancées dans les domaines des vibrations, de l’acoustique, des essais environnementaux, des essais de contraintes hautement accélérées (HAST), des essais de durée de vie hautement accélérés (HALT) et de la prototypage. Parmi les équipements disponibles figurent notamment : un système d’acquisition de données Dewesoft Sirius I à 18 voies ; un système d’acquisition de données National Instruments CompactDAQ à 13 voies ; un contrôleur de vibrations Spider-81B Crystal à 4 voies pour le contrôle en boucle fermée de shaker ; des ordinateurs serveurs (32 Go de RAM) dotés de licences des logiciels LabVIEW, SolidWorks, ANSYS, PC-DMIS, DewesoftX, entre autres ; une machine de mesure tridimensionnelle à bras articulé Hexagon 7125 ; une chambre climatique modèle ASLI TH-408-D ; un shaker électrodynamique Sentek de 22 kN, modèle M2232A-PAE130-LST500M ; un marteau d’impact instrumenté, modèle PCB 086C03 ; des imprimantes 3D ; des alimentations stabilisées ; des multimètres ; un oscilloscope et un générateur de signaux ; une balance analytique de précision, ainsi que d’autres équipements auxiliaires.",
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
