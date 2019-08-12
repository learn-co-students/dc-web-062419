# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.find_or_create_by(name: "Fluffy", breed: "Sphynx", gender: "female", fluffiness: 1, image: "https://i.etsystatic.com/7638409/r/il/60e11c/685384713/il_794xN.685384713_oxl2.jpg")
Cat.find_or_create_by(name: "Shortie", breed: "Tabby", gender: "male", fluffiness: 3, image: "http://fallinpets.com/wp-content/uploads/2017/12/tabby-cat-breed-800x445.jpg")
Cat.find_or_create_by(name: "Scratchy", breed: "Persian", gender: "non-binary", fluffiness: 6, image: "https://persiancatcorner.com/wp-content/uploads/2018/07/430-1024x768.jpg")
Cat.find_or_create_by(name: "Snoozie", breed: "Siamese", gender: "female", fluffiness: 2, image: "https://st2.depositphotos.com/1327878/5374/i/950/depositphotos_53741091-stock-photo-siamese-cat-sleeping.jpg")
Cat.find_or_create_by(name: "Karl Marx", breed: "Tiger", gender: "alpha", fluffiness: 10, image: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxNzE5NjI0MjA1/karl-marx-9401219-1-402.jpg")

Hobby.find_or_create_by(name: "eating")
Hobby.find_or_create_by(name: "sleeping")
Hobby.find_or_create_by(name: "playing")
Hobby.find_or_create_by(name: "hiking")

CatHobby.create(cat_id: Cat.all.sample.id, hobby_id: Hobby.all.sample.id)
CatHobby.create(cat_id: Cat.all.sample.id, hobby_id: Hobby.all.sample.id)
CatHobby.create(cat_id: Cat.all.sample.id, hobby_id: Hobby.all.sample.id)
CatHobby.create(cat_id: Cat.all.sample.id, hobby_id: Hobby.all.sample.id)
CatHobby.create(cat_id: Cat.all.sample.id, hobby_id: Hobby.all.sample.id)
CatHobby.create(cat_id: Cat.all.sample.id, hobby_id: Hobby.all.sample.id)
CatHobby.create(cat_id: Cat.all.sample.id, hobby_id: Hobby.all.sample.id)
CatHobby.create(cat_id: Cat.all.sample.id, hobby_id: Hobby.all.sample.id)




