/**
 * @author Thaer Aldwaik <t_dwaik@hotmail.com>
 */

app.controller('petrolhead101Controller', ['$scope', function($scope) {

    $scope.dictionary = [
        {code: "Petrolhead", name: "Petrolhead", content: "Car Enthusiast"},
        {code: "JDM", name: "JDM", content: "Japanese domestic market"},
        {code: "Muscle_car", name: "Muscle Car", content: "American term used to refer to a variety of high-performance automobiles"},
        {code: "ABS", name: "ABS (Anti-lock braking system)", content: "An anti-lock braking system or anti-skid braking system (ABS) is an automobile safety system that allows the wheels on a motor vehicle to maintain tractive contact with the road surface according to driver inputs while braking, preventing the wheels from locking up (ceasing rotation) and avoiding uncontrolled skidding."},
        {code: "ESC", name: "ESC / ESP / DSC / ASC", content: "Electronic stability control (ESC), also referred to as electronic stability program (ESP) or dynamic stability control (DSC), is a computerized technology that improves a vehicle's stability by detecting and reducing loss of traction (skidding). When ESC detects loss of steering control, it automatically applies the brakes to help \"steer\" the vehicle where the driver intends to go. Braking is automatically applied to wheels individually, such as the outer front wheel to counter oversteer or the inner rear wheel to counter understeer. Some ESC systems also reduce engine power until control is regained. ESC does not improve a vehicle's cornering performance; instead, it helps to minimize the loss of control."},
        {code: "Powertrain", name: "Powertrain", content: "The mechanism that transmits the drive from the engine of a vehicle to its axle."},
        {code: "VVT", name: "VVT", content: "Variable valve timing system."}
    ];

}]);