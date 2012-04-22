class CreateHabitReferees < ActiveRecord::Migration
  def change
    create_table :habit_referees do |t|
      t.integer :habit_id
      t.integer :referee_id

      t.timestamps
    end
  end
end
