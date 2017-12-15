Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'registrations' }
  root to: 'home#index'

  mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/api/v1/graphql"

  namespace :api do
    namespace :v1 do
      post "graphql" => "graphqls#create"
    end
  end
end
