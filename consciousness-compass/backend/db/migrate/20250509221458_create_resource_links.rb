class CreateResourceLinks < ActiveRecord::Migration[8.0]
  def change
    create_table :resource_links do |t|
      t.references :subsection, null: false, foreign_key: true
      t.string :title
      t.string :url
      t.text :description

      t.timestamps
    end
  end
end
