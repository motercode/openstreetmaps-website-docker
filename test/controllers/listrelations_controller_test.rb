require 'test_helper'

class ListrelationsControllerTest < ActionDispatch::IntegrationTest
  test "should get search" do
    get listrelations_search_url
    assert_response :success
  end

end
