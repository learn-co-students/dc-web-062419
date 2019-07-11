require 'pry'

class PalindromeChecker

    def is_palindrome?(word)
    # returns boolean of whether word is the same backwards
      raise ArgumentError unless word.is_a?(String)
      word.gsub!(" ", "")
      word.downcase!
      word.gsub!(/[^a-z0-9]/i, "")
      if word.length <= 1
        return true
      else
        if word[0] == word[-1]
          return is_palindrome?(word[1...-1])
        else
          return false
        end
      end
    end
end