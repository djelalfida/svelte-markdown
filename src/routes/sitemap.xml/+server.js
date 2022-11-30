import { page } from '$app/stores';
import { fetchMarkdownPosts } from '$lib/utils/getPosts';

export async function GET() {
	const allPosts = await fetchMarkdownPosts();

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="https://www.w3.org/1999/xhtml" xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0" xmlns:news="https://www.google.com/schemas/sitemap-news/0.9" xmlns:image="https://www.google.com/schemas/sitemap-image/1.1" xmlns:video="https://www.google.com/schemas/sitemap-video/1.1">
            <url>
                <loc>https://djelalfida.com</loc>
                <changefreq>daily</changefreq>
                <priority>0.7</priority>
            </url>
            <url>
                <loc>https://djelalfida.com/about</loc>
                <changefreq>daily</changefreq>
                <priority>0.7</priority>
            </url>
            <url>
                <loc>https://djelalfida.com/project</loc>
                <changefreq>daily</changefreq>
                <priority>0.7</priority>
            </url>
            <url>
                <loc>https://djelalfida.com/blog/How-to-deploy-laravel</loc>
                <changefreq>daily</changefreq>
                <priority>0.7</priority>
            </url>
            <url>
                <loc>https://djelalfida.com/blog/about-me</loc>
                <changefreq>daily</changefreq>
                <priority>0.7</priority>
            </url>
            <url>
                <loc>https://djelalfida.com/blog/collab-days</loc>
                <changefreq>daily</changefreq>
                <priority>0.7</priority>
            </url>
            <url>
                <loc>https://djelalfida.com/blog/dell-technologies-forum-brussels</loc>
                <changefreq>daily</changefreq>
                <priority>0.7</priority>
            </url>
            <url>
                <loc>https://djelalfida.com/blog/hello-world</loc>
                <changefreq>daily</changefreq>
                <priority>0.7</priority>
            </url>
        </urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
