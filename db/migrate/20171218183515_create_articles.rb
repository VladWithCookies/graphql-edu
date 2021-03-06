class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.string :title, null: false, default: ""
      t.text :content, null: false, default: ""
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
