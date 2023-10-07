import { choose, instagram, linkedin, playWithThem, practice, twitter, yourwords } from "../assets";
 const navLinks = [
  {
    id: "what",
    title: "¿Qué es?",
  },
  {
    id: "about",
    title: "¿Cómo es?",
  },
  {
    id: "contact",
    title: "Contáctame",
  },
];
  const socialNetWorks = [
    {
      platform: "LinkedIn",
      img: linkedin,
      url: "https://www.linkedin.com/in/felipe-arango-developer/"
    },
    {
      platform: "Instagram",
      img: instagram,
      url: "https://www.instagram.com/felipearango97/"
    },
    {
        platform: "Twitter",
        img: twitter,
        url: "https://twitter.com/_felipe_arango_"
      },
    
  ]

  const experiences = [
    
    {
      title: "Entréna para competir",
      company_name: "Disponible",
      icon: choose,
      iconBg: "#E6DEDD",
      points: [
        "Podrás tomar las actividades sólo para prepararte y ganar.",
        

      ],
    },
    {
      title: "Aprende con personas al mismo tiempo",
      company_name: "Muy pronto",
      icon: practice,
      iconBg: "#383E56",
      points: [
        "Juega los distintos juegos con las personas conectadas.",
        "Al finalizar, si ganas, obtendrás puntos.",
      ],
    },
    {
      title: "Juega en equipo",
      company_name: "Muy pronto",
      icon: yourwords,
      iconBg: "#383E56",
      points: [
        "Para los que no les gusta competir.",
      ],
    },
    {
      title: "Crea tú los juegos",
      company_name: "Muy pronto",
      icon: playWithThem,
      iconBg: "#E6DEDD",
      points: [
        "Con los puntos que vas ganando podrás crear actividades y juegos para que los demás los utilicen.",

      ],
    },
  ];
  
  export { socialNetWorks,  experiences, navLinks };