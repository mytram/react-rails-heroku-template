# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Api::Versions', type: :request do
  it 'gets versions' do
    get '/api/versions/0'

    expect(response).to be_successful
  end
end
