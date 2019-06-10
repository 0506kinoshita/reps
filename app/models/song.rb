class Song < ApplicationRecord
  validates :singer, {presence: true}
  validates :song, {presence: true}

  belongs_to :user
end
