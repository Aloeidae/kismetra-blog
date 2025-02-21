interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://marvelous-rugelach-bd7ba0.netlify.app/',
	author: 'Aloeidae', 
	title: 'Kismetra', 
	description: 'Kismetra unveils hidden cultural gems, mystical traditions, and everyday wonders—exploring the strange, the superstitious, and the surprisingly familiar.', 
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', 
	paginationSize: 6 
}
