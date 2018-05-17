class Ingredient < ApplicationRecord
  has_many :coktails, through: :doses
  has_many :doses

  validates :name, presence: :true, uniqueness: :true
end
