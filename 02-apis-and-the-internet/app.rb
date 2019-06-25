require 'rest-client'
require 'json'
require 'pry'

GOOGLE_BOOKS_API_BASE_URL = "https://www.googleapis.com/books/v1/volumes?q="





def welcome_user
    puts "Welcome to our book searcher"
end

def get_search_terms
    # get user input for a search term
    puts "What would you like to search for?"
    search_terms = gets.chomp
    return search_terms.split(" ").join("+")
end

def get_json_from_google_books(search_terms)
    # submit a request to GB API to get a json of books
    url = GOOGLE_BOOKS_API_BASE_URL + search_terms
    response = RestClient.get(url)
    return JSON.parse(response.body)
end

def parse_json(json)
    # format json to put first ten books/authors in array of hashes
    # [{author: "Mark Twain", title: "Romeo and Juliet"}]
    # json["items"][0]["volumeInfo"]["title"]
    first_ten = json["items"][0...10]
    book_results = first_ten.map do |book|
        {"title": book["volumeInfo"]["title"], 
         "authors": book["volumeInfo"]["authors"]}
    end
    return book_results
end

def format_author(author_array)
    author_array.join(" & ")
end

def print_results(books)
    books.each do |book|
        puts "********************"
        # binding.pry
        puts "#{book[:title]} by #{format_author(book[:authors])}"
    end
end

def run
    welcome_user
    search_terms = get_search_terms
    json = get_json_from_google_books(search_terms)
    book_array = parse_json(json)
    print_results(book_array)
    # binding.pry
end

run










