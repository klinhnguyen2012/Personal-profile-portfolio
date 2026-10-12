const sections = [
  { id: "about", number: "01", name: "Who is Linh?" },
  { id: "learn", number: "02", name: "Learn" },
  { id: "innovate", number: "03", name: "Innovate" },
  { id: "network", number: "04", name: "Network" },
  { id: "horizon", number: "05", name: "Horizon" },
];

const sectionIntros: Record<string, string> = {
  about: "RMIT Digital Marketing graduate, bringing customer insight and structured thinking to product management and business analysis.",
  learn: "Coursework and academic projects that shaped my approach.",
  innovate: "Product and business challenges explored through research, strategy, and teamwork.",
  network: "Experience built through internships and collaboration.",
  horizon: "Personal projects, experiments, and what I want to explore next.",
};

const techStack = ["Next.js", "Python", "HTML", "CSS", "TypeScript", "JavaScript", "C++"];
const productTools = ["Figma", "Canva", "Microsoft Word", "Excel", "PowerPoint", "Microsoft Teams", "Google Drive", "Outlook", "Photoshop", "Illustrator", "Premiere Pro"];
const courseworkGroups = [
  {
    id: "illustrator-work",
    title: "Adobe Illustrator",
    items: [
      { src: "/assets/learn/coursework/quidditch-infographic-optimized.jpg", alt: "Quidditch infographic explaining rules and gameplay", label: "Quidditch infographic" },
      { src: "/assets/learn/coursework/quidditch-sketch-optimized.jpg", alt: "Hand-drawn Quidditch rulebook layout sketch displayed in a drawing app", label: "Quidditch rulebook sketch" },
      { src: "/assets/learn/coursework/music-illustration-optimized.jpg", alt: "Music-themed illustration exercise", label: "Music illustration" },
      { src: "/assets/learn/coursework/character-stamp-study-optimized.jpg", alt: "Color variations for a character stamp design", label: "Character stamp study" },
    ],
  },
  {
    id: "photoshop-work",
    title: "Adobe Photoshop",
    items: [
      { src: "/assets/learn/coursework/poster-exercise.png", alt: "Fanta orange campaign poster with floating cans, orange slices, and the line Give in to the crave", label: "Fanta campaign poster" },
    ],
  },
];
const toolProjectLinks = [
  { id: "figma-work", title: "Figma", description: "Selected AhaFood.ai interface screens for functions 1, 4, and 5.", href: "#ahafood-title", link: "See the AhaFood.ai case study" },
  { id: "premiere-work", title: "Adobe Premiere Pro", description: "The Eucerin video component I made for the DMSP pitch assignment.", href: "#dmsp-title", link: "See the DMSP project" },
];
const projectVideos = {
  dcc: { id: "ry32kiSDDKQ", title: "Dragon Capital pitching winner video", caption: "The team's winning pitch in the Digital Video category." },
  dmsp: { id: "GUkFnAS8V04", title: "Eucerin interview video component by Khanh Linh Nguyen", caption: "One video component made for the DMSP pitching assignment." },
  vsic: { id: "P1YNuw_rgpM", title: "VSIC 2024 video", caption: "Project video shared for VSIC 2024." },
};
const currentProducts = [
  { name: "Lumos Edu", role: "Business Analyst · 2026–Present", href: "https://lumos.education", kind: "Live product" },
  { name: "KopyMatch", role: "Co-Founder, Product & QA · 2026", href: "https://kopymatch.com", kind: "Live product" },
  { name: "PathPlanner AI", role: "Product / BA · VinUni AI20K Program", href: "https://c4-app-t040.pathplannerai.site", kind: "Live prototype" },
  { name: "Eucerin Skin Diary", role: "AI Product Concept · Client Pitch", href: "https://www.figma.com/proto/RKsgC8onzgE8pRaxF5CApn/DMSP--Eucerin?node-id=1-45&p=f&t=36fbmd1AHp1WUIJS-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A45", kind: "Figma prototype" },
  { name: "AhaFood.ai", role: "Product Design & UI/UX", href: "https://www.figma.com/design/iHk8KeTdDMHdI42B9nww5l/SMMM-x-AHAFOOD-app?t=bcQoF4G7yLgyoX0R-1", kind: "Figma design" },
];
const certificates = [
  { label: "UI Design · Figma", date: "16 Nov 2025", href: "https://colorme.vn/digitalcertificate/152449" },
  { label: "Adobe Premiere", date: "19 Oct 2025", href: "https://colorme.vn/digitalcertificate/151423" },
  { label: "Adobe Photoshop", date: "27 Jul 2025", href: "https://colorme.vn/digitalcertificate/147623" },
  { label: "Adobe Illustrator", date: "24 Aug 2025", href: "https://colorme.vn/digitalcertificate/149255" },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Khanh Linh Nguyen, back to top">
          <span className="wordmark-mark" aria-hidden="true">KL</span>
          <span>Khanh Linh Nguyen</span>
        </a>
        <nav className="top-nav" aria-label="Portfolio sections">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              <span className="nav-number">{section.number}</span>
              <span>{section.name}</span>
            </a>
          ))}
        </nav>
        <a className="header-contact" href="#contact">Contact <span aria-hidden="true">↗</span></a>
      </header>

      <main id="main-content">
        <section className="cover frame" id="top" aria-labelledby="cover-title">
          <img className="cover-photo" src="/assets/cover/night-portrait-1800.jpg" srcSet="/assets/cover/night-portrait-900.jpg 900w, /assets/cover/night-portrait-1800.jpg 1800w" sizes="(max-width: 40rem) calc(100vw - 2rem), 96vw" alt="Linh reaching toward the night sky above a city lit after dark" fetchPriority="high" />
          <div className="cover-shade" aria-hidden="true" />
          <div className="cover-content">
            <h1 id="cover-title">Portfolio</h1>
            <p className="cover-script" aria-hidden="true">Creative</p>
            <p className="cover-name">Khanh Linh Nguyen</p>
            <p className="cover-role">Product Manager <span aria-hidden="true">·</span> Business Analyst</p>
          </div>
          <div className="cover-greeting" aria-label="Hello, I'm Linh">
            <span>Hello, I’m</span>
            <em>Linh</em>
          </div>
          <nav className="section-index" aria-label="Explore the portfolio">
            {sections.map((section) => (
              <a className="index-link" key={section.id} href={`#${section.id}`}>
                <span className="index-number">{section.number}</span>
                <span className="index-copy"><span className="index-name">{section.name}</span><span className="index-description">{sectionIntros[section.id]}</span></span>
              </a>
            ))}
          </nav>
        </section>

        <section className="current-products frame" aria-labelledby="current-products-title">
          <div className="current-products-heading">
            <div>
              <p className="current-products-kicker">A selection of products and prototypes</p>
              <h2 id="current-products-title">Products I’m building<span>.</span></h2>
            </div>
            <p>Ideas I’m helping shape through product analysis, design, and testing.</p>
          </div>
          <div className="current-products-grid">
            {currentProducts.map((product, index) => (
              <a className="current-product-card" href={product.href} key={product.name} target="_blank" rel="noreferrer" aria-label={`Open ${product.name} — ${product.kind}`}>
                <span className="current-product-number">0{index + 1}</span>
                <span className="current-product-kind">{product.kind}<span aria-hidden="true"> ↗</span></span>
                <span className="current-product-name">{product.name}</span>
                <span className="current-product-role">{product.role}</span>
              </a>
            ))}
          </div>
        </section>

        {sections.map((section) => (
          <section className={`portfolio-section frame section-${section.id}`} id={section.id} key={section.id} aria-labelledby={`${section.id}-title`}>
            <div className="section-meta">
              <span>{section.number} / 05</span>
              <span>Portfolio</span>
            </div>
            <div className="section-heading">
              <h2 id={`${section.id}-title`}>{section.name}<span className="heading-period">.</span></h2>
              <p>{sectionIntros[section.id]}</p>
            </div>
            {section.id === "about" ? (
              <div className="profile-content">
                <div className="profile-summary">
                  <p className="profile-lead">I’m a Digital Marketing graduate from RMIT University, now focused on Product Management and Business Analysis.</p>
                  <p>My project work has involved understanding users, framing business problems, mapping customer journeys, and shaping early concepts into clear strategies and prototypes. I bring a customer-first perspective, structured analysis, and a collaborative approach to connecting user needs with business goals.</p>
                  <div className="profile-facts">
                    <div><span className="fact-label">Focus</span><span>Product Management · Business Analysis</span></div>
                    <div><span className="fact-label">Languages</span><span>Vietnamese · English</span></div>
                    <div><span className="fact-label">Interests</span><span>Photography · Writing</span></div>
                  </div>
                  <div className="contact-card" id="contact">
                    <span className="fact-label">Contact</span>
                    <a href="mailto:klinhnguyen2012@gmail.com">klinhnguyen2012@gmail.com</a>
                    <a href="tel:+84912716969">+84 912 716 969</a>
                    <span>Ho Chi Minh City, Vietnam</span>
                  </div>
                </div>
                <div className="skills-panel">
                  <div className="skill-group">
                    <div className="skill-heading"><span>01</span><h3>Tech Stack</h3></div>
                    <p>Technologies I’ve explored.</p>
                    <ul className="skill-chips" aria-label="Tech Stack">
                      {techStack.map((skill) => <li key={skill}>{skill}</li>)}
                    </ul>
                  </div>
                  <div className="skill-group tool-group">
                    <div className="skill-heading"><span>02</span><h3>Product &amp; Creative Tools</h3></div>
                    <ul className="tool-list">
                      {productTools.map((tool) => <li key={tool}>{tool}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ) : section.id === "learn" ? (
              <div className="learn-content">
                <article className="learning-project dcc-project" aria-labelledby="dcc-title">
                  <div className="project-kicker"><span>Course project · DCC</span><span>Client · Dragon Capital</span></div>
                  <div className="learning-project-heading">
                    <div>
                      <p className="project-overline">Digital Content Creation</p>
                      <h3 id="dcc-title">Making investing feel within reach.</h3>
                    </div>
                    <p className="project-result"><span>Team outcome</span>Pitching winner<br />Digital Video Category</p>
                  </div>
                  <div className="project-copy-grid">
                    <div>
                      <h4>Challenge</h4>
                      <p>Help young mothers see investing as an empowering, attainable habit rather than something reserved for financial experts.</p>
                    </div>
                    <div>
                      <h4>My contribution</h4>
                      <p>Insights, big idea, video idea brainstorming, content pillars, branded assets, and storyboard.</p>
                    </div>
                  </div>
                  <div className="dcc-evidence-gallery">
                    <figure className="evidence-figure dcc-storyboard">
                      <img src="/assets/learn/dcc-storyboard.png" alt="Dragon Capital campaign storyboard about a mother learning to invest and building a future for her family" loading="lazy" decoding="async" />
                      <figcaption>Campaign storyboard.</figcaption>
                    </figure>
                    <figure className="evidence-figure">
                      <img src="/assets/learn/dcc-recognition.jpg" alt="Linh and a teammate holding a Dragon Capital recognition certificate and presentation gift" loading="lazy" decoding="async" />
                      <figcaption>Team recognition.</figcaption>
                    </figure>
                    <figure className="evidence-figure">
                      <img src="/assets/learn/dcc-team-presentation.jpg" alt="Student team presenting its investment campaign concept" loading="lazy" decoding="async" />
                      <figcaption>Campaign presentation.</figcaption>
                    </figure>
                  </div>
                  <figure className="project-video">
                    <iframe src={`https://www.youtube-nocookie.com/embed/${projectVideos.dcc.id}?rel=0`} title={projectVideos.dcc.title} loading="lazy" allow="encrypted-media; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
                    <figcaption>{projectVideos.dcc.caption}</figcaption>
                  </figure>
                  <div className="project-links" aria-label="Dragon Capital project resources">
                    <a href="https://canva.link/htjonomxpflne8h" target="_blank" rel="noreferrer">View submitted slides <span aria-hidden="true">↗</span></a>
                    <a href="https://canva.link/xykw3m2cgbkkqan" target="_blank" rel="noreferrer">View pitching slides <span aria-hidden="true">↗</span></a>
                    <a href="https://youtu.be/ry32kiSDDKQ" target="_blank" rel="noreferrer">Open video on YouTube <span aria-hidden="true">↗</span></a>
                  </div>
                </article>

                <article className="learning-project dmsp-project" aria-labelledby="dmsp-title">
                  <div className="project-kicker"><span>Course project · DMSP</span><span>Client context · Eucerin</span></div>
                  <div className="learning-project-heading">
                    <div>
                      <p className="project-overline">Digital Marketing Strategy &amp; Planning</p>
                      <h3 id="dmsp-title">A skincare checklist for the years before 30.</h3>
                    </div>
                    <p className="project-result"><span>Format</span>Pitch assignment component</p>
                  </div>
                  <p className="dmsp-description">Eucerin was the client context for this university project. The storyboard explored a skincare checklist for women approaching age 30. The video is one component I made for the pitching assignment; it is not the full pitch.</p>
                  <div className="dmsp-evidence-grid">
                    <figure className="evidence-figure dmsp-storyboard">
                      <img src="/assets/learn/dmsp-eucerin-storyboard.png" alt="Eucerin campaign storyboard showing a woman preparing a skincare checklist and exploring a product" loading="lazy" decoding="async" />
                      <figcaption>Skincare checklist storyboard.</figcaption>
                    </figure>
                    <figure className="project-video">
                      <iframe src={`https://www.youtube-nocookie.com/embed/${projectVideos.dmsp.id}?rel=0`} title={projectVideos.dmsp.title} loading="lazy" allow="encrypted-media; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
                      <figcaption>{projectVideos.dmsp.caption}</figcaption>
                    </figure>
                  </div>
                  <div className="project-links" aria-label="DMSP project resources">
                    <a href="https://canva.link/fw0fyb1gy5db38q" target="_blank" rel="noreferrer">View DMSP pitch slides <span aria-hidden="true">↗</span></a>
                    <a href="https://youtu.be/GUkFnAS8V04" target="_blank" rel="noreferrer">Open video on YouTube <span aria-hidden="true">↗</span></a>
                  </div>
                </article>

                <section className="coursework-block" aria-labelledby="coursework-title">
                  <div className="coursework-heading">
                    <div><p className="project-overline">Selected class exercises</p><h3 id="coursework-title">Design &amp; media work.</h3></div>
                    <p>Poster variants are consolidated; selected work is grouped by the tool used.</p>
                  </div>
                  <div className="coursework-tool-groups">
                    {courseworkGroups.map((group) => (
                      <section className={`coursework-tool-group ${group.id}`} key={group.id} aria-labelledby={`${group.id}-title`}>
                        <div className="tool-group-heading"><span className="fact-label">Selected work</span><h4 id={`${group.id}-title`}>{group.title}</h4></div>
                        <div className="coursework-gallery">
                          {group.items.map((item) => (
                            <figure className="coursework-item" key={item.src}>
                              <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                              <figcaption>{item.label}</figcaption>
                            </figure>
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                  <div className="tool-project-links" aria-label="Other software work">
                    {toolProjectLinks.map((item) => (
                      <article className="tool-project-card" key={item.id}>
                        <h4 className="project-overline">{item.title}</h4>
                        <p>{item.description}</p>
                        <a href={item.href}>{item.link} <span aria-hidden="true">↗</span></a>
                      </article>
                    ))}
                  </div>
                </section>
                <section className="certificate-block" aria-labelledby="certificates-title">
                  <div className="coursework-heading">
                    <div><p className="project-overline">Training certificates</p><h3 id="certificates-title">Skills, in practice.</h3></div>
                    <p>Open each certificate to view its issuer record and full details.</p>
                  </div>
                  <ul className="certificate-list">
                    {certificates.map((certificate) => (
                      <li key={certificate.href}>
                        <a href={certificate.href} target="_blank" rel="noreferrer">
                          <span className="certificate-name">{certificate.label}</span>
                          <span className="certificate-date">{certificate.date}</span>
                          <span className="certificate-arrow" aria-hidden="true">↗</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            ) : section.id === "innovate" ? (
              <div className="innovate-content">
                <article className="innovation-project ahafood-project" aria-labelledby="ahafood-title">
                  <div className="project-kicker"><span>Course project · MKTG1419</span><span>Social Media and Mobile Marketing</span></div>
                  <div className="innovation-heading">
                    <div>
                      <p className="project-overline">AhaFood.ai · Mobile marketing campaign</p>
                      <h3 id="ahafood-title">Helping local food businesses find a simpler way to grow.</h3>
                    </div>
                    <span className="innovation-index" aria-hidden="true">01</span>
                  </div>
                  <div className="innovation-summary">
                    <p>A team concept for a delivery service helping small and medium food businesses build direct-to-customer channels. The client’s product includes an AI chatbot for customer messaging and ordering; I did not build the chatbot.</p>
                    <div className="contribution-note">
                      <h4>My contribution</h4>
                      <p>Customer persona and insights, plus Figma screens for functions 1, 4, and 5.</p>
                    </div>
                  </div>
                  <div className="ahafood-flow" aria-label="Project focus areas">
                    <span>01 · Understand merchants</span><span>02 · Map user needs</span><span>03 · Design assigned screens</span>
                  </div>
                  <div className="project-links" aria-label="AhaFood.ai project resources">
                    <a href="https://canva.link/05wdwfuqrkoicfq" target="_blank" rel="noreferrer">View campaign slides <span aria-hidden="true">↗</span></a>
                  </div>
                </article>

                <div className="innovation-grid">
                  <article className="innovation-project" aria-labelledby="met-title">
                    <div className="project-kicker"><span>Competition · Season 12</span><span>Team outcome · Top 30</span></div>
                    <figure className="innovation-visual met-visual certificate-visual">
                      <img src="/assets/innovate/met-top30-certificate.jpg" srcSet="/assets/innovate/met-top30-certificate-800.jpg 800w, /assets/innovate/met-top30-certificate.jpg 1600w" sizes="(max-width: 40rem) 100vw, 42vw" alt="Marketing Challengers Season 12 Certificate of Recognition awarded to Team RMI for reaching the Top 30 of the MET.EV challenge in May 2024" width="1600" height="1143" loading="lazy" decoding="async" />
                      <figcaption>Team RMI’s Top 30 Certificate of Recognition for the MET.EV challenge, May 2024.</figcaption>
                    </figure>
                    <div className="innovation-card-heading">
                      <div><p className="project-overline">MET.EV · E-mobility</p><h3 id="met-title">Make electric mobility feel closer to everyday life.</h3></div>
                      <span className="innovation-index" aria-hidden="true">02</span>
                    </div>
                    <div className="project-copy-grid">
                      <div><h4>Challenge</h4><p>Build familiarity and credibility for electric vehicles among young consumers, and make e-mobility feel practical and accessible.</p></div>
                      <div><h4>My contribution</h4><p>SWOT, customer persona and insights, big idea, strategic approach, IMC planning, Phase 1, and mock-ups.</p></div>
                    </div>
                    <div className="project-links" aria-label="MET.EV project resources">
                      <a href="https://canva.link/9ggblizp5c6tlt8" target="_blank" rel="noreferrer">View competition slides <span aria-hidden="true">↗</span></a>
                    </div>
                  </article>

                  <article className="innovation-project zest-project" aria-labelledby="zest-title">
                    <div className="project-kicker"><span>Social Business Creation · 9th edition</span><span>Milestone · Semi-final</span></div>
                    <figure className="innovation-visual zest-visual certificate-visual zest-certificate-visual">
                      <iframe src="/assets/innovate/certificates/zest-aroma-sbc-certificate.pdf#toolbar=0&navpanes=0" title="Zest Aroma Social Business Creation completion certificate" loading="lazy" />
                      <figcaption>Zest Aroma’s Social Business Creation completion certificate.</figcaption>
                    </figure>
                    <div className="innovation-card-heading">
                      <div><p className="project-overline">Zest Aroma · Circular agriculture</p><h3 id="zest-title">Turn agricultural by-products into useful materials.</h3></div>
                      <span className="innovation-index" aria-hidden="true">03</span>
                    </div>
                    <div className="project-copy-grid">
                      <div><h4>Approach</h4><p>Explore an upcycling model that turns agricultural by-products into pectin powder, biochar, and microbial organic fertilizer.</p></div>
                      <div><h4>My contribution</h4><p>Business model, research, marketing strategy, presenting, and report writing.</p></div>
                    </div>
                    <div className="project-links" aria-label="Zest Aroma project resources">
                      <a href="/assets/innovate/certificates/zest-aroma-sbc-certificate.pdf" target="_blank" rel="noreferrer">View completion certificate <span aria-hidden="true">↗</span></a>
                    </div>
                  </article>

                  <article className="innovation-project ecorope-project" aria-labelledby="ecorope-title">
                    <div className="project-kicker"><span>VSIC · SwinBiz</span><span>Team outcome · Finalist</span></div>
                    <div className="innovation-image-gallery" aria-label="EcoRope team and presentation evidence">
                      <figure>
                        <img src="/assets/innovate/vsic-team-presentation.jpg" srcSet="/assets/innovate/vsic-team-presentation-700.jpg 700w, /assets/innovate/vsic-team-presentation.jpg 1500w" sizes="(max-width: 40rem) 100vw, 26vw" alt="EcoRope student team presenting at the VSIC final" width="1500" height="754" loading="lazy" decoding="async" />
                        <figcaption>Team presentation at the VSIC final.</figcaption>
                      </figure>
                      <figure>
                        <img src="/assets/innovate/vsic-team.jpg" srcSet="/assets/innovate/vsic-team-700.jpg 700w, /assets/innovate/vsic-team.jpg 1400w" sizes="(max-width: 40rem) 100vw, 22vw" alt="Whatsupever student team at the VSIC Southern regional final" width="1400" height="1400" loading="lazy" decoding="async" />
                        <figcaption>Whatsupever team at the Southern regional final.</figcaption>
                      </figure>
                    </div>
                    <div className="innovation-card-heading">
                      <div><p className="project-overline">EcoRope · Green materials</p><h3 id="ecorope-title">Give discarded polypropylene fiber a new use.</h3></div>
                      <span className="innovation-index" aria-hidden="true">04</span>
                    </div>
                    <div className="project-copy-grid">
                      <div><h4>Project idea</h4><p>Research a rope made from polypropylene fiber waste, designed to be biodegradable, UV-resistant, and color-stable for fashion components.</p></div>
                      <div><h4>My contribution</h4><p>Target audience, USP, customer journey, IMC plan, script, shortlists, and voice-over.</p></div>
                    </div>
                    <figure className="project-video">
                      <iframe src={`https://www.youtube-nocookie.com/embed/${projectVideos.vsic.id}?rel=0`} title={projectVideos.vsic.title} loading="lazy" allow="encrypted-media; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
                      <figcaption>{projectVideos.vsic.caption}</figcaption>
                    </figure>
                    <div className="project-links" aria-label="EcoRope project resources">
                      <a href="https://canva.link/ltzipeooc3sup0s" target="_blank" rel="noreferrer">View VSIC final-round slides <span aria-hidden="true">↗</span></a>
                      <a href="https://canva.link/rq77ifrnq7dgcye" target="_blank" rel="noreferrer">View VSIC fundraising slides <span aria-hidden="true">↗</span></a>
                      <a href="https://canva.link/hiqd3q64igtyamm" target="_blank" rel="noreferrer">View SwinBiz slides <span aria-hidden="true">↗</span></a>
                      <a href="https://www.youtube.com/watch?v=P1YNuw_rgpM" target="_blank" rel="noreferrer">Open video on YouTube <span aria-hidden="true">↗</span></a>
                    </div>
                  </article>
                </div>
              </div>
            ) : section.id === "network" ? (
              <div className="network-content">
                <article className="experience-project merry-luxury-project" aria-labelledby="merry-luxury-title">
                  <div className="project-kicker"><span>Internship</span><span>Luxury retail · Content marketing</span></div>
                  <div className="experience-heading">
                    <div><p className="project-overline">The Merry Luxury</p><h3 id="merry-luxury-title">Stories and details that support a premium brand.</h3></div>
                    <p className="experience-role"><span>Role</span>Content Marketing Intern</p>
                  </div>
                  <div className="experience-details">
                    <div>
                      <h4>About the brand</h4>
                      <p>A luxury retailer specializing in curated, authentic jewelry from global houses.</p>
                    </div>
                    <div>
                      <h4>My responsibilities</h4>
                      <ul>
                        <li>Assisted with content storytelling for marketing.</li>
                        <li>Supported photoshoot and video coordination, helping maintain brand consistency and premium visuals.</li>
                        <li>Contributed to creative direction and daily product and sales content for social media.</li>
                        <li>Helped plan the content calendar and coordinate daily storytelling posts and sales campaigns.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="network-evidence" aria-label="The Merry Luxury work samples">
                    <div className="network-image-gallery network-image-gallery--merry">
                      <figure>
                        <img src="/assets/network/merry-content-calendar.jpg" srcSet="/assets/network/merry-content-calendar-750.jpg 750w, /assets/network/merry-content-calendar.jpg 1500w" sizes="(max-width: 40rem) 100vw, 62vw" alt="June content calendar for The Merry Luxury with planned social media posts" width="1500" height="489" loading="lazy" decoding="async" />
                        <figcaption>June social content calendar.</figcaption>
                      </figure>
                      <figure>
                        <img src="/assets/network/merry-social-post.jpg" srcSet="/assets/network/merry-social-post-650.jpg 650w, /assets/network/merry-social-post.jpg 1300w" sizes="(max-width: 40rem) 100vw, 30vw" alt="Selected The Merry Luxury social media post featuring the brand’s jewelry" width="1300" height="2818" loading="lazy" decoding="async" />
                        <figcaption>Example of product-focused social content.</figcaption>
                      </figure>
                    </div>
                  </div>
                </article>

                <article className="experience-project ly-gia-vien-project" aria-labelledby="ly-gia-vien-title">
                  <div className="project-kicker"><span>Internship</span><span>Field marketing · RMIT University</span></div>
                  <div className="experience-heading">
                    <div><p className="project-overline">LY Gia Vien</p><h3 id="ly-gia-vien-title">Field marketing in an in-person setting.</h3></div>
                    <p className="experience-role"><span>Role</span>Field Marketing Intern</p>
                  </div>
                  <div className="experience-details single-detail">
                    <div>
                      <h4>Selected evidence</h4>
                      <p>The supplied portfolio shows field marketing work associated with LY Gia Vien at RMIT University. These references are included as work samples without adding unverified performance claims.</p>
                    </div>
                  </div>
                  <div className="network-evidence" aria-label="LY Gia Vien work samples">
                    <div className="network-image-gallery network-image-gallery--ly-gia-vien">
                      <figure>
                        <img src="/assets/network/ly-gia-vien-content-calendar.jpg" srcSet="/assets/network/ly-gia-vien-content-calendar-750.jpg 750w, /assets/network/ly-gia-vien-content-calendar.jpg 1500w" sizes="(max-width: 40rem) 100vw, 30vw" alt="LY Gia Vien work calendar listing planned marketing content" width="1500" height="737" loading="lazy" decoding="async" />
                        <figcaption>Work calendar and content planning.</figcaption>
                      </figure>
                      <figure>
                        <img src="/assets/network/ly-gia-vien-social-creative.jpg" srcSet="/assets/network/ly-gia-vien-social-creative-650.jpg 650w, /assets/network/ly-gia-vien-social-creative.jpg 1300w" sizes="(max-width: 40rem) 100vw, 30vw" alt="Contact sheet of LY Gia Vien confectionery social campaign designs" width="1300" height="1229" loading="lazy" decoding="async" />
                        <figcaption>Selected social campaign creative.</figcaption>
                      </figure>
                      <figure>
                        <img src="/assets/network/ly-gia-vien-field-event.jpg" srcSet="/assets/network/ly-gia-vien-field-event-700.jpg 700w, /assets/network/ly-gia-vien-field-event.jpg 1400w" sizes="(max-width: 40rem) 100vw, 30vw" alt="Presentation or event photograph with LY Gia Vien and RMIT University branding" width="1400" height="1050" loading="lazy" decoding="async" />
                        <figcaption>LY Gia Vien field marketing evidence at RMIT University.</figcaption>
                      </figure>
                    </div>
                  </div>
                </article>
              </div>
            ) : section.id === "horizon" ? (
              <div className="horizon-content">
                <article className="horizon-project" aria-labelledby="billiards-project-title">
                  <div className="project-kicker"><span>Personal project · RMIT Billiards Club</span><span>Concept to event delivery</span></div>
                  <div className="horizon-project-heading">
                    <div><p className="project-overline">Event experience</p><h3 id="billiards-project-title">A club booth built around play.</h3></div>
                    <p>Planned and executed a full club booth experience, from concept to production.</p>
                  </div>
                  <div className="horizon-project-body">
                    <figure className="horizon-event-photo">
                      <img src="/assets/horizon/billiards-club-event.jpg" srcSet="/assets/horizon/billiards-club-event-720.jpg 720w, /assets/horizon/billiards-club-event.jpg 1500w" sizes="(max-width: 40rem) 100vw, 58vw" alt="RMIT Billiards Club booth with event banners, themed props, and a mini billiards table as visitors gather around" width="1500" height="1125" loading="lazy" decoding="async" />
                      <figcaption>RMIT Billiards Club booth during the event.</figcaption>
                    </figure>
                    <div className="horizon-project-details">
                      <div className="horizon-workstream"><span>01</span><div><h4>Plan</h4><p>Developed the booth concept and visitor activities.</p></div></div>
                      <div className="horizon-workstream"><span>02</span><div><h4>Design</h4><p>Created event visuals, including banners, posters, standees, and lanyards.</p></div></div>
                      <div className="horizon-workstream"><span>03</span><div><h4>Deliver</h4><p>Managed materials and set design, sourced props including a mini billiards table, and created interactive games to engage visitors.</p></div></div>
                    </div>
                  </div>
                  <div className="horizon-sketches" aria-label="Event booth concept sketches">
                    <figure>
                      <img src="/assets/horizon/billiards-booth-sketch.jpg" srcSet="/assets/horizon/billiards-booth-sketch-600.jpg 600w, /assets/horizon/billiards-booth-sketch.jpg 1100w" sizes="(max-width: 40rem) 100vw, 52vw" alt="Hand-drawn concept sketch for the RMIT Billiards Club booth, including its backdrop, game table, poster, and visitor activity" width="1100" height="910" loading="lazy" decoding="async" />
                      <figcaption>Booth layout and activity concept.</figcaption>
                    </figure>
                    <figure>
                      <img src="/assets/horizon/booth-standee-sketch.jpg" srcSet="/assets/horizon/booth-standee-sketch-600.jpg 600w, /assets/horizon/booth-standee-sketch.jpg 1100w" sizes="(max-width: 40rem) 100vw, 25vw" alt="Hand-drawn side view of a cardboard standee and booth structure" width="1100" height="1642" loading="lazy" decoding="async" />
                      <figcaption>Standee structure sketch.</figcaption>
                    </figure>
                  </div>
                </article>
                <div className="horizon-close" aria-labelledby="horizon-close-title">
                  <div><p className="project-overline">Next conversation</p><h3 id="horizon-close-title">I’m ready to help teams make sense of what to build next.</h3><p>Open to Product Manager and Business Analyst opportunities.</p></div>
                  <div className="horizon-close-actions">
                    <a className="horizon-contact-link" href="mailto:klinhnguyen2012@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
                    <a className="horizon-top-link" href="#top">Back to top ↑</a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="section-placeholder" aria-label="Content will be added in the next phase">
                <span className="placeholder-mark" aria-hidden="true">{section.number}</span>
                <span>Selected work and stories<br />will appear here.</span>
                <span className="placeholder-rule" aria-hidden="true" />
              </div>
            )}
          </section>
        ))}

        <footer className="site-footer frame">
          <span>© 2026 Khanh Linh Nguyen</span>
          <a href="#top">Back to top ↑</a>
          <span>Made with curiosity</span>
        </footer>
      </main>
    </>
  );
}
