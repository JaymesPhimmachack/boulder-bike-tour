require 'test_helper'

class RidersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_riders_path
    assert_response :success
  end

end
