import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, Github, GraduationCap, Mail, Play } from 'lucide-react';
import { personalInfo, posts } from '../data';

type Project = typeof personalInfo.githubProjects[number];

function PublicationList() {
  return (
    <div className="academic-publications">
      {personalInfo.publications.map((publication) => (
        <article className="academic-publication" key={publication.link}>
          <span className="academic-year">{publication.year}</span>
          <div>
            <h3><a href={publication.link} target="_blank" rel="noreferrer">{publication.title}</a></h3>
            <p>{publication.authors}</p>
            <p className="academic-venue">{publication.journal}</p>
            <a className="academic-inline-link" href={publication.link} target="_blank" rel="noreferrer">Paper <ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
        </article>
      ))}
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="academic-project-links">
      {project.githubUrl && !project.githubUrl.includes('/yourusername/') && (
        <a href={project.githubUrl} target="_blank" rel="noreferrer"><Github size={14} aria-hidden="true" />Code</a>
      )}
      {project.demoUrl && (
        <a href={project.demoUrl} target="_blank" rel="noreferrer"><ExternalLink size={14} aria-hidden="true" />Live demo</a>
      )}
      {'relatedLinks' in project && project.relatedLinks?.map((link) => (
        <a key={link.url} href={link.url} target="_blank" rel="noreferrer"><ExternalLink size={14} aria-hidden="true" />{link.label}</a>
      ))}
    </div>
  );
}

