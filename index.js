/**
 * This function is an abstraction for creating redux actions.
 * With only one mandatory @param: actionType. Can be passed a @param payload
 * and a @param transform function (transform response state)
 * @param {string}     actionType
 *
 * it returns a valid redux action
 * ex:
 *     {
        type: STUDY_FETCH_BY_ID,
        payload: payload,
        meta: { transform }
      }
 */

const acFactory = actionType => {
  if (actionType === null || actionType === undefined) {
    console.error("ActionType can't be null or undefined");
    throw "ActionType can't be null or undefined";
  }
  let action = {
    type: actionType
  };

  /**
   * Default function to to return. It accepts a payload and a transform function
   * @param {*}         [payload]
   * @param {function}  [transform]
   */
  const defaultAction = (payload, transform) => {
    if (payload) {
      action = { ...action, payload };
      if (transform && typeof transform === "function") {
        action = { ...action, meta: { transform } };
      } else {
        console.error("Transform must be a function");
        throw "Transform must be a function";
      }
    }
    return action;
  };

  return defaultAction;
};

export default acFactory;
