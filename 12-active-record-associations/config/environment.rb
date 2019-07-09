require 'bundler/setup'
Bundler.require
require 'require_all'
require_all "./app"

# setting up the database connection (old way)
# DB = SQLite3::Database.new("db/library.db")

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: "db/library.db"
)

ActiveRecord::Base.logger = Logger.new(STDOUT)
