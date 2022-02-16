/*
* Copyright 2021 Comcast Cable Communications Management, LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
* SPDX-License-Identifier: Apache-2.0
*/

// HTTP-based API routes: OpenRPC Metadata-Related

'use strict';

import * as fireboltOpenRpc from '../../fireboltOpenRpc.mjs';

// --- Route Handlers ---

// GET /api/v1/meta[?dereference=true]
function getMeta(req, res) {
  let meta;
  if ( req.query.dereference !== 'true' ) {
    meta = fireboltOpenRpc.getMeta();
  } else {
    meta = fireboltOpenRpc.getDereferencedMeta();
  }
  res.status(200).send({
    status: 'SUCCESS',
    meta: meta
  });
}

// --- Exports ---

export {
  getMeta
};
