class CreateDatapoints < ActiveRecord::Migration
  def change
    create_table :datapoints do |t|
      t.integer :datapointgroup_id
      t.boolean :done

      t.timestamps
    end
  end
end
