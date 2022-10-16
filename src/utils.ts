export function buildQueryWhere(obj: { [key: string]: any }) {
    const conditions: string[] = [];

    for (const key in obj) {
        if (typeof obj[key] !== "undefined") {
            if (typeof obj[key] === "object" && obj[key] !== null) {
              conditions.push(`${key}: ${buildQueryWhere(obj[key])}`);
            } else if (typeof obj[key] === "string") {
                conditions.push(`${key}: "${obj[key]}"`);
            } else {
                conditions.push(`${key}: ${obj[key]}`);
            }
        }
    }

    return `{${conditions.join(", ")}}`;
}
