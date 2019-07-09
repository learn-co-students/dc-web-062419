class CreateDoctorsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :doctors do |t|
        t.string :name
        t.integer :hospital_id
        t.string :specialty
    end
  end
end
