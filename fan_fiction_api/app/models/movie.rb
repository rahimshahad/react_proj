class Movie < ApplicationRecord
    has_many :reviews

    validates :title, :plot, :setting, :genre, presence: true
end
