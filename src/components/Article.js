export default function Article({ article }) {
  return (
    <article>
      {!article ? (
        <h2>No article selected</h2>
      ) : (
        <section>
          <h2>{article.title}</h2>
          <p className="date">{`Posted: ${article.date}`}</p>
          <p className="body">{article.body}</p>
        </section>
      )}
    </article>
  );
}
