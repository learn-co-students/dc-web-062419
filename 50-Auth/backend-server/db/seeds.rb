15.times do
  User.create(
    username: Faker::TvShows::Friends.character, password: 'hi', avatar: Faker::Fillmurray.image, bio: Faker::TvShows::Friends.quote
  )
end
