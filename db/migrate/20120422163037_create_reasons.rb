class CreateReasons < ActiveRecord::Migration
  def change
    create_table :reasons do |t|
      t.integer :habit_id
      t.string :name
      t.text :description
      t.string :image_url

      t.timestamps
    end
  end
end
