Rails.application.routes.draw do
  root 'pages#index'

  get '/riders' => 'riders#index'
 
  get '*path' => 'pages#index'
end
