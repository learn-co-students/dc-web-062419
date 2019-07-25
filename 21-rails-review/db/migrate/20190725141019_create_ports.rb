class CreatePorts < ActiveRecord::Migration[5.2]
  def change
    create_table :ports do |t|
      t.integer :docks
      t.string :location
      t.string :name
      t.string :category

      t.timestamps
    end
  end
end
