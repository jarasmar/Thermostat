require 'sinatra/base'
require './lib/saved_data'

class Thermostat < Sinatra::Base

  get '/' do
    File.read('public/index.html')
  end

  get '/load' do
    # Return a json string representing the data hash
    {:temperature => Saved_Data.get_data[0], :power_saving => Saved_Data.get_data[1]}.to_json
  end

  post '/save' do
    temperature = params[:temperature]
    power_saving = params[:power_saving]
    Saved_Data.save_data(temperature, power_saving)
  end

  run! if app_file == $0
end
