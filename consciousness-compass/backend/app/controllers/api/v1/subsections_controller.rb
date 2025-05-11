class Api::V1::SubsectionsController < ApplicationController
  def index
    @subsections = if params[:section_id]
                    Section.find(params[:section_id]).subsections
                  else
                    Subsection.all
                  end
    render json: @subsections
  end

  def show
    @subsection = Subsection.find(params[:id])
    render json: @subsection, include: :resource_links
  end
end
