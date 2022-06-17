var getScriptPromisify = (src) => {
  return new Promise(resolve => {
    $.getScript(src, resolve)
  })
}

(function () {

  //Chart Block in HTML
  const prepared = document.createElement('template')
  prepared.innerHTML = `<head>
  <style>
  </style>
  <title>DevExtreme Demo</title>

    `

  //Main JS Class holds methods to be called
  class SamplePrepared extends HTMLElement {
    constructor() { 

      //call SAC DOM Super method to get shadow DOM information
      super()

      //Get shadow DOM informations
      this._shadowRoot = this.attachShadow({ mode: 'open' })
      this._shadowRoot.appendChild(prepared.content.cloneNode(true))

      //Set HTML block in shadow DOM of SAC
      this._root = this._shadowRoot.getElementById('simple-treeview')
      //_props object is used to hold properties information
      this._props = {}

      //Call render() method to plot chart
      this.render1(this.resultSet)
    }

    //onCustomWidgetResize() method is execute whenever CW will resized in SAC.
    onCustomWidgetResize(width, height) {

      //Call render() method to plot chart
      this.render1(this.resultSet)
    }

    //render() method to plot chart - resultSet1 holds data from SAC table/chart.
    async render1(resultSet) {

    console.log(resultSet);

    var data = [];

    for(var a = 0; a < resultSet[0].length; a++){

        var node0 = {text: resultSet[0][a].Description_a5y1o06718.id};
        var id0 = resultSet[0][a].NODEID.id;
        node0.nodes =[];

        for(var b = 0; b < resultSet[1].length; b++){

            if(resultSet[1][b].PARENTID.id === id0){

                var node1 ={text: resultSet[1][b].Description_a5y1o06718.id};
                var id1 = resultSet[1][b].NODEID.id;
                node1.nodes =[];

                for(var c = 0; c < resultSet[2].length; c++){

                    if(resultSet[2][c].PARENTID.id === id1){

                        var node2 ={text: resultSet[2][c].Description_a5y1o06718.id};
                        var id2 = resultSet[2][c].NODEID.id;
                        node2.nodes = [];

                        for(var d = 0; d < resultSet[3].length; d++){

                            if(resultSet[3][d].PARENTID.id === id2){

                                var node3 ={text: resultSet[3][d].Description_a5y1o06718.id};
                                var id3 = resultSet[3][d].NODEID.id;
                                node3.nodes = [];


                                node2.nodes.push(node3);

                            }
                        }

                        node1.nodes.push(node2);
                    }
                }

              node0.nodes.push(node1);
            }
        }

        data.push(node0);

    }

    console.log(data);

    }

  }
  customElements.define('com-sap-sample-dd-prepared', SamplePrepared)
})()