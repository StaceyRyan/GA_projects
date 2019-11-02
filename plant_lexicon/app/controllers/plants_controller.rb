class PlantsController < ApplicationController
  def index
    @plants_all = Plant.all
  end

  def full
    @plants = Plant.all
  end

  def detailed
    @plants = Plant.find(params[:id])
    @permission = Permission.find_by_user_id(session[:user_id])
  end

  def add

  end

  def create
    p1 = Plant.new
    p1.classification = params[:classification]
    p1.common_name = params[:common_name]
    p1.scientific_name = params[:scientific_name]
    p1.image_mature = params[:image_mature]
    p1.image_seedpod = params[:image_seedpod]
    p1.origin = params[:origin]
    p1.australian_growing_zone = params[:australian_growing_zone]
    p1.predators = params[:predators]
    p1.palatability = params[:palatability]
    p1.toxicity = params[:toxicity]
    p1.control = params[:control]
    p1.notes = params[:notes]
    p1.external_link = params[:external_link]
    p1.save
    redirect_to loggedin_index_path
  end

  def plant_params
    params.require(:plant).permit(:classification, :common_name, :postcode, :scientific_name, :image, :origin, :australian_growing_zone, :predators, :palatability, :toxicity, :control, :notes, :external_link)
  end

  def edit
    @plant = Plant.find(params[:id])
  end

  def update
    plant = Plant.find(params[:id])
    plant.classification = params[:classification] if params[:classification]
    plant.common_name = params[:common_name] if params[:common_name]
    plant.scientific_name = params[:scientific_name] if params[:scientific_name]
    plant.image_mature = params[:image_mature] if params[:image_mature]
    plant.image_seedpod = params[:image_seedpod] if params[:image_seedpod]
    plant.origin = params[:origin] if params[:origin]
    plant.australian_growing_zone = params[:australian_growing_zone] if params[:australian_growing_zone]
    plant.predators = params[:predators] if params[:predators]
    plant.palatability = params[:palatability] if params[:palatability]
    plant.toxicity = params[:toxicity] if params[:toxicity]
    plant.control = params[:control] if params[:control]
    plant.notes = params[:notes] if params[:notes]
    plant.external_link = params[:external_link] if params[:external_link]
    plant.save
    redirect_to loggedin_index_path
  end
end
