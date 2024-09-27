/*
 * Copyright (c) 2024, WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ResourceNotFound from 'AppComponents/Base/Errors/ResourceNotFound';
import SubscriptionCreation from './SubscriptionCreation/ListLabels.jsx';
import SubscriptionUpdate from './SubscriptionUpdate/ListLabels.jsx';

/**
     * `Route` elements for shared scopes UI.
 * @returns {JSX} Shared scope routes.
 */
const Subscription = () => {
    return (
        <div>
            <Switch>
                <Route
                    exact
                    path='/subscription/creation'
                    component={SubscriptionCreation}
                />
                <Route
                    exact
                    path='/subscription/update'
                    component={SubscriptionUpdate}
                />
                <Route component={ResourceNotFound}/>
            </Switch>
        </div>
    );
};

export default Subscription;