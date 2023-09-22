export class Trees {
    constructor(mdbh, mht, density, area, planting_year) {
        this.mdbh = mdbh;
        this.mht = mht;
        this.density = density;
        this.area = area;
        this.planting_year = planting_year;
      }

      calculateVolume() {
        throw new Error('calculateVolume() must be implemented in subclass');
      }
    
      calculateThinning1() {
        throw new Error('calculateThinning1() must be implemented in subclass');
      }

      calculateThinning2() {
        throw new Error('calculateThinning2() must be implemented in subclass');
      }

      calculateThinning3() {
        throw new Error('calculateThinning3() must be implemented in subclass');
      }
      calculateThinning4() {
        throw new Error('calculateThinning3() must be implemented in subclass');
      }
    
      calculatePruning1() {
        throw new Error('calculatePruning1() must be implemented in subclass');
      }

      calculatePruning2() {
        throw new Error('calculatePruning2() must be implemented in subclass');
      }
      calculatePruning3() {
        throw new Error('calculatePruning2() must be implemented in subclass');
      }
      calculatePruning4() {
        throw new Error('calculatePruning2() must be implemented in subclass');
      }
    
      calculateAge() {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.planting_year;
        return age
      }
}


export class CTreees extends Trees{
    
    calculateVolume() {
        return (3.14*this.mdbh/1000*this.mdbh/1000)/4*this.mht*this.density*this.area*0.3;
      }
    
      calculateThinning1() {
        return (this.planting_year+7);
      }

      calculateThinning2() {
        return (this.planting_year+12);
      }

      calculateThinning3() {
        return (this.planting_year+17);
      }
      calculateThinning4() {
        return (this.planting_year+22);
      }
    
      calculatePruning1() {
        return (this.planting_year+2);
      }

      calculatePruning2() {
        return (this.planting_year+4)
      }
      calculatePruning3() {
        return (this.planting_year+5)
      }
      calculatePruning4() {
        return (this.planting_year+7)
      }
      calculatePruning5() {
        return (this.planting_year+9)
      }
    
}

