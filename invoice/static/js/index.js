function handler() {
    return {
      fields: [],
      addNewField() {
          this.fields.push({
              
            
           });
        },
        removeField(index) {
           this.fields.splice(index, 1);
         }
      }
 }