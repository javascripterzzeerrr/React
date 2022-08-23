import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employess-list';
import EmployeesAddForm from '../employees-add-form/employess-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: false, rise: true, id: 1},
                {name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2},
                {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3},
            ],
            term: ''
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...before, ...after];
            // return (
            //     data: newArr
            // )

            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addEmployess = (name, salary) => {
        this.setState(({data}) => {
            let newData = [...data];
            newData.push({
                name,
                salary, 
                increase: false,
                rise: false,
                id: ++data.length
            });

            return {
                data: newData
            }
        })
    }

    onToggleProp = (id, prop) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);

        //     const old = data[index];
        //     const newItem = {...old, increase: !old.increase};
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

        //     return {
        //         data: newArr
        //     }
        // })

        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    cntIncrease = () => {
        let sum = 0;
        this.state.data.forEach((item) => {
            if (item.increase) {
                sum++;
            }
        })

        return sum;
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    render() {
        const {data, term} = this.state;
        return (
            <div className="app">
                <AppInfo countEmployees={this.state.data.length} cntIncrease={this.cntIncrease()} />
    
                <div className='search-panel'>
                    <SearchPanel />
                    <AppFilter />
                </div>
    
                <EmployeesList
                    data={data}
                    onDelete={this.deleteItem} 
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addEmployess}/>
            </div>
        );
    }
}

export default App;