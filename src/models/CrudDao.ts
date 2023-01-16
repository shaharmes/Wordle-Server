abstract class CrudDao <T>{
    constructor() {
    }
    abstract get(): Promise<string>;
}
export {CrudDao};