import "./style.css"
import Card from "../Card"
import ColumnName from "../ColumnName"
import {useSelector, useDispatch} from "react-redux"
import { useEffect } from "react" 
import * as actions from "../../actions/projectsActions"

const CardContainer = () => {
	const projectsState = useSelector(state => state.projects)
	const query = useSelector(state => state.query)
    const dispatch = useDispatch()

    let newQ = {
        order: query.order,
        page: query.page,
        offset: query.offset
    }

    
    useEffect(() => { dispatch(actions.getProjects(newQ))
	},[dispatch, query])
    return (
        <div className="card-container">
            <div className="column-container">
                <ColumnName name="Rank" value="rank"/>
                <ColumnName name="Symbol" value="symbol"/>
                <ColumnName name="Name" value="name"/>
                <ColumnName name="Price" value="price"/>
                <ColumnName name="M. Cap" value="market_cap"/>
                <ColumnName name="Watchlist" value="watchlist"/>
                <ColumnName name="Followers" value="twitter_followers"/>
            </div>
            {projectsState.map(project => {
                return <Card 
                            rank={project.rank} 
                            symbol={project.symbol}
                            name={project.name}
                            price={project.price}
                            mCap={project.market_cap}
                            watchlist={project.watchlist}
                            followers={project.twitter_followers}
                            link={project.link}
                            twitter_link={project.twitter_link}
                            key={project.rank}
                            />
            })}
            
        </div>
    )
}

export default CardContainer
