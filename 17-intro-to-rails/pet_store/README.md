# Intro to Rails

Rails was created with the goal of increasing programmer’s productivity and happiness.

It values *Convention* over *Configuration* → programmers only need to code out the non-standard parts of the application, or the parts that are specific to your application.

## Lecture Goals

* Create a new Rails application

  `gem install rails`
  * Note: versions of Rails change quite rapidly, and if you leave off the `-v =INSERT_RAILS_VERSION_HERE`, you'll just get the latest version. Be specific if you want a specific version.
  
  `rails new petstore -T` Note: the **-T** removes the test framework when creating a new rails app.

* Describe similarities between Sinatra routing & Rails routing

* Generate a controller

  `rails g controller CONTROLLER_NAME [ACTIONS]`

  typing `rails g controller pets index show` in the command line gives us the following routes in the config/routes.rb file:

    ```ruby
      get 'pets/index', to: 'pets#index'
      get 'pets/show', to: 'pets#show'
    ```

  * Note when working with rails generators, if there is a test framework already (e.g. you forgot to put -T when creating a new rails app *OR* you are working in a lab with RSPEC tests), make sure to add `--no-test-framework` when running your rails generators. This will prevent erroneous tests from being created → `rails g controller pets index show --no-test-framework`

* Create actions/methods for a RESTful controller
  * As a reminder, a RESTful resource has 7 methods → **Index, Show, New, Create, Edit, Update, Delete**

* Create views
  * No specific generator for creating the view file only → can manually create the erb and add to the correct view folder.
  * Implicit *vs.* Explicit rendering → thanks to Rails conventions, we do not need to specify the view file to render in our controller actions.

    ```ruby
      def index
      # This implicitly renders the index.html.erb
      end
    ```
  
    * However, if we want to render a different erb, we can use explicit rendering

    ```ruby  
      def index
        render 'cats'
        # This will render the cats.html.erb
      end
    ```

* Generate a model

  `rails g model MODEL_NAME [fields]`

  `rails g model pet name owner_id:integer`

* Generate a migration

  `rails g migration AddAgeToPets age:integer`
  * NOTE: the data type defaults to string, so if you want something different (e.g. integer, boolean, etc.), you need to specify in the command line or manually change it in the migration file before running the rails db:migrate command!
