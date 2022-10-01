const ItemListContainer = ({greeting}) =>{
    const styles = {fontSize: '3rem', width: 'fit-content', margin: '1rem auto'}
    return (
        <div className='main__intro'>
            <h2 style={styles}>{greeting}</h2>
        </div>
    )
}

export default ItemListContainer