function ProjectEntry({ project, preview = false }: { project: Project; preview?: boolean }) {
  const hasMedia = Boolean(project.videoUrl || project.imageUrl);
  return (
    <article className={`academic-project${hasMedia ? ' academic-project-with-media' : ''}`}>
      {hasMedia && (
        <div className="academic-project-media">
          {project.videoUrl && !preview ? (
            <video src={project.videoUrl} poster={project.imageUrl} controls preload="none" playsInline aria-label={`${project.title} demonstration`} />
          ) : (
            <Link to="/projects" aria-label={`View ${project.title} and demonstration`}>
              <img src={project.imageUrl} alt={project.title} loading="lazy" width="480" height="270" />
              {project.videoUrl && <span className="academic-media-caption"><Play size={13} aria-hidden="true" />Watch demonstration</span>}
            </Link>
          )}
        </div>
      )}
      <div>
        <h3>{preview ? <Link to="/projects">{project.title}</Link> : project.title}</h3>
        <p>{project.description}</p>
        {!preview && <p className="academic-technologies">{project.techStack.join(' / ')}</p>}
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export function AcademicHome() {
  const featured = personalInfo.githubProjects.filter((project) => project.videoUrl);
  return (
    <>
      <section className="academic-section academic-intro">
        <h1>About Me</h1>
        <p>{personalInfo.about}</p>
        <p>My work spans robotic control, perception, and physical system integration. My MSc dissertation, <Link to="/projects">SAW-Buddy</Link>, explores quadruped mobile manipulation for walker retrieval and door assistance in home environments.</p>
        <p className="academic-contact-note">For research collaboration and opportunities, please <a href={`mailto:${personalInfo.emails.academic}`}>get in touch</a>.</p>
      </section>
      <section className="academic-section">
        <h2>Research Interests</h2>
        <ul className="academic-interests">
          <li>Robotic control and mobile manipulation</li>
          <li>Multi-sensor fusion and state estimation</li>
          <li>Intelligent algorithms for physical systems</li>
        </ul>
      </section>
      <section className="academic-section">
        <div className="academic-section-heading"><h2>Publications</h2><Link to="/publications">All publications <ArrowUpRight size={14} aria-hidden="true" /></Link></div>
        <PublicationList />
      </section>
      <section className="academic-section">
        <div className="academic-section-heading"><h2>Selected Projects</h2><Link to="/projects">All projects <ArrowUpRight size={14} aria-hidden="true" /></Link></div>
        {featured.map((project) => <ProjectEntry key={project.title} project={project} preview />)}
      </section>
      <section className="academic-section">
        <h2>Education</h2>
        {personalInfo.education.map((education) => (
          <article className="academic-record" key={education.institution}>
            <div className="academic-record-heading"><h3>{education.institution}</h3><span>{education.period}</span></div>
            <p>{education.degree}</p>
            <ul>{education.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
          </article>
        ))}
      </section>
      <section className="academic-section">
        <h2>Research &amp; Engineering Experience</h2>
        {personalInfo.experience.map((experience) => (
          <article className="academic-record" key={`${experience.title}-${experience.period}`}>
            <div className="academic-record-heading"><h3>{experience.title}</h3><span>{experience.period}</span></div>
            <p>{experience.organization}</p>
            <ul>{experience.points.map((point) => <li key={point}>{point}</li>)}</ul>
          </article>
        ))}
      </section>
      <section className="academic-section">
        <h2>Honors &amp; Awards</h2>
        <ul>{personalInfo.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul>
      </section>
      <section className="academic-section">
        <h2>Technical Skills</h2>
        <dl className="academic-skills">
          {([
            ['Programming', personalInfo.skills.programming],
            ['Control & estimation', personalInfo.skills.control],
            ['Embedded systems', personalInfo.skills.embedded],
            ['Simulation', personalInfo.skills.simulation],
            ['PCB design', personalInfo.skills.pcb],
            ['Mechanical design', personalInfo.skills.design],
          ] as const).map(([label, skills]) => <div key={label}><dt>{label}</dt><dd>{skills.join(', ')}</dd></div>)}
        </dl>
      </section>
    </>
  );
}

export function AcademicPublications() {
  return (
    <>
      <section className="academic-section">
        <h1>Publications</h1>
        <p><a className="academic-inline-link" href={personalInfo.socials.googleScholar} target="_blank" rel="noreferrer"><GraduationCap size={16} aria-hidden="true" />Google Scholar <ArrowUpRight size={14} aria-hidden="true" /></a></p>
        <PublicationList />
      </section>
      <section className="academic-section">
        <h2>Granted Patents</h2>
        {personalInfo.patents.map((patent) => (
          <article className="academic-record" key={patent.number}>
            <h3>{patent.title}</h3>
            <p>{patent.number} &middot; {patent.role}</p>
            <p className="academic-meta">{patent.status}</p>
          </article>
        ))}
      </section>
    </>
  );
}

export function AcademicProjects() {
  const categories = Array.from(new Set(personalInfo.githubProjects.map((project) => project.category)));
  return (
    <>
      <h1>Projects</h1>
      {categories.map((category) => (
        <section className="academic-section" key={category}>
          <h2>{category}</h2>
          {personalInfo.githubProjects.filter((project) => project.category === category).map((project) => (
            <ProjectEntry project={project} key={project.title} />
          ))}
        </section>
      ))}
    </>
  );
}

export function AcademicWriting() {
  return (
    <>
      <h1>Writing</h1>
      {posts.map((post) => (
        <article className="academic-writing-entry" key={post.id}>
          <div className="academic-meta"><time>{post.date}</time><span>{post.type}</span><span>{post.readTime}</span></div>
          <h2><Link to={`/thoughts/${post.id}`}>{post.title}</Link></h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </>
  );
}

export function AcademicContact() {
  return (
    <section className="academic-section">
      <h1>Contact</h1>
      <p>I welcome conversations about research, robotics, and engineering collaborations.</p>
      <dl className="academic-contact-list">
        <div><dt>Academic email</dt><dd><a href={`mailto:${personalInfo.emails.academic}`}><Mail size={16} aria-hidden="true" />{personalInfo.emails.academic}</a></dd></div>
        <div><dt>Personal email</dt><dd><a href={`mailto:${personalInfo.emails.personal}`}><Mail size={16} aria-hidden="true" />{personalInfo.emails.personal}</a></dd></div>
        <div><dt>GitHub</dt><dd><a href={personalInfo.socials.github} target="_blank" rel="noreferrer"><Github size={16} aria-hidden="true" />{personalInfo.socials.githubUsername}</a></dd></div>
        <div><dt>Google Scholar</dt><dd><a href={personalInfo.socials.googleScholar} target="_blank" rel="noreferrer"><GraduationCap size={16} aria-hidden="true" />{personalInfo.name}</a></dd></div>
      </dl>
      <p>{personalInfo.education[0].institution}<br />{personalInfo.education[0].location}</p>
    </section>
  );
}
