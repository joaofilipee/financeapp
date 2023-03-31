
export const updateValues = (setIncomingParam, setExpenseParam, recipes) => {
    let incomeValue = 0
    let expenseValue = 0

    recipes.forEach(recipe => recipe.type === "income" ? incomeValue += recipe.amount : expenseValue += recipe.amount)

    setIncomingParam(incomeValue)
    setExpenseParam(expenseValue)
}