class Patient < ActiveRecord::Base 
    has_many :doctors_patients
    has_many :doctors, through: :doctors_patients

    has_many :hospitals, through: :doctors
end