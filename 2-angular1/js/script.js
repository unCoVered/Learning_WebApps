var app = angular.module("app", []);

app.controller("SeguroController", function ($scope) {
    $scope.seguro = {
        nif : "",
        nombre : "",
        ape1 : "",
        edad : undefined,
        sexo : "",
        casado : false,
        numHijos : undefined,
        embarazada : false,
        coberturas : {
            oftalmologia : false,
            dental : false,
            fecundacionInVitro : false
        },
        enfermedades : {
            corazon : false,
            estomacal : false,
            rinyones : false,
            alergia : false,
            nombreAlergia : ""
        },
        fechaCreacion : new Date()
    };
    
    $scope.disableNombreAlergia = function () {
        return ($scope.seguro.enfermedades.alergia === false);
    };
});