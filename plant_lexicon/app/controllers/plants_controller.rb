class PlantsController < ApplicationController
  def index
    @plants_all = Plant.all
  end

  def full
    @plants = Plant.all

  end

  def detailed
    @plants = Plant.all

  end

  def add

  end

  def create
    add = Plant.new(user_params)
    add.save

  end

  def plant_params
    params.require(:plant).permit(:classification, :common_name, :postcode, :scientific_name, :image, :origin, :australian_growing_zone, :predators, :palatability, :toxicity, :control, :notes, :external_link)
  end

end
