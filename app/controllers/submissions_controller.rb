class SubmissionsController < ApplicationController
  def new
    @submission = Submission.new
    render json: @submission, status: :ok
  end

  def create
    @submission = Submission.new(submission_params)

    respond_to do |format|
      if @submission.save
        format.html { redirect_to @submission, notice: 'Submission was successfully created.' }
        format.json { render :show, status: :created, location: @submission }
      else
        format.html { render :new }
        format.json { render json: @submission.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    def submission_params
      params.fetch(:submission, {})
    end
end
