const template=/*html*/`
    <table class="table table-hover table-striped">
        <thead>
            <tr>
                <th>순번</th>
                <th>제품명</th>
                <th>가격</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="idx" v-for="(p idx) in prod">
                <td>{{idx}}</td>
                <td>{{p.prodNm}}</td>
                <td>{{p.price}}</td>
            </tr>
        </tbody>
    </table>
`;
export default {
    template,
    data(){
        return {
            prod :   [   {prodNm:'키보드', price:'4000'},
                            {prodNm:'마우스', price:'5000'},
                            {prodNm:'모니터', price:'10000'}
                        ]
        };
    },
    method : {}
}