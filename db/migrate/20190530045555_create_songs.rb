class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string  :singer
      t.string  :song

      t.timestamps
    end
  end
end
