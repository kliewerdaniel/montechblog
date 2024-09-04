import React from 'react';

const BlogContent = () => (
  <div className='blog-content'>
    <h2>Welcome to TechVanguard Insights</h2>
    {articles.map((article, index) => (
      <article key={index}>
        <h3>{article.title}</h3>
        {article.paragraphs.map((paragraph, pIndex) => (
          <p key={pIndex}>{paragraph}</p>
        ))}
      </article>
    ))}
  </div>
);

const articles = [
  // ... (keep the articles array as it was)
];

export default BlogContent;