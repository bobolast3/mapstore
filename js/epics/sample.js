import Rx from "rxjs";

import {
  HAS_CLICKED,
  UPDATE_SOMETHING,
  updateHasClicked,
} from "@js/actions/sample";

import { LOAD_DATA, loadedData, loadError } from "@js/actions/sample";

export const incrementEpic = (action$, { getState = () => {} } = {}) =>
  action$
    .ofType(UPDATE_SOMETHING)

    .switchMap(() => Rx.Observable.of(updateHasClicked()));

export const loadDataEpic = (action$) =>
  action$.ofType(LOAD_DATA).switchMap(() => {
    return Observable.defer(() => axios.get("version.txt"))
      .switchMap((response) => Observable.of(loadedData(response.data)))
      .catch((e) => Observable.of(loadError(e.message)));
  });
