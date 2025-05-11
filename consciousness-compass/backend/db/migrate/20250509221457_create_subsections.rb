class CreateSubsections < ActiveRecord::Migration[8.0]
  def change
    create_table :subsections do |t|
      t.references :section, null: false, foreign_key: true
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
