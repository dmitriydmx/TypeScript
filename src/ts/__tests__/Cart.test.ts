import Cart from '../service/Cart';
import Buyable from '../domain/Buyable';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

describe('Cart', () => {
  let cart: Cart;
  let item1: Buyable;
  let item2: Buyable;

  beforeEach(() => {
      cart = new Cart();
      item1 = {id: 1, name: 'Item 1', price: 100};
      item2 = {id: 2, name: 'Item 2', price: 200};
  });

  it('should calculate full price correctly', () => {
      cart.add(item1);
      cart.add(item2);
      expect(cart.getFullPrice()).toBe(300);
  });

  it('should calculate discounted price correctly', () => {
      cart.add(item1);
      cart.add(item2);
      expect(cart.getDiscountedPrice(10)).toBe(270);
  });

  it('should remove item by id', () => {
      cart.add(item1);
      cart.add(item2);
      expect(cart.items.length).toBe(2);
      cart.removeItemById(1);
      expect(cart.items).toEqual([item2]);
  });
});
