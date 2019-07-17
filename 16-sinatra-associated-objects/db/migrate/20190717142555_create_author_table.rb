class CreateAuthorTable < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |c|
        c.string :name
    end
  end
end
