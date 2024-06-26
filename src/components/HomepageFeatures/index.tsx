import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Buenas Practicas',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          Al hablar de buenas prácticas en programación nos referimos a un conjunto de técnicas, principios, metodologías que debemos implementar en nuestro software para que se vuelva fácil, rápido y seguro de desarrollar, mantener y desplegar.
      </>
    ),
  },
  {
    title: 'Patrones de Software',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          Los patrones son un juego de herramientas que
          brindan soluciones a problemas habituales
          en el diseño de software. Definen un
          lenguaje común que ayuda a tu
          equipo a comunicarse
          con más eficiencia.
      </>
    ),
  },
  {
    title: 'Arquitectura',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Monolitica,Monolitica Modular, Microservicios.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
