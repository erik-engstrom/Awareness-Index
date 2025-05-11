class Section < ApplicationRecord
  has_many :subsections, dependent: :destroy
end
