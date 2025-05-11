class Api::V1::ResourceLinksController < ApplicationController
  def index
    @resource_links = if params[:subsection_id]
                        Subsection.find(params[:subsection_id]).resource_links
                      else
                        ResourceLink.all
                      end
    render json: @resource_links
  end

  def show
    @resource_link = ResourceLink.find(params[:id])
    render json: @resource_link
  end
end
