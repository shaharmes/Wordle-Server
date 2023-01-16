import { CrudDao } from "./CrudDao";

class WordDao extends CrudDao<string> {
    constructor() {
        super();
    }
    get(): Promise<string> {
        return Promise.resolve("Hello World!");
    }
}

export { WordDao };