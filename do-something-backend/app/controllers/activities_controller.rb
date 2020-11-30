class ActivitiesController < ApplicationController

  def index
    activities = Activity.all
    render json: activities
  end

  def create
    activity = Activity.create(tracker_params)
    if activity.save?
      render json: activity, except: [:created_at, :updated_at]
    else
      render json: {message: "Error! Could not save!"} 
  end
  
  private

    def activity_params
      params.require(:activity).permit(:name, :type)
    end

end
