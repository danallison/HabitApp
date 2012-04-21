class CreateHabits < ActiveRecord::Migration
  def change
    create_table :habits do |t|
      t.boolean :makebreak
      t.string :title
      t.string :description
      t.integer :frequency
      t.integer :duration
      t.string :consequence
      t.integer :user_id
      t.integer :referee_id

      t.timestamps
    end
  end
end
