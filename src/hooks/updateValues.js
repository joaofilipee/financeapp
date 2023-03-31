
export const updateValues = (setIncomingParam, setExpenseParam, setTotalParam, recipes) => {
    let incomeValue = 0
    let expenseValue = 0

    recipes.forEach(recipe => recipe.type === "income" ? incomeValue += recipe.amount : expenseValue += recipe.amount)

    setIncomingParam(incomeValue)
    setExpenseParam(expenseValue)
    setTotalParam(incomeValue - expenseValue)
}