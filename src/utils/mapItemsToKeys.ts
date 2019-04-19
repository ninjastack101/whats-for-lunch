
export interface IOptions {
  keyPath?: string;
  getKeyPath?: (item: any) => string;
};

const mapItemsToKeys = (items: any[], { keyPath = '', getKeyPath }: IOptions) =>
  items.reduce(
    (prev, next) => ({
      ...prev,
      [getKeyPath ? getKeyPath(next) : next[keyPath]]: next
    }),
    {}
  )

export default mapItemsToKeys;

