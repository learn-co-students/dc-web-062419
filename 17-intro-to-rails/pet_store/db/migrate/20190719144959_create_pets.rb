class CreatePets < ActiveRecord::Migration[5.2]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :animal
      t.string :owner
      t.integer :age

      t.timestamps
    end
  end
end
