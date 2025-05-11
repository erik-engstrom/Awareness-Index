Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Explicitly handle /cable requests with a 404 and message since ActionCable is disabled
  get "/cable", to: proc { [404, {"Content-Type" => "text/plain"}, ["WebSocket connections are not supported in this application."]] }

  namespace :api do
    namespace :v1 do
      resources :sections, only: [:index, :show] do
        resources :subsections, only: [:index], shallow: true
      end
      
      resources :subsections, only: [:index, :show] do
        resources :resource_links, only: [:index], shallow: true
      end
      
      resources :resource_links, only: [:index, :show]
    end
  end
end
