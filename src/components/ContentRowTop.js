import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowMovies from './ContentRowMovies';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import Chart from './Chart';
import NotFound from './NotFound';

import {Route, Switch} from "react-router-dom";

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Dashboard de Chapultepets</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}

					<Switch>
						<Route exact={true} path="/categories">
							<GenresInDb />
						</Route>
						<Route exact={true} path="/lastproduct">
							<LastMovieInDb />
						</Route>
						<Route exact={true} path="/totales">
							<ContentRowMovies />
						</Route>
						<Route exact={true} path="/products">
							<Chart />
						</Route>
						<Route exact={true} path="/">
							<ContentRowMovies />
							<ContentRowCenter />
							<Chart />
						</Route>
						<Route>
							<NotFound/>
						</Route>
					</Switch>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;