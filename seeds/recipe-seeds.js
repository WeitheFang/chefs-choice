const { Recipe } = require('../models');

const recipeData = [
  {
    recipe_name: 'Avocado Breakfast Sandwich',
    preparation_time: '16 minutes',
    difficulty: 'Easy',
    recipe_directions: 'Heat olive oil in a skillet over medium heat. Crack eggs into skillet; cook for 1 to 2 minutes. Flip and cook egg until done, 2 to 5 minutes more. Transfer eggs to a plate and season with salt and pepper. Spread butter onto 1 side of each bread slice. Heat a skillet over medium heat. Lay bread slices in the hot skillet, butter-side down. Quickly layer Swiss cheese, 1 fried egg, Cheddar cheese, 1 fried egg, avocado, and remaining bread slice, butter-side up. Carefully flip sandwich to grill other side until golden brown, 3 to 4 minutes. Remove sandwich from skillet and cut in half.',
    image: 'https://res.cloudinary.com/dhniskpvl/image/upload/v1674767567/Recipes/image_cdlxed.jpg',
    user_id: 1,
    comment_id: 1,
  },
  {
    recipe_name: 'Oyakodon (Japanese Chicken and Egg Rice Bowl)',
    preparation_time: '40 minutes',
    difficulty: 'Medium', 
    recipe_directions: 'Heat oil in a large skillet over medium heat. Add chicken and cook until beginning to brown, about 5 minutes. Add onion; cook and stir until onion is translucent, about 5 minutes. Pour in stock, then whisk in soy sauce, mirin, and brown sugar; stir until sugar dissolves. Bring to a boil, then lower heat and simmer until slightly reduced, about 10 minutes. Whisk eggs in a bowl until well-beaten, then pour into the hot stock mixture. Cover the skillet, reduce the heat, and steam until egg is cooked, about 5 minutes. Remove from the heat. Divide rice among 4 deep soup bowls and top with equal amounts of the soup mixture.',
    image: 'https://res.cloudinary.com/dhniskpvl/image/upload/v1674767635/Recipes/image_z9znvc.jpg',
    user_id: 1,
    comment_id: 2,
  },
  {
    recipe_name: 'Tiramoussa Semifreddo - Frozen Italian Coffee Dessert',
    preparation_time: '4 hours and 30 minutes',
    difficulty: 'Easy',
    recipe_directions: 'Combine egg yolks, instant dark roast coffee, marsala wine, and sugar in a metal bowl and whisk together until smooth. Place bowl in the top of a double boiler over lightly simmering water. Whisk constantly until mixture thickens and drippings from the whisk form ribbons on the surface that are visible for 1/2 second to 1 second, about 10 minutes. If you are "brave", you can set the bowl directly over medium-low heat and thicken the egg cream that way, but you have to be careful so you do not end up with scrambled eggs. This last method is slightly faster and will take about 6 to 7 minutes. Beat egg whites in a glass, metal, or ceramic bowl until foamy. Gradually add salt and continue to beat until stiff peaks form. Set aside. Beat heavy cream in a chilled glass or metal bowl with an electric mixer until medium-stiff peaks form. Using a spatula, fold in egg yolk mixture until combined. Add half of the egg whites and fold in until combined. Then fold in remaining egg whites until well combined. Transfer mixture into small 4 ounce jam jars and close with lids. Freeze for 4 hours or overnight.',
    image: 'https://res.cloudinary.com/dhniskpvl/image/upload/v1674767699/Recipes/Tiramoussa-Semifreddo-1x1-1-2000-fdc0bef2c5954a3ba86079ce5b3453b2_riqnp5.webp',
    user_id: 2,
    comment_id: 4,
  },
  {
    recipe_name: 'Air-Fried Raspberry Brie Bites',
    preparation_time: '35 minutes',
    difficulty: 'Hard',   
    recipe_directions: 'Slice the brie into squares about ½ inch thick and 1 to 1 ½ inches wide. Roll out 1 sheet of phyllo dough vertically on a large work surface. Brush the bottom half of the dough with melted butter, then fold the top half over onto itself. Place 1 piece of cheese in the bottom center of the dough, about 2 inches from the edges. Spoon about 2 teaspoons raspberry jam onto the cheese. Brush melted butter around the rest of the dough. Fold in the bottom 2 inches of dough over the cheese, then fold in both sides. Brush more butter onto the remaining dough, then carefully roll the filling upwards until it is wrapped fully. Brush more butter on top and set into the air fryer try. Set air fryer to 375 degrees F (190 degrees C). Air fry in batches to avoid overcrowding until golden-brown, 4 to 5 minutes. Garnish with a thin drizzle of honey and a pinch of flakey salt. Serve immediately.',
    image: 'https://res.cloudinary.com/dhniskpvl/image/upload/v1674767738/Recipes/Air-Fried-Raspberry-Brie-Bites-1x1-1-febbe855420f421e9d355c388aea6cc3_dnebmn.webp',
    user_id: 2,
    comment_id: 3,
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;