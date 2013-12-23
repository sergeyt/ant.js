module.exports = function(config) {
	config.set({
		basedir: ".",
		project: "simple",
		modules: [
			{
				name: "main",
				src: "*.cs",
				out: "simple.dll"
			}
		]
	});
};