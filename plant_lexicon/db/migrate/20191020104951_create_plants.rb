class CreatePlants < ActiveRecord::Migration[6.0]
  def change
    create_table :plants do |t|
      t.string :classification
      t.string :common_name
      t.string :scientific_name
      t.string :image
      t.string :origin
      t.string :australian_growing_zone
      t.string :predators
      t.string :palatability
      t.string :toxicity
      t.string :control
      t.string :notes
      t.string :external_link

      t.timestamps
    end
  end
end
