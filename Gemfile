source "https://rubygems.org"
require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']

gem 'jekyll'	#Needed since this is a theme for Jekyll
gem 'jekyll-sitemap'
gem 'jekyll-feed'
gem 'rake' 			#Used to simplify building/deploying tasks
# gem 's3_website'		#Used to deploy site to AWS S3-- using GitHub pages instead
gem 'mini_magick'		#Used by a raketask to compress/optimize images at build time
gem 'html_compressor'		#Used to minify our HTML at build time
gem 'sass', '~> 3.2.19'		#Zurb breaks with any sass above this for now
gem 'image_optim'		#Optimizes our images
gem 'image_optim_pack'		#Tools that image_optim uses
