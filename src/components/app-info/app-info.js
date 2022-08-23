import './app-info.css';

const AppInfo = ({countEmployees, cntIncrease}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {countEmployees}</h2>
            <h2>Премию получат: {cntIncrease} </h2>
        </div>
    )
}

export default AppInfo;