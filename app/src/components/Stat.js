import React, { Component } from 'react';
import { connect } from 'react-redux'
import Chart from "react-apexcharts";
import ColumnChart from './vues/ColumnChart';
import DonutChart from './vues/DonutChart'
import StackedBar from './vues/StackedBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Stat.css';
import Header from './vues/Header'
import Footer from './vues/Footer'
import VersusDisplayer from './vues/VersusDisplayer'
import { Redirect} from 'react-router-dom'

class Stat extends Component {
render() {
	return (
		this.props.playersAreValid
		? (
				<div>
					<Header />
					<div className="statsContent">
						<div className="item"> 
							<div className="statsContainer">
								<VersusDisplayer players={this.props.players}/>
							</div>
						</div>
						<div className="item"> 
							<div className="titreSection">Winrate</div>	
							<div className="statsContainer">
									{
									this.props.players.map(player =>
									<DonutChart
										key={player.datas.name}
										Wins={player.datas.games.wins}
										Losses={player.datas.games.losses}
										Draws={player.datas.games.draws}
										playerName={player.datas.name}
									/>)
								}	
							</div>
						</div>
						<div className="item"> 
							<div className="titreSection">Niveau des cartes</div>
							<div className="statsContainer">

									<StackedBar
										players={this.props.players}
									/>
							</div>
						</div>
						<div className="item"> 			
							<div className="titreSection">Nombre de trophées</div>
							<div className="statsContainer">

									<ColumnChart 
										players={this.props.players}
									/>
							</div>
						</div>
					</div>

					<div><pre>{JSON.stringify(this.props.players, null, 2) }</pre></div>
					<Footer />
				</div>
			)
		: <Redirect to="/" />
	)
}


}

const mapStateToProps = (state) => {
	return state
}

export default connect(mapStateToProps)(Stat)
