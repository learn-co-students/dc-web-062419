class AddDefaultToDocking < ActiveRecord::Migration[5.2]
  def change
    change_column :dockings, :docked, :boolean, default: true
  end
end
