class Api::V1::RestaurantsController < ApplicationController
  def index
    restaurants = Restaurant.all

    render json: {
      restaurants: restaurants,
    }, status: :ok
  end
end


# module Api
#   module V1
#     class RestaurantsController < ApplicationController
#     ...
#     end
#   end
# end
