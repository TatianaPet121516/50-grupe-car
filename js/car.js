export class Car {
     constructor(pavadinimas, modelis, spalva, kuroBakoTalpa, vidutinesKuroSanaudos) {
        this.brand = pavadinimas;
        this.model = modelis;
        this.carColor = spalva;
        this.fuelTankCapacity = kuroBakoTalpa;
        this.fuelConsumption = vidutinesKuroSanaudos;
        this.engineWorks = false;
        this.speed = 0;
        this.fuelInTank = this.fuelTankCapacity;
    }

    startTheEngine() {
        if (this.engineWorks === true) {
            return `Jjungti variklį dar karto ijungti negalima, sugadinti starteri.`;
        }
        this.engineWorks = true;
        return `Variklis įjungtas.`;
    }

    stopTheEngine() {
        if (this.engineWorks === false) {
            return `Išjungto varyklio išjungti negalima...`;
        }
// Jei automobilis užstringa, variklis yra išjungtas ir greitis linkęs į nulį.
        this.speed = 0;
        this.engineWorks = false;
        return `Variklis išjungtas.`;
    }

    startDriving() {
        if (this.engineWorks === false){
            return `Pirmiausia reikia įjungti variklį.`;
        } else { if (this.speed > 0) {
                return `Automobilis jau pradėjo važiuoti, padidinkite greitį.`;
                } else {if (this.fuelInTank < (this.fuelConsumption * 2)) {
                    return `Nepakanka kuro, reikia papildyti kuro baką.`; 
                    }
                    this.fuelInTank = (this.fuelInTank - this.fuelConsumption * 2).toFixed(1);
                    this.speed = 5;
                    return `Automobilis pradėjo vaziuoti.`;
                    }
                }            
    }

    driving(){
        if (this.engineWorks === false){
            return `Pirmiausia reikia įjungti variklį.`;
        } else { if (this.speed === 0) {
                return ` Pirmiausia reikia pradėjo vaziuoti.`;
                } else {if (this.fuelInTank < this.fuelConsumption) {
                    return `Nepakanka kuro, reikia papildyti kuro baką.`; 
                    }
                    this.speed = 50;
                    this.fuelInTank = +(this.fuelInTank - this.fuelConsumption).toFixed(1);
                    return `Važiuojate automobiliu.`;
                    }
                }
    }

    toStop() {
        if (this.speed === 0) {
            return `Automobilis dar nepradėjo važiuoti.`;
        } 
        this.speed = 0;
        return `Automobilis sustojo.`;
    }

    remainingFuel() {
        let x = (this.fuelTankCapacity - this.fuelInTank).toFixed(1);
        return `Automobilyje liko ${this.fuelInTank} litrai kuro. Norėdami visiškai užpildyti degalų baką, turite įpilti ${x} litrų degalų.`;
    }

    fillingTheFuelTank(liters) {
        if (this.engineWorks === true) {
            return `Prieš pildami degalus, sustabdykite automobilį ir išjunkite variklį.`;
        }

        let x = (this.fuelTankCapacity - this.fuelInTank).toFixed(1);
        if (liters > x) {
            return `Į kuro baką galite įpilti tik ${x} litrų ar mažiau kuro. Prašome papildyti automobilį pagal šiuos reikalavimus.`;
        } 
        this.fuelInTank = (this.fuelInTank + liters).toFixed(1);
        return `Į degalų baką įpylėte ${liters} l., dabar jame yra ${this.fuelInTank} litrų kuro.`;
    }
}






