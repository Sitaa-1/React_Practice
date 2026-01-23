export function TableGridTable(props){
    return(
        <table className="table caption-top table-hover">
            <caption>{props.caption}</caption>
            <thead>
                <tr>
                    {
                        Object.keys(props.data[0]).map(key=> <th key={key}>{key}</th>)
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(item=><tr key={item}>
                        {
                            Object.keys(item).map(key=><td key={key}>{item[key]}</td>)
                        }
                    </tr>)
                }
            </tbody>
        </table>
    )
}