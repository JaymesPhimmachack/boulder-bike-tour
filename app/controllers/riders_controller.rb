class RidersController < ApplicationController
  def index
    riders = Rider.all
    render json: riders, status: :ok
  end
end

