import create from 'zustand'

//The type for the application: source of truth.
interface AppsState{
    isSettingsPanelOpen:boolean,
    setIsSettingsPanelOpen: (value:boolean) => void
    isModalOpen:boolean,
    setIsModalOpen: (value:boolean) => void
}


//Create the Mutable stste for the applcation
//This constaines all the global vriable needed to manage the state of the application
//What Nav Are show and what panel is current open 
//For responsive management.
const useApp = create<AppsState>((set) =>  ({
    isModalOpen: false,
    setIsModalOpen: (value:boolean) => set((state) => ({
        isModalOpen:value
    })),
    isSettingsPanelOpen:false,
    setIsSettingsPanelOpen :(value:boolean) => set((state) => ({
        isSettingsPanelOpen:value
    })),
}))

export {useApp}