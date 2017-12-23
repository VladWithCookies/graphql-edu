class Api::V1::GraphqlsController < ApplicationController
  before_action :authenticate_user!

  def create
    query_string = params[:query]
    query_variables = JSON.load(params[:variables]) || {}
    #context = { current_user: current_user }
    context = {}
    result = Schema.execute(query_string, variables: query_variables, context: context)
    render json: result
  end
end
