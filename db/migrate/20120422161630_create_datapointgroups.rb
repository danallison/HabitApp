class CreateDatapointgroups < ActiveRecord::Migration
  def change
    create_table :datapointgroups do |t|
      t.integer :habit_id

      t.timestamps
    end
  end
end
