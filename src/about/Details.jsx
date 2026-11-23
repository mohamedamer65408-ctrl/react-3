import React from 'react'

function Details() {
    return (
        <div>
            <table class="table table-striped table-bordered border-danger table-hover mt-5 table-dark ">
                 <caption class="fs-2 p-3 fw-bolder">table</caption> 

                <thead >
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody >
                    <tr class="table-active table-success">
                        <th scope="row">1</th>
                        <td>mohamed</td>
                        <td>amer</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td >Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>John</td>
                        <td>Doe</td>
                        <td class="table-active table-success">@social</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>John</td>
                        <td>Doe</td>
                        <td class="table-active table-success">@social</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default Details