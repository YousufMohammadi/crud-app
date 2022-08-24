import create from  'zustand'

export const useGlobal = create(set => ({
    
    users:[
        {
            userName:"ali",
            pass:"ali123"
        },
        {
            userName:"ahmad",
            pass:"ahmad123"
        },
        {
            userName:"akbar",
            pass:"akbar123"
        }
    ],
    handleUsers:(newUser) => set({ users:[...newUser]}),

    selectedRow :{},
    hanadlSelectedRow:(newSelectedRow) => set({ selectedRow:newSelectedRow})
}))