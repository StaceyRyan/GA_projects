class PlantController < ApplicationController
  def index
    @header = 'Plant Lexicon'
    @plants_all = Plant.all
  end

  def new

  end

  def show
    @plants = Plant.find(params[:id])

  end

  def create

  end

end
