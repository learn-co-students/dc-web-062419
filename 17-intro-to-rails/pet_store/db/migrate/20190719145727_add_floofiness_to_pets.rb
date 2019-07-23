class AddFloofinessToPets < ActiveRecord::Migration[5.2]
  def change
    add_column :pets, :floofiness, :integer
  end
end
