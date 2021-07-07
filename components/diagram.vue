<template>
	<div>
		<v-card>
			<div style="width: 100%; white-space: nowrap;">
				<span style="display: inline-block; vertical-align: top; padding: 5px;">
					<div
						class="mt-5 overflow-y-auto"
						:class="scrollbarTheme"
						style="
							border: solid 1px black;
							width: 200px;
							height: 200px;
							margin: 1px;
							padding: 5px;
						"
					>
						<v-treeview
							v-model="tree"
							:open="initiallyOpen"
							:items="items"
							activatable
							item-key="name"
							open-on-click
						>
							<template v-slot:prepend="{ item, open }">
								<v-icon v-if="!item.file">
									{{ open ? "mdi-folder-open" : "mdi-folder" }}
								</v-icon>
								<v-icon v-else>
									{{ files[item.file] }}
								</v-icon>
							</template>
						</v-treeview>
						<v-divider vertical></v-divider>
					</div>
					<div
						id="myPaletteDiv"
						:class="scrollbarTheme"
						style="
							border: solid 1px black;
							width: 200px;
							height: 200px;
							margin: 1px;
							padding: 5px;
						"
					></div>
					<div
						class="palettezone"
						style="
							border: solid 1px black;
							width: 200px;
							height: 200px;
							margin: 1px;
							padding: 5px;
						"
					>
						<div class="draggable" draggable="true">node 1</div>
						<div class="draggable" draggable="true">node 2</div>
						<div class="draggable" draggable="true">node 3</div>
						<div class="draggable" draggable="true">node 4</div>
						<div class="draggable" draggable="true">node 5</div>
					</div>
				</span>
				<span style="display: inline-block; vertical-align: top; padding: 5px;">
					<div
						class="dropzone mt-5 overflow-y-auto"
						ref="diagram1"
						id="diagram1"
						style="
							border: solid 1px black;
							margin: 1px;
							width: 900px;
							height: 600px;
						"
					></div>
					<v-dialog v-model="dialog" persistent max-width="500px">
						<!--  -->
						<v-card>
							<v-toolbar color="success" dark
								><h4>Properties</h4>
                {{ 'key :' + currentKey + JSON.stringify(dataFileInput) }}
								<v-spacer></v-spacer>
								<v-btn icon dark @click="dialog = false">
									<v-icon>mdi-close</v-icon>
								</v-btn>
							</v-toolbar>
							<v-card-text>
								<v-container>
									<v-row>
										<v-col cols="12" sm="10">
											<v-text-field
												label="File Path"
												outlined
												required
                        v-model="dataFileInput.file_path"
											></v-text-field>
										</v-col>
										<v-col cols="12" sm="10" md="2">
											<v-icon
												x-large
												style="text-align: center;"
												@click="cari = false"
												>mdi-card-search-outline
											</v-icon>
										</v-col>
										<v-col cols="12">
											<v-text-field
												label="Input Path"
												outlined
												required
                        v-model="dataFileInput.input_path"
											></v-text-field>
										</v-col>
										<v-col cols="12" sm="6">
											<v-select
												:items="[true, false]"
												label="Header"
												outlined
												required
                        v-model="dataFileInput.header"
											></v-select>
										</v-col>
										<v-col cols="12" sm="6">
											<v-text-field
												label="Delimiter"
												id="delimiter"
												placeholder="exp: | "
												outlined
                        v-model="dataFileInput.delimiter"
											></v-text-field>
										</v-col>
									</v-row>
								</v-container>
							</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="blue darken-1" text @click="dialog = false">
									Close
								</v-btn>
								<v-btn color="blue darken-1" text @click="dialog = false; save()">
									Save
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-dialog>
				</span>
			</div>
			<div>
				<v-dialog v-model="dialoglayer" persistent fullscreen>
					<!--  -->
					<v-card>
						<v-toolbar color="success" dark
							><h4>Layers Model</h4>
							<v-spacer></v-spacer>
							<v-btn icon dark @click="dialoglayer = false">
								<v-icon>mdi-close</v-icon>
							</v-btn>
						</v-toolbar>
						<layers></layers>
					</v-card>
				</v-dialog>
			</div>
			<!-- <div>
        <v-btn id="mySavedModel" @click="save">Save</v-btn>
        <v-btn @click="load">Load</v-btn>
        
      </div> -->
			<textarea id="GraphLinksModel" style="width: 100%; height: 250px;" />
		</v-card>
	</div>
</template>

<script>
import go from "gojs";
import Layers from "./layers.vue";

