import { FC } from 'react';
import Image from 'next/image';

export interface ProjectCardProps {
  cardHeader: string;
  projectName: string;
  projectDescription: string;
  cardFooter: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  cardHeader,
  projectName,
  projectDescription,
  cardFooter
}) => {
  return (
    <div>
      <div className="project-card">
        <div className="project-card__header">{cardHeader}</div>

        <a
          href={`https://github.com/nikpydev/${projectName}`}
          className="github-project-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project-card__github-logo-box">
            <Image src={require('../img/github-logo.png')} alt="github logo" />
          </div>
        </a>

        <a
          href={`https://nikpydev.github.io/${projectName}`}
          className="github-pages-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project-card__web-logo-box">
            <Image src={require('../img/web-host-logo.png')} alt="web logo" />
          </div>
        </a>

        <h1 className="project-card__name">{projectName}</h1>
        <figure className="project-card__image-container">
          <Image
            src={require(`../img/${projectName}.png`)}
            alt="Tripster"
            className="project-card__image"
          />
        </figure>
        <h3 className="project-card__description">{projectDescription}</h3>
        <div className="project-card__footer">{cardFooter}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
