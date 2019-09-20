require 'sinatra'
require 'sinatra/json'
require 'json'

get '/' do
  headers "Access-Control-Allow-Origin" => "*"
  json({
    temp: 21,
    maxTemp: 32,
    ps: "off"
    })
end
