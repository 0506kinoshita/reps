Rails.application.routes.draw do
  devise_for :users
  get "/"=> "songs#index"
  # get "songs/new" => "songs#new"
  post  "/" =>  "songs#create"
  delete "songs/:id"  => "songs#destroy"

end
