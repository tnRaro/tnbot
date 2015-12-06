"use strict";

const gulp = require("gulp");
const babel = require("gulp-babel");
const eslint = require("gulp-eslint");
const mocha = require("gulp-mocha");

gulp.task("lint", () => {
	return gulp.src(["!node_modules/**", "!dest/*", "*.js", "**/*.js"])
	.pipe(eslint())
	.pipe(eslint.format())
	.pipe(eslint.failAfterError());
});

gulp.task("babel", ["lint"], () => {
	return gulp.src("src/*.js")
	.pipe(babel({
		presets: ["es2015"]
	}))
	.pipe(gulp.dest("dest"));
});

gulp.task("test", ["lint", "babel"], () => {
	return gulp.src("test/*.js")
	.pipe(mocha());
});

gulp.task("default", ["babel"]);
