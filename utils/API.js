class API {
    constructor(query,queryString) {
        this.query = query,
        this.queryString = queryString
    }

    sort() {
        if (this.queryString.sort) {

          const sortBy = this.queryString.sort.split(',').join(' ');
   
          this.query = this.query.sort(sortBy);
        } else {
          this.query = this.query.sort('name');
        }
    
        return this;
      }

      limit(){
        if (this.queryString.limit) {
          this.query = this.query.limit(Number(this.queryString.limit));
        } else {
          this.query = this.query.limit(10);
        }

        return this;
      }
    
}

module.exports = API