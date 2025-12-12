import { describe, expect, it, vi } from 'vitest';
import { Inventory, Item } from './item';

describe('Item', () => {
  it('should create an item with id and name', () => {
    const item = new Item('sword-01', 'Sword');
    expect(item.id).toBe('sword-01');
    expect(item.name).toBe('Sword');
  });
});

describe('Inventory', () => {
  
  describe('constructor', () => {
    it('should create an inventory with 50 empty slots', () => {
      const inventory = new Inventory();
      expect(inventory.maxSlots).toBe(50);
      expect(inventory.slots.length).toBe(50);
      expect(inventory.slots.every(slot => slot === null)).toBe(true);
    });
  });

  describe('getItem', () => {
    it('should return item at position or null if empty', () => {
      const inventory = new Inventory();
      expect(inventory.getItem(0)).toBeNull();
      
      const item = new Item('potion-01', 'Potion');
      inventory.addItem(item);
      expect(inventory.getItem(0)).toBe(item);
    });
  });

  describe('addItem', () => {
    it('should add items to consecutive empty slots', () => {
      const inventory = new Inventory();
      const item1 = new Item('sword-01', 'Sword');
      const item2 = new Item('potion-01', 'Potion');
      
      inventory.addItem(item1);
      inventory.addItem(item2);
      
      expect(inventory.getItem(0)).toBe(item1);
      expect(inventory.getItem(1)).toBe(item2);
    });

    it('should throw error when inventory is full', () => {
      const inventory = new Inventory();
      for (let i = 0; i < 50; i++) {
        inventory.addItem(new Item(`item-${i}`, `Item ${i}`));
      }
      
      expect(() => inventory.addItem(new Item('overflow', 'Overflow'))).toThrow('Inventory full');
    });
  });

  describe('removeItemById', () => {
    it('should remove item by id', () => {
      const inventory = new Inventory();
      const item = new Item('axe-01', 'Axe');
      inventory.addItem(item);
      
      inventory.removeItemById('axe-01');
      expect(inventory.getItem(0)).toBeNull();
    });

    it('should throw error when item not found', () => {
      const inventory = new Inventory();
      expect(() => inventory.removeItemById('nonexistent')).toThrow('Item nonexistent not found');
    });
  });

  describe('removeItemByName', () => {
    it('should remove items by name and stop at quantity', () => {
      const inventory = new Inventory();
      const item1 = new Item('potion-01', 'Potion');
      const item2 = new Item('potion-02', 'Potion');
      const item3 = new Item('potion-03', 'Potion');
      inventory.addItem(item1);
      inventory.addItem(item2);
      inventory.addItem(item3);
      
      inventory.removeItemByName('Potion', 2);
      
      expect(inventory.getItem(0)).toBeNull();
      expect(inventory.getItem(1)).toBeNull();
      expect(inventory.getItem(2)).toBe(item3);
    });

    it('should warn when quantity exceeds items available', () => {
      const inventory = new Inventory();
      inventory.addItem(new Item('gem-01', 'Gem'));
      
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      inventory.removeItemByName('Gem', 5);
      
      expect(warnSpy).toHaveBeenCalledWith('quantity bigger than items in inventory');
      warnSpy.mockRestore();
    });
  });

  describe('swapItems', () => {
    it('should swap items at two positions', () => {
      const inventory = new Inventory();
      const sword = new Item('sword-01', 'Sword');
      const shield = new Item('shield-01', 'Shield');
      inventory.addItem(sword);
      inventory.addItem(shield);
      
      inventory.swapItems(0, 1);
      
      expect(inventory.getItem(0)).toBe(shield);
      expect(inventory.getItem(1)).toBe(sword);
    });

    it('should throw error when index1 is out of bounds', () => {
      const inventory = new Inventory();
      expect(() => inventory.swapItems(-1, 0)).toThrow('Index -1 is out of bounds');
      expect(() => inventory.swapItems(50, 0)).toThrow('Index 50 is out of bounds');
    });

    it('should throw error when index2 is out of bounds', () => {
      const inventory = new Inventory();
      expect(() => inventory.swapItems(0, -5)).toThrow('Index -5 is out of bounds');
      expect(() => inventory.swapItems(0, 100)).toThrow('Index 100 is out of bounds');
    });
  });

  describe('countItemByName', () => {
    it('should count items by name and return 0 for no match', () => {
      const inventory = new Inventory();
      inventory.addItem(new Item('potion-01', 'Potion'));
      inventory.addItem(new Item('potion-02', 'Potion'));
      inventory.addItem(new Item('sword-01', 'Sword'));
      
      expect(inventory.countItemByName('Potion')).toBe(2);
      expect(inventory.countItemByName('Sword')).toBe(1);
      expect(inventory.countItemByName('NonExistent')).toBe(0);
    });
  });

  describe('getItemsCount', () => {
    it('should return object with counts grouped by name', () => {
      const inventory = new Inventory();
      inventory.addItem(new Item('potion-01', 'Potion'));
      inventory.addItem(new Item('potion-02', 'Potion'));
      inventory.addItem(new Item('sword-01', 'Sword'));
      
      expect(inventory.getItemsCount()).toEqual({
        'Potion': 2,
        'Sword': 1
      });
    });

    it('should return empty object for empty inventory', () => {
      const inventory = new Inventory();
      expect(inventory.getItemsCount()).toEqual({});
    });
  });
});
