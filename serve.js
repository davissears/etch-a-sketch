const server = Bun.serve({
	port: 3000,
	async fetch(request) {
		const url = new URL(request.url);
		const filePath = `./${url.pathname === "/" ? "index.html" : url.pathname}`;

		try {
			const file = Bun.file(filePath);
			return new Response(file);
		} catch (_error) {
			return new Response("Not Found", { status: 404 });
		}
	},
});

console.log(`Serving files from . on http://localhost:${server.port}`);
