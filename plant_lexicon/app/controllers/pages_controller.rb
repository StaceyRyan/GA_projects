class PagesController < ApplicationController

  # before_action :authorize

  def index
    @header = 'Plant Lexicon'
    @plants_all = Plant.all
    puts ""
  end

end