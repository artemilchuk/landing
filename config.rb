activate :directory_indexes
activate :autoprefixer

set :relative_links, true
set :css_dir, "assets/stylesheets"
set :js_dir, "assets/javascripts"
set :images_dir, "assets/images"
set :fonts_dir, "assets/fonts"
set :data_dir, "data"
set :layout, "layouts/application"

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :development do
  activate :livereload
  activate :automatic_alt_tags
end

configure :build do
  activate :relative_assets
  activate :minify_css
  activate :minify_javascript

  activate :gzip
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.deploy_method = :git
end
