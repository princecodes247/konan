
/*
This is an example snippet - you should consider tailoring it
to your service.

Note: we only handle the first operation here
*/

async function fetchGraphQL(
    operationsDoc: string,
    operationName: string,
    variables: Record<string, any>
  ) {
    return fetch('https://konan.hasura.app/v1/graphql', {
      method: 'POST',
      body: JSON.stringify({
        query: operationsDoc,
        variables,
        operationName,
      }),
    }).then(result => result.json());
  }
/*
This is an example snippet - you should consider tailoring it
to your service.
*/

// async function fetchGraphQL(operationsDoc, operationName, variables) {
//     const result = await fetch(
//       "undefined",
//       {
//         method: "POST",
//         body: JSON.stringify({
//           query: operationsDoc,
//           variables: variables,
//           operationName: operationName
//         })
//       }
//     );
  
//     return await result.json();
//   }
  
  const operationsDoc = `
    query getProjects {
      projects {
        id
        tag
        title
        type
        target_amount
        endDate
        desc
        current_amount
        cover_img
      }
    }
    
    mutation addProject($desc: String = "m1", $mission: String = "m1", $owner: String = "m1", $payment_address: jsonb = "[]", $tag: String = "m1", $target_amount: numeric = "10", $title: String = "m1", $cover_img: String = "m1") {
      insert_projects_one(object: {cover_img: $cover_img, desc: $desc, mission: $mission, owner: $owner, payment_address: $payment_address, tag: $tag, target_amount: $target_amount, title: $title}) {
        id
        cover_img
        desc
        payment_address
        owner
        tag
        target_amount
        title
      }
    }
  `;
  
  function fetchGetProjects() {
    return fetchGraphQL(
      operationsDoc,
      "getProjects",
      {}
    );
  }
  
  function executeAddProject(desc: any, mission: any, owner: any, payment_address: any, tag: any, target_amount: any, title: any, cover_img: any) {
    return fetchGraphQL(
      operationsDoc,
      "addProject",
      {"desc": desc, "mission": mission, "owner": owner, "payment_address": payment_address, "tag": tag, "target_amount": target_amount, "title": title, "cover_img": cover_img}
    );
  }
  
  async function startFetchGetProjects() {
    const { errors, data } = await fetchGetProjects();
  
    if (errors) {
      // handle those errors like a pro
      console.error(errors);
    }
  
    // do something great with this precious data
    console.log(data);
  }
  
//   startFetchGetProjects();
  
  async function startExecuteAddProject(desc: any, mission: any, owner: any, payment_address: any, tag: any, target_amount: any, title: any, cover_img: any) {
    const { errors, data } = await executeAddProject(desc, mission, owner, payment_address, tag, target_amount, title, cover_img);
  
    if (errors) {
      // handle those errors like a pro
      console.error(errors);
    }
  
    // do something great with this precious data
    console.log(data);
  }
  
//   startExecuteAddProject(desc, mission, owner, payment_address, tag, target_amount, title, cover_img);

  export {
      startFetchGetProjects,
      startExecuteAddProject,
  }