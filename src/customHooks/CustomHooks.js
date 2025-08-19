import { useState } from "react"

export const useVehiclesList = () => {
    const [vehiclesList, setVehicleList] = useState(["Hero Honda", "Suziki"])

    return { vehiclesList, setVehicleList }
}