const  calculateShippingCost = (weight, distance)=> {
    const minimumFare = 50; // Minimum fare for the first 1 kg within 30 km
    const additionalChargeWithin30km = 20; // Additional charge beyond 1 kg within 30 km
    const additionalChargePerKm = 0.5; // Additional charge per km beyond 30 km
  
    if (weight >= 0.1 && weight <= 40 && distance >= 0) {
      if (distance <= 30) {
        // Within 30 km
        if (weight <= 1) {
          // First 1 kg
          return minimumFare;
        } else {
          // Beyond 1 kg
          return minimumFare + additionalChargeWithin30km;
        }
      } else {
        // Beyond 30 km
        const distanceBeyond30km = distance - 30;
        if (weight <= 1) {
          // First 1 kg beyond 30 km
          return minimumFare + distanceBeyond30km * additionalChargePerKm;
        } else {
          // Beyond 1 kg beyond 30 km
          return (
            minimumFare +
            additionalChargeWithin30km +
            weight * distanceBeyond30km * additionalChargePerKm
          );
        }
      }
    } else {
      // Invalid input
      return '';
    }
  }

  export default calculateShippingCost;
  