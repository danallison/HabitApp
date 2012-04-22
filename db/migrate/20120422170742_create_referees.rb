class CreateReferees < ActiveRecord::Migration
  def change
    create_table :referees do |t|
      t.string :name
      t.string :first_name
      t.string :last_name
      t.string :email_address

      t.timestamps
    end
  end
end
