// Import Styles
import styles from '@styles/react/BlogList.module.css';

import ProjectCard from '@components/ProjectCard.astro';

// StoryBlok
import { useStoryblokApi } from '@storyblok/astro';
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories/', {
  version: import.meta.env.DEV ? 'draft' : 'published',
  content_type: 'blogPost',
});
// console.log('---------------------');
// console.log(data);
// console.log('---------------------');

//  Get all the Blog Card info from the Post
const posts = data.stories.map((story) => {
  return {
    title: story.content.title,
    date: new Date(story.published_at),
    image: story.content.image,
    teaser: story.content.teaser,
    slug: story.slug.toString(),
  };
});

// Component
export default function BlogList({ blogCategory }) {
  //
  // Render
  return (
    <div>
      <div className={styles.btnCategoryContainer}>
        {blogCategory.map((category) => (
          <button className={styles.btnCategory}>{category}</button>
        ))}
      </div>

      {posts.map((post) => (
        <a
          className={styles.blogCardItemLink}
          href={`/blog/${post.slug}`}
        >
          <div className={styles.blogCard}>
            {/* Blog Card Header */}
            <div className={styles.blogCardHeader}>
              <p className={styles.blogDate}>
                {post.date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </p>
              <p className={styles.blogTag}>motion design</p>
            </div>

            {/* Blog Card Image */}
            <img
              className={styles.blogImage}
              src={post.image.filename}
            />

            {/* Blog Card Text */}
            <div className={styles.blogText}>
              <h3 className={styles.blogTitle}>{post.title}</h3>
              <p className={styles.blogTeaser}>{post.teaser}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
