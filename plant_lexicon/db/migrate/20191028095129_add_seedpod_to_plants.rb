class AddSeedpodToPlants < ActiveRecord::Migration[6.0]
  def change
    add_column :plants, :image_seedpod, :string
    rename_column :plants, :image, :image_mature
  end
end
