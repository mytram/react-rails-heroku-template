# frozen_string_literal: true

module Api
  class VersionsController < ActionController::API
    def show
      render json: {
        data: {
          version: '0.0.1',
          name: 'webapp'
        }
      }
    end
  end
end
