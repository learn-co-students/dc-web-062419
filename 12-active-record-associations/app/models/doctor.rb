class Doctor < ActiveRecord::Base
    belongs_to :hospital
    has_many :doctors_patients
    has_many :patients, through: :doctors_patients

end