source "https://rubygems.org"
require 'json'
require 'open-uri'
require 'yaml'
#data = YAML.load(yaml_string, permitted_classes: [Time])
#data = YAML.safe_load(yaml_string, permitted_classes: [Time])
#versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages'#, '>=9'#, versions['github-pages']

gem 'json'#, '=1.8.6'
gem 'webrick'#, '>1.8.1'
gem 'jekyll', '=3.10.0'	#'=3.3.1'##Needed since this is a theme for Jekyll
gem 'jekyll-sitemap'#, '=1.4.0'
gem 'jekyll-feed'#, '=0.17.0'
gem 'rake' 			#Used to simplify building/deploying tasks
gem 's3_website'		#Used to deploy site to AWS S3-- using GitHub pages instead
gem 'mini_magick'		#Used by a raketask to compress/optimize images at build time
gem 'html_compressor'		#Used to minify our HTML at build time
gem 'sass'#, '~> 3.7.4'		#Zurb breaks with any sass above this for now
gem 'image_optim'		#Optimizes our images
gem 'image_optim_pack'		#Tools that image_optim uses
gem 'psych'#, '~> 4.0.6' 
gem "faraday-retry"#, "~> 2.2"
gem 'public_suffix'#, '>= 2.0.2'