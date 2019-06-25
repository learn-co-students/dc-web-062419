
# For each of the following examples, write two methods that solve the 
# problem:  One that uses `.each` and one that uses one of the higher level 
# iterator methods

# Remember:

# map/collect:  Returns an array where each value of the original array 
# corresponds to an element in the new array

# find/detect:  Returns the first element for which the statement in the block
# evaluates as True

# select/find_all:  Returns an array of _all_ elements for which the statement in
# the block evaluates as True

nums = (1..20).to_a #creates an array of all numbers from 1-20
# print nums
# 1.  Create an array of numbers where each new number is three times as big as
# its original number (e.g., [3, 6, 9])

times_three = []
nums.each do |num|
    times_three << num * 3
end
print times_three
# print times_three

three_times_map = nums.map do |num|
    num * 3
end

# print three_times_map

# 2.  Find the first number that is divisible by 7

divisible = "nil"
nums.each do |num|
    if num % 7 == 0
        divisible = num
        break
    end
end
# puts divisible

divisible_find = nums.find {|num| num % 7 == 0}
# puts divisible_find

# 3.  Find all numbers that are divisible by 7

all_div = []
nums.each do |num|
    if num % 7 == 0
        all_div << num 
    end
end

# print all_div

divisible_select = nums.select {|num| num % 7 == 0}
# print divisible_select

# 4.  Find the first number that is divisible by 7 AND greater than 10

good_num = nums.find do |num|
    num % 7 == 0 && num > 10
end
# print good_num

# Bonus:

# 5.  Create an array of the squares (the number times itself) of all numbers
# that are divisible by 7

big_squares = nums.select do |num| 
                num % 7 == 0
              end.map do |n| 
                n ** 2
              end

print big_squares
















