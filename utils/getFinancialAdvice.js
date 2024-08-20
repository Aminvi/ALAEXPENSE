// utils/getFinancialAdvice.js

// Function to generate personalized financial advice
const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  console.log(totalBudget, totalIncome, totalSpend);
  try {
    // Send the financial data to your Flask API
    const response = await fetch('https://finapp-7f3x.onrender.com/ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: 'Provide financial advice',
        totalBudget,
        totalIncome,
        totalSpend,
      }),
    });

    // Check if the response is OK (status code 200)
    if (!response.ok) {
      throw new Error('Failed to fetch financial advice');
    }

    // Parse the JSON response from the Flask API
    const data = await response.json();

    // Extract and return the advice
    const advice = data.response;
    console.log(advice);
    return advice;
  } catch (error) {
    console.error('Error fetching financial advice:', error);
    return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
  }
};

export default getFinancialAdvice;
