// classes

// by default access specifier is public
// private - only accessible within the class itself
// protected - only accessible within the class itself and in child classes
// readonly - only accessible within the class itself and in child classes, cannot be changed outside of the class
// static - only accessible within the class itself, not in child classes
// interface - only used to define the shape of an object, cannot be instantiated
// abstract - cannot be instantiated, only used as a base class for other classes
// final - cannot be extended, cannot be used as a base class for other classes
// sealed - cannot be extended, cannot be used as a base class for other classes, cannot be instantiated    


// classes
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
  
    constructor(
      readonly client: string, 
      private details: string, 
      public amount: number,
    ){}
  
    format() {
      return `${this.client} owes £${this.amount} for ${this.details}`;
    }
  }
  
  const invOne = new Invoice('mario', 'work on the mario website', 250);
  const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
  
  let invoices: Invoice[] = [];
  invoices.push(invOne)
  invoices.push(invTwo);
  
  invoices.forEach(inv => {
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
  })
  
  
  
  const form = document.querySelector('.new-item-form') as HTMLFormElement;
  console.log(form.children);
  
  // inputs
  const type = document.querySelector('#type') as HTMLInputElement;
  const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
  const details = document.querySelector('#details') as HTMLInputElement;
  const amount = document.querySelector('#amount') as HTMLInputElement;
  
  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
  
    console.log(
      type.value, 
      tofrom.value, 
      details.value, 
      amount.valueAsNumber
    );
  });