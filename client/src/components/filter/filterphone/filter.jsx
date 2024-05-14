import styles from "./filter.module.css"




const FilterPhone = ({Marca}) => (
    <div className={styles.container}>
        <p>Filtrar</p>
        <select>
            <option>Goku phone</option> 
        </select>
        <select name={Marca}/>
        <select name={Marca}/>
    </div>
);


export default FilterPhone;


