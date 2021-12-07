class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :content
      t.belongs_to :movie
      t.timestamps
    end
  end
end
