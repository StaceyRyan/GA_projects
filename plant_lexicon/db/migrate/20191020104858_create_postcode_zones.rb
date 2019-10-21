class CreatePostcodeZones < ActiveRecord::Migration[6.0]
  def change
    create_table :postcode_zones do |t|
      t.string :sowing_zone

      t.timestamps
    end
  end
end
