class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :content, :movie_id
end