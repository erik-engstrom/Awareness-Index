class Api::V1::SectionsController < ApplicationController
  def index
    @sections = Section.all
    render json: @sections
  end

  def show
    @section = Section.find(params[:id])
    render json: @section, include: { subsections: { include: :resource_links } }
  end
end
