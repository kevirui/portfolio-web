import { useTranslation } from "react-i18next";

export const Lists = () => {
  const { t } = useTranslation();

  const categorias = [
    { key: "web", label: t("webCat") },
    { key: "data", label: t("ds") },
  ];

  /* Web
{
        img: "/Img/Iconos/Tecnologias/typescript.svg",
        alt: "TypeScript",
        url: "https://www.typescriptlang.org/",
      },
      {
        img: "/Img/Iconos/Tecnologias/react_light.svg",
        alt: "React",
        url: "https://reactjs.org/",
      },
      {
        img: "/Img/Iconos/Tecnologias/node.svg",
        alt: "NodeJS",
        url: "https://nodejs.org/",
      },
      {
        img: "/Img/Iconos/Tecnologias/pgq.svg",
        alt: "PostgreSQL",
        url: "https://www.postgresql.org/",
      },
      {
        img: "/Img/Iconos/Tecnologias/mgb.svg",
        alt: "MongoDB",
        url: "https://www.mongodb.com/",
      },
      {
        img: "/Img/Iconos/Tecnologias/nextdotjs.svg",
        alt: "NextJS",
        url: "https://nextjs.org/",
      },
      {
        img: "/Img/Iconos/Tecnologias/cypress.svg",
        alt: "Cypress",
        url: "https://www.cypress.io/",
      },
      {
        img: "/Img/Iconos/Tecnologias/swagger.svg",
        alt: "SwaggerDoc",
        url: "https://swagger.io/",
      },
      {
        img: "/Img/Iconos/Tecnologias/express.svg",
        alt: "Express",
        url: "https://expressjs.com/",
      },
      {
        img: "/Img/Iconos/Tecnologias/docker.svg",
        alt: "Docker",
        url: "https://www.docker.com/",
      },
      {
        img: "/Img/Iconos/Tecnologias/jest.svg",
        alt: "Jest",
        url: "https://jestjs.io/",
      },

*/

  const proyectosWeb = [
    {
      title: "Kiosco",
      desc: t("kiosco"),
      img: "/Img/Proyectos/web/P7.png",
      url: "https://kiosco-next-app-router.vercel.app/",
      category: "web",
      techs: [
        {
          img: "/Img/Iconos/Tecnologias/typescript.svg",
          alt: "TypeScript",
          url: "https://www.typescriptlang.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/react_light.svg",
          alt: "React",
          url: "https://reactjs.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/node.svg",
          alt: "NodeJS",
          url: "https://nodejs.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/express.svg",
          alt: "Express",
          url: "https://expressjs.com/",
        },
        {
          img: "/Img/Iconos/Tecnologias/swagger.svg",
          alt: "SwaggerDoc",
          url: "https://swagger.io/",
        },
        {
          img: "/Img/Iconos/Tecnologias/nextdotjs.svg",
          alt: "NextJS",
          url: "https://nextjs.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/pgq.svg",
          alt: "PostgreSQL",
          url: "https://www.postgresql.org/",
        },
      ],
    },
    {
      title: "GuitarLA",
      desc: t("guitarLa"),
      img: "/Img/Proyectos/web/P1.png",
      url: "https://guitar-la-green.vercel.app/",
      category: "web",
      techs: [
        {
          img: "/Img/Iconos/Tecnologias/typescript.svg",
          alt: "TypeScript",
          url: "https://www.typescriptlang.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/react_light.svg",
          alt: "React",
          url: "https://reactjs.org/",
        },
      ],
    },
    {
      title: "WeatherApp",
      desc: t("weatherApp"),
      img: "/Img/Proyectos/web/P2.png",
      url: "https://weather-plaftorm.vercel.app/",
      category: "web",
      techs: [
        {
          img: "/Img/Iconos/Tecnologias/typescript.svg",
          alt: "TypeScript",
          url: "https://www.typescriptlang.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/react_light.svg",
          alt: "React",
          url: "https://reactjs.org/",
        },
      ],
    },
    {
      title: "Tip Calculator",
      desc: t("tipCalc"),
      img: "/Img/Proyectos/web/P8.png",
      url: "https://calcutips.vercel.app/",
      category: "web",
      techs: [
        {
          img: "/Img/Iconos/Tecnologias/typescript.svg",
          alt: "TypeScript",
          url: "https://www.typescriptlang.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/react_light.svg",
          alt: "React",
          url: "https://reactjs.org/",
        },
      ],
    },
    {
      title: "Calorie Tracker",
      desc: t("calTracker"),
      img: "/Img/Proyectos/web/P4.png",
      url: "https://calorie-tracker-neon.vercel.app/",
      category: "web",
      techs: [
        {
          img: "/Img/Iconos/Tecnologias/typescript.svg",
          alt: "TypeScript",
          url: "https://www.typescriptlang.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/react_light.svg",
          alt: "React",
          url: "https://reactjs.org/",
        },
      ],
    },
    {
      title: "Crypto Rate Checker",
      desc: t("crypto"),
      img: "/Img/Proyectos/web/P3.png",
      url: "https://crypto-trader-sooty.vercel.app/",
      category: "web",
      techs: [
        {
          img: "/Img/Iconos/Tecnologias/typescript.svg",
          alt: "TypeScript",
          url: "https://www.typescriptlang.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/react_light.svg",
          alt: "React",
          url: "https://reactjs.org/",
        },
      ],
    },
    {
      title: "Cocktail Finder",
      desc: t("finder"),
      img: "/Img/Proyectos/web/P5.png",
      url: "https://cocktail-finder-lac.vercel.app/",
      category: "web",
      techs: [
        {
          img: "/Img/Iconos/Tecnologias/typescript.svg",
          alt: "TypeScript",
          url: "https://www.typescriptlang.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/react_light.svg",
          alt: "React",
          url: "https://reactjs.org/",
        },
      ],
    },
    {
      title: "UpTask - Plataforma de Gestión de Proyectos",
      desc: t("upTask"),
      img: "/Img/Proyectos/web/P6.png",
      url: "https://uptask-frontend-snowy.vercel.app/",
      category: "web",
      techs: [
        {
          img: "/Img/Iconos/Tecnologias/typescript.svg",
          alt: "TypeScript",
          url: "https://www.typescriptlang.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/react_light.svg",
          alt: "React",
          url: "https://reactjs.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/node.svg",
          alt: "NodeJS",
          url: "https://nodejs.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/mgb.svg",
          alt: "MongoDB",
          url: "https://www.mongodb.com/",
        },
        {
          img: "/Img/Iconos/Tecnologias/express.svg",
          alt: "Express",
          url: "https://expressjs.com/",
        },
      ],
    },
  ];

  /* Data

      {
        img: "/Img/Iconos/Tecnologias/python.svg",
        alt: "Python",
        url: "https://www.python.org/",
      },
      {
        img: "/Img/Iconos/Tecnologias/scikitlearn.svg",
        alt: "Scikit-Learn",
        url: "https://scikit-learn.org/",
      },
      {
        img: "/Img/Iconos/Tecnologias/pandas.svg",
        alt: "Pandas",
        url: "https://pandas.pydata.org/",
      },
      {
        img: "/Img/Iconos/Tecnologias/numpy.svg",
        alt: "Numpy",
        url: "https://numpy.org/",
      },
      {
        img: "/Img/Iconos/Tecnologias/Matplotlib.svg",
        alt: "MatplotLib",
        url: "https://matplotlib.org/stable/",
      },
      {
        img: "/Img/Iconos/Tecnologias/seaborn.svg",
        alt: "Seaborn",
        url: "https://seaborn.pydata.org/",
      },

*/

  const proyectosDS = [
    {
      title: "Challenge Alura Telecom X",
      desc: t("telecom"),
      img: "/Img/Proyectos/data science/challenge-alura-telecom-2.png",
      url: "https://github.com/kevirui/challenge-telecom-x",
      category: "data",
      techs: [
        {
          img: "/Img/Iconos/Tecnologias/python.svg",
          alt: "Python",
          url: "https://www.python.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/pandas.svg",
          alt: "Pandas",
          url: "https://pandas.pydata.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/numpy.svg",
          alt: "Numpy",
          url: "https://numpy.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/Matplotlib.svg",
          alt: "MatplotLib",
          url: "https://matplotlib.org/stable/",
        },
        {
          img: "/Img/Iconos/Tecnologias/scikitlearn.svg",
          alt: "Scikit-Learn",
          url: "https://scikit-learn.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/seaborn.svg",
          alt: "Seaborn",
          url: "https://seaborn.pydata.org/",
        },
      ],
    },
    {
      title: "Clasificación de Modelos y Métricas",
      desc: t("models"),
      img: "/Img/Proyectos/data science/4ClasificacionMetricas.png",
      url: "https://github.com/kevirui/Clasificacion-de-modelos-y-metricas",
      category: "data",
      techs: [
        {
          img: "/Img/Iconos/Tecnologias/python.svg",
          alt: "Python",
          url: "https://www.python.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/pandas.svg",
          alt: "Pandas",
          url: "https://pandas.pydata.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/numpy.svg",
          alt: "Numpy",
          url: "https://numpy.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/Matplotlib.svg",
          alt: "MatplotLib",
          url: "https://matplotlib.org/stable/",
        },
        {
          img: "/Img/Iconos/Tecnologias/scikitlearn.svg",
          alt: "Scikit-Learn",
          url: "https://scikit-learn.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/seaborn.svg",
          alt: "Seaborn",
          url: "https://seaborn.pydata.org/",
        },
      ],
    },
    {
      title: "Clasificando datos con Machine Learning",
      desc: t("ml"),
      img: "/Img/Proyectos/data science/3Clasificacion.png",
      url: "https://github.com/kevirui/Clasificando-datos-ml",
      category: "data",
      techs: [
        {
          img: "/Img/Iconos/Tecnologias/python.svg",
          alt: "Python",
          url: "https://www.python.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/pandas.svg",
          alt: "Pandas",
          url: "https://pandas.pydata.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/numpy.svg",
          alt: "Numpy",
          url: "https://numpy.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/Matplotlib.svg",
          alt: "MatplotLib",
          url: "https://matplotlib.org/stable/",
        },
        {
          img: "/Img/Iconos/Tecnologias/scikitlearn.svg",
          alt: "Scikit-Learn",
          url: "https://scikit-learn.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/seaborn.svg",
          alt: "Seaborn",
          url: "https://seaborn.pydata.org/",
        },
      ],
    },
    {
      title: "Regresión Lineal",
      desc: t("regLineal"),
      img: "/Img/Proyectos/data science/2Regresion.png",
      url: "https://github.com/kevirui/Regresion-lineal-2",
      category: "data",
      techs: [
        {
          img: "/Img/Iconos/Tecnologias/python.svg",
          alt: "Python",
          url: "https://www.python.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/pandas.svg",
          alt: "Pandas",
          url: "https://pandas.pydata.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/numpy.svg",
          alt: "Numpy",
          url: "https://numpy.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/Matplotlib.svg",
          alt: "MatplotLib",
          url: "https://matplotlib.org/stable/",
        },
        {
          img: "/Img/Iconos/Tecnologias/scikitlearn.svg",
          alt: "Scikit-Learn",
          url: "https://scikit-learn.org/",
        },
      ],
    },
    {
      title: "Análisis de Evasión de Clientes",
      desc: t("evasion"),
      img: "/Img/Proyectos/data science/challenge-alura-telecom-1.png",
      url: "https://github.com/kevirui/Challenge-Telecom-Alura",
      category: "data",
      techs: [
        {
          img: "/Img/Iconos/Tecnologias/python.svg",
          alt: "Python",
          url: "https://www.python.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/pandas.svg",
          alt: "Pandas",
          url: "https://pandas.pydata.org/",
        },
        {
          img: "/Img/Iconos/Tecnologias/numpy.svg",
          alt: "Numpy",
          url: "https://numpy.org/",
        },
      ],
    },
    {
      title: "Challenge Alura Store",
      desc: t("aluraStore"),
      img: "/Img/Proyectos/data science/challenge-alura-store.png",
      url: "https://github.com/kevirui/Challenge-Alura-Store",
      category: "data",
      techs: [
        {
          img: "/Img/Iconos/Tecnologias/python.svg",
          alt: "Python",
          url: "https://www.python.org/",
        },
      ],
    },
  ];

  const proyectos = [...proyectosWeb, ...proyectosDS];

  return { categorias, proyectos };
};
