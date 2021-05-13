 require 'pg'
class ListrelationsController < ApplicationController
   skip_authorization_check
  # check_authorization :unless => :trust
  def search
      @res = searchByName(params[:name])
  #    if @res.blank? then @res = nil end
      render xml: (@res.to_a)
#      render xml: Nokogiri::XML(@res).to_a

  end
  def searchByName(name)
    con = PG.connect :dbname => 'openstreetmap', :user => 'fernando', :password => 'Pitufo26B0', :host => '172.30.0.1'
con.exec   "SELECT relation_id , k ,v ,version FROM relation_tags WHERE k ='ref' AND v LIKE '%" + name.to_s + "%' AND version='1'"
  #   query = "select relation_id , k ,v ,version from relation_tags where k ='ref' and v like '%" + name.to_s + "%' and version='1'"
#    con.exec "SELECT query_to_xml('select relation_id , k , v from relation_tags where v like ''%TET%'',TRUE,FALSE,'')"
  end
end
