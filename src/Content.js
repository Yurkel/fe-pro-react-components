import React from 'react';

export const Content = ({ notes }) => {
  return (
    <main>
      <section className="posts">
        <div className="container">
          <h1>Posts</h1>
          <ul className="list">
            {Object.values(notes).map(({ title, description }) => (
              <Article
                key={Math.random()}
                title={title}
                description={description}
                className="list__item"
              />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

const Article = ({ title, description, className }) => (
  <li className={className}>
    <h2>{title}</h2>
    <p>{description}</p>
  </li>
);
