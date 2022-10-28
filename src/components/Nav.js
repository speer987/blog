export default function Nav({ articles, setArticle }) {
  return (
    <nav>
      {!articles
        ? "No articles"
        : articles.map((a) => (
            <p className="item" key={a.id} onClick={() => setArticle(a)}>
              {a.title}
            </p>
          ))}
    </nav>
  );
}
