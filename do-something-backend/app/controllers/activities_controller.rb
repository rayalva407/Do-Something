class ActivitiesController < ApplicationController

  def index
    activities = Activity.all
    render json: activities, except: [:created_at, :updated_at]
  end

  def show
    activity = Activity.find(params[:id])
    render json: activity, except: [:created_at, :updated_at]
  end

  def create
    activity = Activity.create(activity_params)
    if activity.save
      render json: activity, except: [:created_at, :updated_at]
    else
      render json: {message: "Error! Could not save!"} 
    end

  end
  
  private

    def activity_params
      params.require(:activity).permit(:name, :type_name)
    end

end
