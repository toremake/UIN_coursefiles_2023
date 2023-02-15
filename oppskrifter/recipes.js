const recipes = [
  {
    title: 'Creamy Garlic Shrimp',
    slug: 'creamy-garlic-shrimp',
    ingredients: ['shrimp', 'heavy cream', 'garlic', 'butter', 'parmesan cheese', 'salt', 'pepper', 'parsley'],
    process: [
      'Melt butter in a pan over medium-high heat.',
      'Add garlic and cook until fragrant, about 30 seconds.',
      'Add shrimp and cook until pink and no longer translucent, about 2-3 minutes.',
      'Remove the shrimp from the pan and set aside.',
      'Add heavy cream and parmesan cheese to the pan.',
      'Stir until the cheese is melted and the sauce is thickened, about 2-3 minutes.',
      'Add the shrimp back to the pan and stir to coat with the sauce.',
      'Season with salt and pepper to taste.',
      'Garnish with chopped parsley and serve.'
    ]
  },
  {
    title: 'Roasted Butternut Squash Soup',
    slug: 'roasted-butternut-squash-soup',
    ingredients: ['butternut squash', 'onion', 'garlic', 'vegetable broth', 'heavy cream', 'olive oil', 'salt', 'pepper'],
    process: [
      'Preheat oven to 204 degrees C (400 degrees F).',
      'Peel and chop the butternut squash into 1-inch cubes.',
      'Peel and chop the onion into small pieces.',
      'Peel and chop the garlic into small pieces.',
      'Spread the butternut squash, onion, and garlic in a single layer on a baking sheet.',
      'Drizzle with olive oil and season with salt and pepper.',
      'Roast in the preheated oven for 30-35 minutes, or until the vegetables are tender and lightly browned.',
      'Transfer the roasted vegetables to a blender.',
      'Add vegetable broth and puree until smooth.',
      'Pour the puree into a pot and add heavy cream.',
      'Heat the soup over medium heat, stirring occasionally, until heated through.',
      'Season with salt and pepper to taste.',
      'Serve hot.'
    ]
  },
  {
    title: 'Grilled Steak with Chimichurri Sauce',
    slug: 'grilled-steak-with-chimichurri-sauce',
    ingredients: ['steak', 'olive oil', 'garlic', 'parsley', 'oregano', 'red wine vinegar', 'red pepper flakes', 'salt', 'pepper'],
    process: [
      'Preheat grill to high heat.',
      'Season steak with salt and pepper on both sides.',
      'Drizzle olive oil on both sides of the steak.',
      'Grill steak for 4-5 minutes per side for medium-rare, or until desired doneness.',
      'Remove steak from the grill and let rest for 5-10 minutes.',
      'While the steak is resting, make the chimichurri sauce.',
      'In a blender, combine garlic, parsley, oregano, red wine vinegar, red pepper flakes, salt, and pepper.',
      'Pulse until well combined.',
      'Drizzle olive oil into the blender and pulse until the sauce is smooth.',
      'Slice the steak and serve with the chimichurri sauce.'
    ]
  },
  {
    title: 'Chicken Fajitas',
    slug: 'chicken-fajitas',
    ingredients: ['chicken breasts', 'bell peppers', 'onion', 'lime juice', 'olive oil', 'garlic', 'cumin', 'chili powder', 'paprika', 'salt', 'pepper', 'tortillas', 'sour cream', 'salsa', 'guacamole'],
    process: [
      'Cut the chicken breasts into thin strips.',
      'Slice the bell peppers and onion into thin strips.',
      'In a bowl, combine lime juice, olive oil, minced garlic, cumin, chili powder, paprika, salt, and pepper.',
      'Add the chicken, bell peppers, and onion to the bowl and toss to coat with the marinade.',
      'Heat a large skillet over high heat.',
      'Add the chicken and vegetables to the skillet and cook until the chicken is no longer pink and the vegetables are tender-crisp, about 5-7 minutes.',
      'Warm the tortillas in a microwave or on a griddle.',
      'Serve the chicken fajitas with warm tortillas, sour cream, salsa, and guacamole.'
    ]
  },
  {
    title: 'Caprese Salad',
    slug: 'caprese-salad',
    ingredients: ['fresh mozzarella', 'tomatoes', 'basil leaves', 'olive oil', 'balsamic vinegar', 'salt', 'pepper'],
    process: [
      'Slice the fresh mozzarella and tomatoes into 1/4-inch slices.',
      'Arrange the mozzarella and tomato slices on a platter, alternating between the two.',
      'Tear the basil leaves and sprinkle them over the mozzarella and tomatoes.',
      'Drizzle olive oil and balsamic vinegar over the top.',
      'Season with salt and pepper to taste.',
      'Serve immediately.'
    ]
  },
  {
    title: 'Mushroom Risotto',
    slug: 'mushroom-risotto',
    ingredients: ['arborio rice', 'mushrooms', 'onion', 'garlic', 'white wine', 'vegetable broth', 'butter', 'parmesan cheese', 'salt', 'pepper'],
    process: [
      'In a large saucepan, melt the butter over medium heat.',
      'Add the chopped onion and cook until softened, about 5 minutes.',
      'Add the sliced mushrooms and minced garlic and cook for another 5 minutes, or until the mushrooms are tender.',
      'Add the arborio rice and stir to coat with the butter and mushroom mixture.',
      'Pour in the white wine and cook until the liquid is absorbed.',
      'Add a ladleful of vegetable broth and stir until the liquid is absorbed.',
      'Repeat this process, adding more broth and stirring frequently, until the rice is tender and creamy, about 20-25 minutes.',
      'Stir in the grated parmesan cheese and season with salt and pepper to taste.',
      'Serve hot.'
    ]
  },
  {
    title: 'Roasted Vegetable Quinoa Bowl',
    slug: 'roasted-vegetable-quinoa-bowl',
    ingredients: ['quinoa', 'broccoli', 'carrots', 'red onion', 'red bell pepper', 'olive oil', 'garlic powder', 'paprika', 'cumin', 'salt', 'pepper', 'avocado', 'feta cheese', 'lemon juice'],
    process: [
      'Preheat oven to 204 degrees C (400 degrees F).',
      'Cut broccoli into bite-sized florets, slice carrots and red onion, and seed and slice red bell pepper.',
      'Place vegetables on a baking sheet and drizzle with olive oil. Season with garlic powder, paprika, cumin, salt, and pepper. Toss to coat vegetables.',
      'Roast vegetables for 20-25 minutes or until tender and lightly browned.',
      'Cook quinoa according to package instructions.',
      'To assemble bowls, start with a scoop of quinoa, then top with roasted vegetables, sliced avocado, crumbled feta cheese, and a squeeze of fresh lemon juice.',
      'Serve hot.'
    ]
  },
  {
    title: 'Pesto Pasta Salad',
    slug: 'pesto-pasta-salad',
    ingredients: ['pasta', 'cherry tomatoes', 'black olives', 'red onion', 'fresh basil', 'pesto', 'olive oil', 'lemon juice', 'salt', 'pepper', 'parmesan cheese'],
    process: [
      'Cook pasta according to package instructions. Drain and rinse with cold water to stop the cooking process.',
      'Halve cherry tomatoes, slice black olives and red onion, and chop fresh basil.',
      'In a large bowl, combine cooked pasta with cherry tomatoes, black olives, red onion, and chopped basil.',
      'Add pesto, olive oil, lemon juice, salt, and pepper to the bowl and toss everything to combine.',
      'Sprinkle parmesan cheese over the top of the salad and serve chilled.'
    ]
  }
]