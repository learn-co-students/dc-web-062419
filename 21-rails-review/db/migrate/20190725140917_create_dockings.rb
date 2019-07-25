class CreateDockings < ActiveRecord::Migration[5.2]
  def change
    create_table :dockings do |t|
      t.boolean :docked
      t.integer :ship_id
      t.integer :port_id

      t.timestamps
    end
  end
end
