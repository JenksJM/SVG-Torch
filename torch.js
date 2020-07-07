class torchSVG {
    constructor(url, documentID, location) {
        this._imageURL = url;
        this._elementID = documentID;
        this._parentElementID = location;
        this._torchDiameter = 10;
    }

    // Methods

    //initialse torch
    initTorch(){
        this.outputImage();
        this.initialiseTorchDiameter();
        this.addEventListeners();
    }

    initialiseTorchDiameter(){
        document.getElementById(this._elementID).style.setProperty('--circleDiameter', this._torchDiameter + 'vmax');
    }

    //image and holder output
    outputImage() {
        var imageHtml = "<div class='svgTourch' id='" + this._elementID + "'>";
        imageHtml += "<img src='" + this._imageURL + "'>";
        imageHtml += "</div>";
        document.getElementById(this._parentElementID).innerHTML = imageHtml;
    }

    //image and holder output
    addEventListeners() {
        document.getElementById(this._elementID).addEventListener('mousemove', this.updateTorchPosition);
        document.getElementById(this._elementID).addEventListener('touchmove', this.updateTorchPosition);
    }

    //update Torch Position
    updateTorchPosition(e){
        var x = e.clientX || e.touches[0].clientX;
        var y = e.clientY || e.touches[0].clientY;
        var offset = document.getElementById(this.id).getBoundingClientRect();

        x = x - offset.left;
        y = y - offset.top;

        document.getElementById(this.id).style.setProperty('--cursorX', x + 'px')
        document.getElementById(this.id).style.setProperty('--cursorY', y + 'px')
    }

    //Image URL getter/setter
    get imageURL() {
        return this._imageURL;
    }
    set imageURL(x) {
        this._imageURL = x;
    }

    //torch diameter URL getter/setter
    get torchDiameter() {
        return this._torchDiameter;
    }
    set torchDiameter(x) {
        this._torchDiameter = x;       
    }

    //elementID getter/setter
    get elementID() {
        return this._elementID;
    }
    set elementID(x) {
        this._elementID = x;
    }

    //parentElementID getter/setter
    get parentElementID() {
       return this._parentElementID;
    }
    set parentElementID(x) {
        this._parentElementID = x;
    }
}