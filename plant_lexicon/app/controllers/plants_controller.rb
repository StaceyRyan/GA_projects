class PlantsController < ApplicationController
  def index
    @header = 'Plant Lexicon'
    @plants_all = Plant.all
  end

  def full
    @plants = Plant.all

  end

  def detailed
    @plants = Plant.all

  end

  def new

  end

  def create

  end

end
