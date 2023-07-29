import React, { useEffect, useState } from 'react'
import '../App.css'
import matchData from '../matchSchedule.json'
import '../App.css'
import Loader from './Loader'
const Schedule = () => {
    const matches = matchData.matches;
    const [team, setTeam] = useState('default');
    const [location, setLocation] = useState('default');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

    const handleTeamChange = (e) => {
        setTeam(e.target.value);
    }
    const handleLocationChange = (e) => {
        setLocation(e.target.value)
    }

    const clearFilter = () => {
        setTeam('default');
        setLocation('default');
    }

    const filteredData = matchData.filter((match) => {
        return (
            (team === 'default' || match.home_team === team || team === '') &&
            (location === 'default' || match.location === location || location === '')
        )

    })


    return (
        <>
            {isLoading ? <Loader /> : (
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1 className='display-1'>
                                Cricket World Cup Schedule</h1>

                                <div className='filter d-flex'>
    <select value={team} onChange={handleTeamChange}>
        <option value='default' key='default'>Select Team</option>
        {matchData.map((match, id) => (
            <option value={match.home_team} key={id}>
                {match.home_team}
            </option>
        ))}
    </select>

    <select value={location} onChange={handleLocationChange}>
        <option value='default' key='default'>Select Location</option>
        {matchData.map((match, index) => (
            <option value={match.location} key={index}>
                {match.location}
            </option>
        ))}
    </select>

    <button className='filter' onClick={clearFilter}> Clear Filter</button>
</div>


                            <div className='table-responsive'>
                                <table className="table table-tansparent table-striped table-dark table-hover">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Date</th>
                                            <th scope="col">Match Details</th>
                                            <th scope="col">Location</th>
                                            <th scope="col">Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData.map((match) => (
                                            <tr key={matchData.match_no}>
                                                <td>{match.date.slice(0, 10)}</td>
                                                <td>{match.home_team} Vs {match.away_team}</td>
                                                <td>{match.location}</td>
                                                <td>{match.date.slice(10, 16)} PM</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className='schedule'><button className="btn" onClick={clearFilter}>Load Data</button></div>


                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}

export default Schedule