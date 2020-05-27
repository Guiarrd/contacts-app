import React from 'react';

import './Filters.scss';

class Filters extends React.Component {
	render() {
		const { sortBy, handleSortBy } = this.props;

		return (
			<div className="container" data-testid="filters">
				<section className="filters">
					<div className="filters__search">
						<input 
							type="text"
							value={this.props.search}
							onChange={e => this.props.handleSearch(e.target.value)}
							className="filters__search__input" 
							placeholder="Pesquisar" 
						/>

						<button className="filters__search__icon">
							<i className="fa fa-search"/>
						</button>
					</div>

					<button className={`filters__item ${sortBy === "name" && "is-selected"}`} onClick={() => handleSortBy('name')}>
						Nome <i className="fas fa-sort-down" />
					</button>

					<button className={`filters__item ${sortBy === "country" && "is-selected"}`} onClick={() => handleSortBy('country')}>
						País <i className="fas fa-sort-down" />
					</button>

					<button className={`filters__item ${sortBy === "company" && "is-selected"}`} onClick={() => handleSortBy('company')}>
						Empresa <i className="fas fa-sort-down" />
					</button>

					<button className={`filters__item ${sortBy === "department" && "is-selected"}`} onClick={() => handleSortBy('department')}>
						Departamento <i className="fas fa-sort-down" />
					</button>

					<button className={`filters__item ${sortBy === "admissionDate" && "is-selected"}`} onClick={() => handleSortBy('admissionDate')}>
						Data de admissão <i className="fas fa-sort-down" />
					</button>
				</section>
			</div>
		);
	}
}

export default Filters;