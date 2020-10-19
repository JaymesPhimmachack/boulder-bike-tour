Rails.application.routes.draw do
  root 'pages#index'

  post '/submissions', to: 'submissions#create'
  get '/api/riders', to: 'riders#index'
  get '*path', to: 'pages#index'
end
