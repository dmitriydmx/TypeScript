import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    } 
    
    getFullPrice(): number {
      return this._items.reduce((acc, item) => acc + item.price, 0);
  }

  getDiscountedPrice(discount: number): number {
      const fullPrice = this.getFullPrice();
      return fullPrice * (1 - discount / 100);
  }

  removeItemById(id: number): void {
      this._items = this._items.filter(item => item.id !== id);
  }
}


