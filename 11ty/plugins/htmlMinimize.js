import htmlmin from "html-minifier-terser";

export function htmlMinimize(eleventyConfig) {
	eleventyConfig.addTransform("htmlmin", function (content) {
		if ((this.page.outputPath || "").endsWith(".html")) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
        sortAttributes: true,
        sortClassName: true,
        collapseInlineTagWhitespace: true,
				collapseWhitespace: true,
			});

			return minified;
		}

		return content;
	});
};

