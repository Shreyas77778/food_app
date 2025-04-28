// DOM Elements
const mealsContainer = document.getElementById('meals');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

// Fetch meals from API
async function fetchMeals(query = 'chicken') {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await response.json();
        displayMeals(data.meals || []);
    } catch (error) {
        console.error("API Error:", error);
        mealsContainer.innerHTML = `<p>Failed to load meals. Try again later.</p>`;
    }
}

// Display meals
function displayMeals(meals) {
    mealsContainer.innerHTML = meals.map(meal => `
        <div class="meal-card">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3>${meal.strMeal}</h3>
            <button class="add-to-cart" data-id="${meal.idMeal}">Add to Cart</button>
        </div>
    `).join('');
}

// Initialize
fetchMeals();