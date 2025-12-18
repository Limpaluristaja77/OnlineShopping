function applyAgeRestrictions(customerAge, productType) {
    // Varem oli <= 21, mis keelas ka 21-aastasel osta.
    if (customerAge < 21) {
        return false;
    }

    if (customerAge >= 21 && customerAge <= 25 && ["C", "D"].includes(productType)) {
        return false;
    }

    return true;
}

function applyProductPriceRules(basePrice, productType, hasReturns, isLoyaltyMember) {

    if (productType === "D") {
        basePrice *= 1.20;
    }

    if (hasReturns) {
        basePrice += 150;
    }

    // Varem oli * 0.10, mis andis 90% allahindlust
    if (isLoyaltyMember) {
        basePrice *= 0.90;
    }

    return basePrice;
}

function generateProductPrice() {
    // Parandasin baashinna, nuud on fikseeritud 15€ (enne see jamas mingi vanusega)
    return 15;
}

function calculateProductPrice(customerAge, productType, hasReturns, isLoyaltyMember) {
    const MAX_PRODUCT_PRICE = 2000;

    if (!applyAgeRestrictions(customerAge, productType)) {
        return "Customer does not meet the purchase requirements.";
    }

    let basePrice = generateProductPrice(customerAge);

    basePrice = applyProductPriceRules(basePrice, productType, hasReturns, isLoyaltyMember);

    // Lisasin kiire checki, et hind ei laheks alla miinimumhinna 15€
    if (basePrice < 15) {
        basePrice = 15;
    }

    if (basePrice > MAX_PRODUCT_PRICE) {
        return `Maximum price exceeded: $${MAX_PRODUCT_PRICE}`;
    }

    return basePrice;
}

exports.calculateProductPrice = calculateProductPrice;
