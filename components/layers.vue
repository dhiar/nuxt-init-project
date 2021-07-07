<template>
  <v-container>
    <div style="width: 100%; display: flex; justify-content: space-between">
        <div id="PaletteLayer" style="width: 200px; margin-right: 2px; background-color: whitesmoke; border: solid 1px black"></div>
        <div id="DiagramLayer" style="flex-grow: 1; height: 620px; border: solid 1px black"></div>
    </div>
    <v-dialog v-model="propEmbedding" max-width="500px" persistent>
      <v-card>
        <v-toolbar color="success" dark>
          <h5>Parameter Embedding Layer</h5>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="propEmbedding = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <prop-embedding></prop-embedding>
      </v-card>
    </v-dialog>
    <v-dialog v-model="propBidirection" max-width="500px" persistent>
      <v-card>
        <v-toolbar color="success" dark>
          <h5>Parameter Bidirectional Layer</h5>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="propBidirection = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <prop-bidirection></prop-bidirection>
      </v-card>
    </v-dialog>
    <v-dialog v-model="propDense" max-width="500px" persistent>
      <v-card>
        <v-toolbar color="success" dark>
          <h5>Parameter Dense Layer</h5>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="propDense = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <prop-dense></prop-dense>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import go from 'gojs'
import propEmbedding from './propEmbedding.vue';
import PropBidirection from './propBidirection.vue';
import PropDense from './propDense.vue';
export default {
  components: { propEmbedding, PropBidirection, PropDense, },
  data: () => ({
    propEmbedding: false,
    propBidirection: false,
    propDense: false,
  }),
  mounted() {
    var pr = this;
    var $ = go.GraphObject.make;
    var myDiagram = $(go.Diagram, "DiagramLayer", 
    {
      initialContentAlignment: go.Spot.Center,
      "undoManager.isEnabled": true
    });
    function dcEmbedding() {
      return [
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        {
          locationSpot: go.Spot.Center,
          doubleClick: function(e) {
            e.diagram.startTransaction("Embedding Input");
            pr.propEmbedding = true;
          }
        }
      ]
    }
    function dcBidirection() {
      return [
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        {
          locationSpot: go.Spot.Center,
          doubleClick: function(e) {
            e.diagram.startTransaction("Bidirection Input");
            pr.propBidirection = true;
          }
        }
      ]
    }
    function dcDense() {
      return [
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        {
          locationSpot: go.Spot.Center,
          doubleClick: function(e) {
            e.diagram.startTransaction("Dense Input");
            pr.propDense = true;
          }
        }
      ]
    }
    myDiagram.nodeTemplateMap.add(
      "inputlayer",
      $(
        go.Node,
        "Vertical", {locationSpot: go.Spot.Center},
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
          go.Point.stringify
        ),
        $(go.Shape, "RoundedRectangle", {
          desiredSize: new go.Size(50, 25),
          minSize: new go.Size(20, 10),
          fill: "lightgreen",
          portId: "",
          fromLinkable: true,
          toLinkable: true,
          cursor: "pointer",
          fromEndSegmentLength: 40
        }),
        $(
          go.TextBlock,
          { margin: new go.Margin(3, 0, 0, 0),
          maxSize: new go.Size(50, 50),
          isMultiline: false, font: "8pt serif" },
          new go.Binding("text", "text").makeTwoWay()
        )
      )
    );
    myDiagram.nodeTemplateMap.add(
      "embeddinglayer",
      $(
        go.Node,
        "Vertical", dcEmbedding(), {locationSpot: go.Spot.Center},
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
          go.Point.stringify
        ),
        $(go.Shape, "RoundedRectangle", {
          desiredSize: new go.Size(50, 25),
          minSize: new go.Size(20, 10),
          fill: "lightblue",
          portId: "",
          fromLinkable: true,
          toLinkable: true,
          cursor: "pointer",
          fromEndSegmentLength: 40
        }),
        $(
          go.TextBlock,
          { margin: new go.Margin(3, 0, 0, 0),
          maxSize: new go.Size(50, 50),
          isMultiline: false, font: "8pt serif" },
          new go.Binding("text", "text").makeTwoWay()
        )
      )
    );
    myDiagram.nodeTemplateMap.add(
      "bidirectionallayer",
      $(
        go.Node,
        "Vertical", dcBidirection(), {locationSpot: go.Spot.Center},
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
          go.Point.stringify
        ),
        $(go.Shape, "RoundedRectangle", {
          desiredSize: new go.Size(50, 25),
          minSize: new go.Size(20, 10),
          fill: "orange",
          portId: "",
          fromLinkable: true,
          toLinkable: true,
          cursor: "pointer",
          fromEndSegmentLength: 40
        }),
        $(
          go.TextBlock,
          { margin: new go.Margin(3, 0, 0, 0),
          maxSize: new go.Size(50, 50),
          isMultiline: false, font: "8pt serif" },
          new go.Binding("text", "text").makeTwoWay()
        )
      )
    );
    myDiagram.nodeTemplateMap.add(
      "denselayer",
      $(
        go.Node,
        "Vertical", dcDense(), {locationSpot: go.Spot.Center},
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
          go.Point.stringify
        ),
        $(go.Shape, "RoundedRectangle", {
          desiredSize: new go.Size(50, 25),
          minSize: new go.Size(20, 10),
          fill: "blue",
          portId: "",
          fromLinkable: true,
          toLinkable: true,
          cursor: "pointer",
          fromEndSegmentLength: 40
        }),
        $(
          go.TextBlock,
          { margin: new go.Margin(3, 0, 0, 0),
          maxSize: new go.Size(50, 50),
          isMultiline: false, font: "8pt serif" },
          new go.Binding("text", "text").makeTwoWay()
        )
      )
    );
    myDiagram.nodeTemplateMap.add(
      "outputlayer",
      $(
        go.Node,
        "Vertical", {locationSpot: go.Spot.Center},
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
          go.Point.stringify
        ),
        $(go.Shape, "RoundedRectangle", {
          desiredSize: new go.Size(50, 25),
          minSize: new go.Size(20, 10),
          fill: "red",
          portId: "",
          fromLinkable: true,
          toLinkable: true,
          cursor: "pointer",
          fromEndSegmentLength: 40
        }),
        $(
          go.TextBlock,
          { margin: new go.Margin(3, 0, 0, 0),
          maxSize: new go.Size(50, 50),
          isMultiline: false, font: "8pt serif" },
          new go.Binding("text", "text").makeTwoWay()
        )
      )
    );
    myDiagram.linkTemplate = $(
      go.Link, // the whole link panel
      new go.Binding("points").makeTwoWay(),
      new go.Binding("text", "text"),
      $(
        go.Shape, // the link shape
        { stroke: "#2F4F4F" }
      ),
      $(
        go.Shape, // the arrowhead
        { toArrow: "standard", fill: "#2F4F4F", stroke: null, scale: 1 }
      )
    );
    $(go.Palette, "PaletteLayer",  // must name or refer to the DIV HTML element
      {
        maxSelectionCount: 1,
        nodeTemplateMap: myDiagram.nodeTemplateMap,  // share the templates used by myDiagram
        linkTemplate: // simplify the link template, just in this Palette
        $(go.Link,
          { 
            locationSpot: go.Spot.Center,
            selectionAdornmentTemplate:
            $(go.Adornment, "Link",
              { locationSpot: go.Spot.Center },
              $(go.Shape,
                { isPanelMain: true, fill: null, stroke: "deepskyblue", strokeWidth: 0 }),
              $(go.Shape,  // the arrowhead
                { toArrow: "Standard", stroke: null })
            )
          },
          {
            routing: go.Link.AvoidsNodes,
            curve: go.Link.JumpOver,
            corner: 5,
            toShortLength: 4
          },
        new go.Binding("points"),
        $(go.Shape,  // the link path shape
          { isPanelMain: true, strokeWidth: 2 }),
        $(go.Shape,  // the arrowhead
          { toArrow: "Standard", stroke: null })
        ),
        model: new go.GraphLinksModel(
        [  // specify the contents of the Palette
          { text: "input", category: "inputlayer", figure: "Rectangle", fill: "#00AD5F" },
          { text: "embedding", category: "embeddinglayer" },
          { text: "bidirectional LSTM", category: "bidirectionallayer" },
          { text: "dense", category: "denselayer" },
          { text: "output", category: "outputlayer" },
        ], 
        [
                // the Palette also has a disconnected Link, which the user can drag-and-drop
          { points: new go.List(/*go.Point*/).addAll([new go.Point(0, 0), new go.Point(30, 0), new go.Point(30, 40), new go.Point(60, 40)]) }
        ])
      });
  }
}
</script>

<style>

</style>