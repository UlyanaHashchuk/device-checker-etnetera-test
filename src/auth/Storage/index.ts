type StorageConfig = {
  name: string
}

class LocalStorage<T> {
  protected name: string

  constructor({ name }: StorageConfig) {
    this.name = name
  }

  protected storage = () => {
    try {
      return window.localStorage
    } catch (e) {
      return {
        setItem: () => null,
        getItem: () => '{}',
        removeItem: () => null,
      }
    }
  }

  private decrypt = (data: any) => {
    try {
      return JSON.parse(data) || {}
    } catch (e) {
      return {}
    }
  }

  public get = () => this.decrypt(this.storage().getItem(this.name))

  public set = (data: T) => {
    this.storage().setItem(this.name, JSON.stringify(data))
  }

  public remove = () => {
    this.storage().removeItem(this.name)
  }
}

export default LocalStorage
