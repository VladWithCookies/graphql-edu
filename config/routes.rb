Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/api/v1/graphql"

  root to: 'home#index'

  namespace :api do
    namespace :v1 do
      post "graphql" => "graphqls#create"
    end
  end
end
