/**
 * Blog Posts Loader
 *
 * Dynamically loads all .md files from /src/content/blog/ directory
 * Parses frontmatter and content on the fly - no build step needed!
 */
import type { BlogPost } from './blog';
import { setBlogPosts } from './blog';
import { parseFrontmatter } from './frontmatter';

// import.meta.glob is a Vite compile-time macro — the argument is a static
// string literal, never user-controlled. This is NOT a runtime dynamic import.
// eslint-disable-next-line no-unsanitized/method
const markdownFiles = import.meta.glob('../blog-posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
});

// Parse markdown files into blog posts (exclude README.md)
const posts: BlogPost[] = Object.entries(markdownFiles)
  .filter(([filepath]) => !filepath.includes('README.md'))
  .map(([filepath, content]) => {
    const { data, content: markdownContent } = parseFrontmatter(content as string);

    // Extract slug from filename
    const slug = filepath.replace(/.*\//, '').replace('.md', '');

    return {
      slug: data.slug || slug,
      title: data.title,
      excerpt: data.excerpt,
      content: markdownContent,
      author: data.author,
      publishedAt: data.publishedAt,
      updatedAt: data.updatedAt,
      category: data.category,
      tags: data.tags,
      featuredImage: data.featuredImage,
      seoTitle: data.seoTitle,
      seoDescription: data.seoDescription,
      published: data.published ?? true,
    } as BlogPost;
  });

setBlogPosts(posts);

export { posts };
