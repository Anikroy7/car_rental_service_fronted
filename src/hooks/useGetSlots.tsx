import { useState } from "react";

export const useGetSlots = () => {
    const [slot, setSlot] = useState('') 
    const start = 8;
    const end = 22;
    const timesSlots = [];

    for (let i = start; i <= end; i++) {
        const time = i >= 12 ? i - 12 : i
        const amOrPm = i < 12 ? "AM" : "PM";
        timesSlots.push(`${time === 0 ? 12 : time}${amOrPm}-${time + 1}${time + 1 === 12 ? "PM" : amOrPm}`)
    }
    return {
        slot,
        setSlot,
        timesSlots
    }
}