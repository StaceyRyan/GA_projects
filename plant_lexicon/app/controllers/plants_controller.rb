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

  end

end
