type MenuOptions = ''  | 'all' | 'dogs' | 'cats' | 'fishes';

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObejct = {
        all: false,
        dogs: false,
        cats: false,
        fishes: false
    }

    if (activeMenu !== '') {
        returnObejct[activeMenu] = true
    }
    
    return returnObejct;
}