# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

hostess = Retailer.find_or_create_by(name: "Hostess", year_established: 1904)
mars = Retailer.find_or_create_by(name: "Mars", year_established: 1909)

Snack.find_or_create_by(name: "Twinkies", calories: 500,
                        deliciousness: 3, retailer: hostess)
Snack.find_or_create_by(name: "Ho-hos", calories: 600,
                        deliciousness: 6, retailer: hostess)
Snack.find_or_create_by(name: "M & Ms", calories: 750,
                        deliciousness: 8, retailer: mars)
Snack.find_or_create_by(name: "Mars Bars", calories: 500,
                        deliciousness: 1, retailer: mars)
