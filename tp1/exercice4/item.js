
export class Inventory
{
  constructor()
  {
    this.maxSlots = 50;
    this.slots = new Array(this.maxSlots).fill(null);
  }

  getItem(position)
  {
    return this.slots[position];
  }

  removeItemByName(name, quantity)
  {
    for (let i = 0; i < this.slots.length; i++)
    {
      let item = this.slots[i];
      if ( item != null && item.name == name)
      {
        this.slots[i] = null;
        quantity --;
      }

      if( quantity == 0 )
        return;
    }

    console.warn("quantity bigger than items in inventory")
  }

  removeItemById(itemId)
  {
    for(let i = 0; i < this.slots.length; i++ )
    {
      let item = this.slots[i];

      if ( item != null && item.id == itemId )
      {
        this.slots[i] = null;
        return;
      }
    }
    
    throw new Error(`Item ${itemId} not found`);
  }

  addItem(item)
  {
    for (let index in this.slots)
    {
      let slot = this.slots[index];

      if (slot == null )
      {
        this.slots[index] = item;
        return;
      }
    }

    throw new Error(`Inventory full`);
  }

  swapItems(index1, index2)
  {
    if (index1 < 0 || index1 >= this.maxSlots)
    {
      throw new Error(`Index ${index1} is out of bounds`);
    }
    if (index2 < 0 || index2 >= this.maxSlots)
    {
      throw new Error(`Index ${index2} is out of bounds`);
    }

    // Swap the items
    const temp = this.slots[index1];
    this.slots[index1] = this.slots[index2];
    this.slots[index2] = temp;
  }
  countItemByName(name)
  {
    let count = 0;
    
    for (let i = 0; i < this.slots.length; i++)
    {
      const item = this.slots[i];
      if (item != null && item.name === name)
      {
        count++;
      }
    }
    
    return count;
  }

  getItemsCount()
  {
    const counts = {};
    
    for (let i = 0; i < this.slots.length; i++)
    {
      const item = this.slots[i];
      if (item != null)
      {
        if (counts[item.name] === undefined)
        {
          counts[item.name] = 1;
        }
        else
        {
          counts[item.name]++;
        }
      }
    }
    
    return counts;
  }
}

export class Item
{
  constructor(id, name)
  {
    this.id = id;
    this.name = name;
  }
}
