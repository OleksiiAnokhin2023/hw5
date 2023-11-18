class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }
    itemCount() {
        return this.collection.length;
    }
    pageCount() {
        return Math.ceil(this.collection.length/this.itemsPerPage);
    }
    pageItemCount(pageIndex) {
        if(pageIndex >=this.pageCount() || pageIndex <0) return -1
        else if (pageIndex === this.pageCount() - 1)
            return this.collection.length % this.itemsPerPage || this.itemsPerPage;
        else return this.itemsPerPage;
    }
    pageIndex(itemIndex) {
        if (itemIndex < 0 || itemIndex >= this.collection.length) {
            return -1;
        }

        return Math.floor(itemIndex / this.itemsPerPage);
    }
}

