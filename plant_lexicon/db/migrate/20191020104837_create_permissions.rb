class CreatePermissions < ActiveRecord::Migration[6.0]
  def change
    create_table :permissions do |t|
      t.string :user_id
      t.string :acess_level

      t.timestamps
    end
  end
end
