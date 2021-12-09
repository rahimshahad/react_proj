# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

movie = Movie.create(title:"Mummy", plot:"in ancient mayan empire, in what is now Peru, ....", setting:"Mayan Empire", genre:"Historical Fiction")

review = Review.create(content:"Too many histrocial inaccuracies in the timeline.", movie_id: 1)

# 10.each do 
#     title = Faker::Movie.title
#     plot =