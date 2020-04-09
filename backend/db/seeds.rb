# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'json'

path = File.join(File.dirname(__FILE__), "/champion.json")
champions = JSON.parse(File.read(path))
champions_array = champions['data'].to_a

SummonerProfile.destroy_all
Champion.destroy_all
SummonerProfileChampionJoiner.destroy_all

champions_array.each do |champion|
  champ = champion.to_a[1]
  Champion.create(name: champ['name']) #need to add each attribute
end

sp1 = SummonerProfile.create(name: 'noobSummoner')
sp2 = SummonerProfile.create(name: 'mediumSummoner')

SummonerProfileChampionJoiner.create(summoner_profile_id: sp1.id, champion_id: Champion.first.id)
SummonerProfileChampionJoiner.create(summoner_profile_id: sp1.id, champion_id: Champion.second.id)

SummonerProfileChampionJoiner.create(summoner_profile_id: sp2.id, champion_id: Champion.second.id)
