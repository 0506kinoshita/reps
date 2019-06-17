Rails.application.routes.draw do
  devise_for :users
  get "/"=> "songs#index"
  post  "/" =>  "songs#create"
  delete "songs/:id"  => "songs#destroy"
end
