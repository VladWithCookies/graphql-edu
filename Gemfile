source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.1.4'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'jbuilder', '~> 2.5'

gem 'omniauth'
gem 'devise'
gem 'graphql'
gem 'webpacker'
gem 'foreman'

group :development do
  gem 'graphiql-rails'
  gem 'letter_opener'
end

group :development, :test do
  gem 'listen'
  gem 'pry'
  gem 'rspec-rails', '~> 3.6'
  gem 'rails-controller-testing'
  gem 'factory_bot_rails'
  gem 'faker'
end
