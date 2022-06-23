/**
 * 通用的管理器模型
 */
export default abstract class BaseManager<P, T> {
  protected store: T[] = [];

  constructor(props?: P) {}

  protected abstract getNameKey(): string;

  getAll(): T[] {
    return this.store;
  }

  add(item: T) {
    this.store.push(item);
  }

  remove(item: string | T): boolean {
    if (item != null) {
      const newItems = [];
      const items = this.store;
      items.forEach((item) => {
        if (!(item[this.getNameKey()] === item || item === item)) {
          newItems.push(item);
        }
      });
      this.store = newItems;
      return items.length !== newItems.length;
    }
    return false;
  }

  removeAll() {
    this.store.splice(0, this.store.length);
  }

  map = (fn: (item: T, index: number) => any) => this.store.map(fn);

  forEach = (fn: (item: T, index: number) => void) => this.store.forEach(fn);

  find = (fn: (item: T, index: number) => boolean) => this.store.find(fn);

  findByName = (actionName: string) =>
    this.find((com) => !!actionName && com[this.getNameKey()] === actionName);
}
