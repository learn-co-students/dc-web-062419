Doctor.destroy_all
Patient.destroy_all
Hospital.destroy_all

jd = Doctor.find_or_create_by(name: "John Dorian", 
    specialty: "internal medicine")
eliot = Doctor.find_or_create_by(name: "Eliot Reid", specialty: "Endocrinology")
turk = Doctor.find_or_create_by(name: "Chris Turk", specialty: "Surgery")

sacred_heart = Hospital.find_or_create_by(name: "Sacred Heart")

mrs_wilke = Patient.find_or_create_by(name: "Mrs Wilke")
mrs_wilke.doctors << jd
mrs_wilke.doctors << eliot
mrs_wilke.doctors << turk 
# mrs_wilke.save

johnny = Patient.find_or_create_by(name: "Johnny the Tackling Alzheimer's Patient")

johnny.doctors << jd
# johnny.save

miss_judy = Patient.find_or_create_by(name: "Miss Judy")
miss_judy.doctors << jd
# miss_judy.save

jd.hospital = sacred_heart
# jd.save

eliot.hospital = sacred_heart
# eliot.save

sacred_heart.doctors << turk


