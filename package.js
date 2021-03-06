Package.describe({
    summary: "functions to easily output valid sitemaps"
});

Package.on_use(function (api) {
  api.use('webapp', 'server');
	api.use('robots-txt', 'server');
	api.add_files('sitemaps.js', 'server');
	
	api.export('sitemaps', 'server');
});
