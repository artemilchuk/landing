# Lunapark

## About

Lunapark is Starter kit for Middleman — a static site generator built in Ruby. Lunapark based on [Proteus Middleman](https://github.com/thoughtbot/proteus-middleman) by [thoughtbot](http://thoughtbot.com).


## Includes

* [SLIM](http://slim-lang.com/):
  A lightweight templating engine
* [Coffeescript](http://coffeescript.org):
  Write javascript with simpler syntax
* [Sass (LibSass)](http://sass-lang.com):
  CSS with superpowers
* [Bourbon](http://bourbon.io):
  Sass mixin library
* [Neat](http://neat.bourbon.io):
  Semantic grid for Sass and Bourbon
* [Bitters](http://bitters.bourbon.io):
  Scaffold styles, variables and structure for Bourbon projects.
* [Middleman Live Reload](https://github.com/middleman/middleman-livereload):
  Reloads the page when files change
* [Middleman Deploy](https://github.com/karlfreeman/middleman-deploy):
  Deploy your Middleman build via rsync, ftp, sftp, or git (deploys to Github Pages by default)
* [Font Awesome](https://github.com/cristianferrarig/font-awesome-middleman):
  the Font-Awesome web fonts and stylesheets as a Middleman engine
* [Autoprefixer](https://github.com/middleman/middleman-autoprefixer): Automatically vendor-prefix stylesheets served by Middleman


## Getting Started

Set up your project in your code directory
```
git clone https://github.com/mokhniuk/lunapark.git your-project-folder
cd your-project-folder
git remote rm origin
git remote add origin your-git-url
```

Install dependencies:
```
bundle install
```

Run the server
```
middleman
```


## Directories

Stylesheets, fonts, images, and JavaScript files go in the `/source/assets/` directory.
Vendor stylesheets and JavaScripts should go in each of their `/vendor/` directories.
Data files go in the '/data/' directory.
Helpers files go in the '/helpers/' directory.


## Contributing

If you have problems, please create a
[GitHub Issue](https://github.com/mokhniuk/lunapark/issues).

Have a fix or want to add a feature?
[Pull Requests](https://github.com/mokhniuk/lunapark/pulls) are welcome!



## To do

* [favicons](https://github.com/follmann/middleman-favicon-maker)
* [thumbnailer](https://github.com/kubenstein/middleman-simple-thumbnailer)
* [webp](https://github.com/iiska/middleman-webp)
* [create svg sprites](https://github.com/varvet/middleman-scavenger)
* [open graph](https://github.com/ngs/middleman-ogp)
* [meta-tags](https://github.com/tiste/middleman-meta-tags)
* [google analytics](https://github.com/danielbayerlein/middleman-google-analytics)
* [patterns!](https://github.com/beardedstudio/middleman-patterns)