export default {
	name: "diagram1",
	components: { Layers },
	data: () => ({
    // add by dhiar
    currentKey: "",
    dataFileInput: {
      file_path: "",
      input_path: "",
      header: false,
      delimiter: "|",
    },
		dialog: false,
		dialogclose: false,
		dialoglayer: false,
		myDiagram: null,
		initiallyOpen: ["public"],
		files: {
			html: "mdi-language-html5",
			js: "mdi-nodejs",
			json: "mdi-code-json",
			md: "mdi-language-markdown",
			pdf: "mdi-file-pdf",
			png: "mdi-file-image",
			txt: "mdi-file-document-outline",
			xls: "mdi-file-excel",
		},
		tree: [],
		items: [
			{
				name: "contoh 1",
			},
			{
				name: "contoh 2",
				children: [
					{
						name: "sub contoh 1",
						children: [
							{
								name: "sub file",
								file: "png",
							},
						],
					},
					{
						name: "sub contoh 2",
						file: "png",
					},
					{
						name: "sub contoh 3",
						file: "html",
					},
				],
			},
			{
				name: "contoh 3",
				file: "txt",
			},
			{
				name: "contoh 4",
				file: "js",
			},
		],
	}),
	computed: {
		scrollbarTheme() {
			return this.$vuetify.theme.dark ? "dark" : "light";
		},
	},

	mounted() {
    console.log('mounted')
		let el = this.$refs.diagram1;
		// var vm = this;
		// var dl = this;
    const self = this // variable global

		var $ = go.GraphObject.make; // for conciseness in defining templates

		self.myDiagram = $(
			go.Diagram,
			el, // create a Diagram for the DIV HTML element
			{
        layout: $(go.TreeLayout, { angle: 90, arrangement: go.TreeLayout.ArrangementHorizontal }),
				initialContentAlignment: go.Spot.Center,
				"undoManager.isEnabled": true,
			}
		); // center the content

		self.myDiagram.nodeTemplateMap.add(
			"Model",
			$(
				go.Node,
				"Vertical",
				self.dcmodel(),
				{ locationSpot: go.Spot.Center },
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
					fromEndSegmentLength: 40,
				}),
				$(
					go.TextBlock,
					{
						margin: new go.Margin(3, 0, 0, 0),
						maxSize: new go.Size(50, 50),
						isMultiline: false,
						font: "8pt serif",
					},
					new go.Binding("text", "text").makeTwoWay()
				)
			)
		);

		self.myDiagram.nodeTemplateMap.add(
			"ReadFile",
			$(
				go.Node,
				"Vertical",
				self.klikduakali(),
				{ locationSpot: go.Spot.Center },
				new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
					go.Point.stringify
				),
				$(
					go.Picture,
					{
						width: 30,
						height: 30,
						portId: "",
						fromLinkable: true,
						toLinkable: true,
						cursor: "pointer",
						fromEndSegmentLength: 40,
					},
					new go.Binding("source", "img")
				),
				$(
					go.TextBlock,
					//"ReadFile",
					{
						margin: new go.Margin(3, 0, 0, 0),
						maxSize: new go.Size(50, 50),
						isMultiline: false,
						font: "8pt serif",
					},
					new go.Binding("text", "text").makeTwoWay()
				)
			)
		);

		self.myDiagram.nodeTemplateMap.add(
			"Creator",
			$(
				go.Node,
				"Vertical",
				{ locationSpot: go.Spot.Center },
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
					fromEndSegmentLength: 40,
				}),
				$(
					go.TextBlock,
					{
						margin: new go.Margin(3, 0, 0, 0),
						maxSize: new go.Size(50, 50),
						isMultiline: false,
						font: "8pt serif",
					},
					new go.Binding("text", "text").makeTwoWay()
				)
			)
		);

		self.myDiagram.linkTemplate = $(
			go.Link, // the whole link panel
			new go.Binding("points").makeTwoWay(),
			//{ curve: go.Link.Bezier, toShortLength: 15 },
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

		$(
			go.Palette,
			"myPaletteDiv", // must name or refer to the DIV HTML element
			{
				maxSelectionCount: 1,
				nodeTemplateMap: self.myDiagram.nodeTemplateMap, // share the templates used by myDiagram
				// simplify the link template, just in this Palette
				linkTemplate: $(
					go.Link,
					{
						locationSpot: go.Spot.Center,
						selectionAdornmentTemplate: $(
							go.Adornment,
							"Link",
							{ locationSpot: go.Spot.Center },
							$(go.Shape, {
								isPanelMain: true,
								fill: null,
								stroke: "deepskyblue",
								strokeWidth: 0,
							}),
							$(
								go.Shape, // the arrowhead
								{ toArrow: "Standard", stroke: null }
							)
						),
					},
					{
						routing: go.Link.AvoidsNodes,
						curve: go.Link.JumpOver,
						corner: 5,
						toShortLength: 4,
					},
					new go.Binding("points"),
					$(
						go.Shape, // the link path shape
						{ isPanelMain: true, strokeWidth: 2 }
					),
					$(
						go.Shape, // the arrowhead
						{ toArrow: "Standard", stroke: null }
					)
				),
				model: new go.GraphLinksModel(
					[
						// specify the contents of the Palette
						{
							text: "File Input",
							category: "ReadFile",
							img: "/read_file.png",
							delimiter: "|",
						},
						{
							text: "model",
							category: "Model",
							figure: "Rectangle",
							fill: "#00AD5F",
						},
						{ text: "Dataset Creator", category: "Creator" },
					],
					[
						// the Palette also has a disconnected Link, which the user can drag-and-drop
						{
							points: new go.List(/*go.Point*/).addAll([
								new go.Point(0, 0),
								new go.Point(30, 0),
								new go.Point(30, 40),
								new go.Point(60, 40),
							]),
						},
					]
				),
			}
		);
		// function save() {
		//   var json = JSON.parse(myDiagram.model.toJson());
		//   document.getElementById("GraphLinksModel").value = JSON.stringify(json.nodeDataArray, null, '');
		//   console.log(json)
		// }
		// function load() {
		//     myDiagram.model = go.Model.fromJson(document.getElementById("GraphLinksModel").value);
		//     var pos = myDiagram.model.modelData.position;
		//     if (pos) myDiagram.initialPosition = go.Point.parse(pos);
		// }
	}, //mounted
	methods: {
    // created by dhiar
    dcmodel() {
			return [
				new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
					go.Point.stringify
				),
				{
					locationSpot: go.Spot.Center,
					doubleClick: function (e) {
						e.diagram.startTransaction("Toogle Input");
						self.dialoglayer = true;
					},
				},
			];
		},
    klikduakali() {
      const self = this
      console.log('klikduakali')
			return [
				new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
					go.Point.stringify
				),
				{
					locationSpot: go.Spot.Center,
					doubleClick: function (e) {

            // get detail data node, kemudian di tampilkan pada popup
            let node = e.diagram.selection.first();
            if (node instanceof go.Node) {
              let nodeData = node.data;
              console.log('node = ' + node)
              console.log('nodeData = ' + JSON.stringify(nodeData))

              // dhiar. Bisa dibuat untuk value dari node yang lain sesuai keperluan.
              self.currentKey = nodeData.key
							self.inputDataFileInput(nodeData)
            }

						e.diagram.startTransaction("Toogle Input");
						self.dialog = true;
					},
				},
			];
		},
    save() {
      const self = this
      
      // document.getElementById("GraphLinksModel").value = self.myDiagram.model.toJson()
      
      // let model = self.myDiagram.model;
      self.myDiagram.model.startTransaction();

      // misalnya, kita mau mengubah node yang memiliki key = -1
      // let currentNode = model.findNodeDataForKey(-1);

      let currentNode = self.myDiagram.model.findNodeDataForKey(self.currentKey);
			console.log('currentNode.data = ' + JSON.stringify(currentNode))

			if (currentNode.category == 'ReadFile') {
				// bila ingin code nya lebih ringkas, pakai looping saja
				self.myDiagram.model.setDataProperty(currentNode, "file_path", self.dataFileInput.file_path);
				self.myDiagram.model.setDataProperty(currentNode, "input_path", self.dataFileInput.input_path);
				self.myDiagram.model.setDataProperty(currentNode, "header", self.dataFileInput.header);
				self.myDiagram.model.setDataProperty(currentNode, "delimiter", self.dataFileInput.delimiter);

				// reset data
				self.resetDataFileInput()
			}

      self.myDiagram.model.commitTransaction("added Node and Link");

      console.log('save' + self.myDiagram.model.toJson())
		},
		resetDataFileInput(){
			// bila ingin ringkas, gunakan looping saja. Kemudian buat global function,
			// supaya bisa digunakan di tempat lain, misalnya di taruh di file globalFunction.js
			const self = this
			self.dataFileInput = {
				file_path: "",
				input_path: "",
				header: false,
				delimiter: "|",
			}
		},
		inputDataFileInput(data){
			const self = this
			// bila ingin ringkas, gunakan looping saja. Kemudian buat global function,
			// supaya bisa digunakan di tempat lain, misalnya di taruh di file globalFunction.js
			self.dataFileInput = {
				file_path: data.file_path ?? "<Isi isi data file path>", // menggunakan ternary operator, jadi, jika data kosong/null diisi dengan default-value
				input_path: data.input_path ?? "<Silakan isi data input path>",
				header: data.header ?? true,
				delimiter: data.delimiter ?? "|",
			}
		},
	},
};
</script>

<style></style>
