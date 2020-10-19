require 'test_helper'

class SubmissionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @submission = submissions(:one)
  end

  test "should create submission" do
    assert_difference('Submission.count') do
      post submissions_path, params: { submission: { first_name: 'foo', last_name: 'bar', email: 'foo@example.com', slogan: 'test submission slogan' } }
    end
  end

end
