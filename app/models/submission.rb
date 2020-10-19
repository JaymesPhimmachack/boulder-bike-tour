class Submission < ApplicationRecord
	EMAIL_FORMAT = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
	
	validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, format: { with: EMAIL_FORMAT }, uniqueness: true
  validates :slogan, presence: true, length: { minimum:3, maximum: 50 }
end
