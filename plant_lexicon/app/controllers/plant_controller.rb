class PlantController < ApplicationController
  def index
    @header = 'Plant Lexicon'
    @plants_all = Plant.all
    puts ""
  end

  def new

  end

  def show
    @plant = Plant.find(params[:id])

  end

  def create

  end

end
