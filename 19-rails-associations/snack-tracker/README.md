# Steps for Nested Forms

- `accepts_nested_attributes_for :snacks` at top of Retailer model

- Build nested form:

    ```rb
        <%= f.fields_for :snacks do |snack| %>
            <%= snack.label :name %>
            <%= snack.text_field :name %>
            <%= snack.label :calories %>
            <%= snack.number_field :calories, step: 50 %>
            <%= snack.label :deliciousness %>
            <%= snack.select :deliciousness, (1..10) %>
        <% end %>
    ```

- Build empty snack holders in controller:
    `    @retailer.snacks.build`

- Add to strong params:
    `    params.require(:retailer).permit(:name, :year_established,
        snacks_attributes: [:name, :calories, :deliciousness])`