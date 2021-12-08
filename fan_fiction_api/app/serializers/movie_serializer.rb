class MovieSerializer < ActiveModel::Serializer
    attributes :id, :title, :plot, :setting, :genre, :reviews
end 