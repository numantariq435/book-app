exports.mongoIdRegex = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i;
exports.ibanRegex= /[A-Z]{2}\d{2}.?[A-Z]{0,4} ?\d{4} ?\d{4} ?\d{4} ?\d{0,4} ?\d{0,4} ?[\d]{0,4} ?[A-Z]{0,3} ?\d{0,4}/;