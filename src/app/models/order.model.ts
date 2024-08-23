export interface Order {
    id: string;
    cocktailId: string;
    customerName: string;
    status: string;
    cocktailName?: string; // Optional field to hold the cocktail name
}