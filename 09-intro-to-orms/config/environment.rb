require 'bundler'
require_relative '../lib/book.rb'
require_relative '../lib/author.rb'
Bundler.require

DB = SQLite3::Database.new('db/library.db')