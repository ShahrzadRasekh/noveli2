import Navbar from "../components/Navbar";

const stories = [
  ["The Art of Beginning", "A gentle guide to the first page.", "8 min read"],
  ["Under a Persian Sky", "A luminous collection of small moments.", "12 min read"],
  ["Letters to Tomorrow", "Notes for the life you are building.", "6 min read"]
];

export default function Home() {
  return (
    <main id="top">
      <Navbar />

      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">A quieter place for stories</p>
        <h1 id="hero-title">Find the words that stay with you.</h1>
        <p className="hero-copy">
          Noveli brings thoughtful fiction, essays, and ideas into one beautiful reading room.
        </p>
        <div className="hero-actions">
          <a className="button" href="#discover">Explore stories</a>
          <a className="text-link" href="#about">
            What is Noveli? <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="featured" id="discover" aria-labelledby="featured-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Featured this week</p>
            <h2 id="featured-title">Choose your next read</h2>
          </div>
          <a className="text-link" href="#library">
            View library <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="story-grid">
          {stories.map(([title, description, duration], index) => (
            <article className={`story-card story-card-${index + 1}`} key={title}>
              <p className="story-number">0{index + 1}</p>
              <div>
                <p className="story-duration">{duration}</p>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <a href="#library" aria-label={`Read ${title}`}>
                Read story <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto" id="about">
        <p className="eyebrow">Made for unhurried minds</p>
        <p>There is always time for one more good story.</p>
      </section>

      <footer id="library">© {new Date().getFullYear()} Noveli. Read slowly.</footer>
    </main>
  );
}
