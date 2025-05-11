class Subsection < ApplicationRecord
  belongs_to :section
  has_many :resource_links, dependent: :destroy
end
