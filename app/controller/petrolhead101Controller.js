/**
 * @author Thaer Aldwaik <t_dwaik@hotmail.com>
 */

app.controller('petrolhead101Controller', ['$scope', '$anchorScroll', function($scope, $anchorScroll) {

    $scope.topics = [
        {code: 'Internal_Combustion_Engine', img: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/4StrokeEngine_Ortho_3D_Small.gif', title: 'Internal Combustion Engine', content: 'An engine which generates motive power by the burning of petrol, oil, or other fuel with air inside the engine, the hot gases produced being used to drive a piston or do other work as they expand.', ref_link: 'https://en.wikipedia.org/wiki/Internal_combustion_engine'},
        {code: 'Differential', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/BAUMA_2004_ZF_Differentialgetriebe.jpg/1920px-BAUMA_2004_ZF_Differentialgetriebe.jpg', title: 'Differential', content: 'Differential used to control the take-up reel of a paper tape reader made by Tally circa 1962. The bevel gears spin freely on their shafts, unless a brake shoe stops the left gear. This causes the planet gear to drive the output shaft at half the speed of the driven gear on the right.', ref_link: 'https://en.wikipedia.org/wiki/Differential_(mechanical_device)'},
        {code: 'Limited-slip_differential', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Limited_slip_diff_cone.jpg/1280px-Limited_slip_diff_cone.jpg', title: 'Limited-slip differential', content: 'A limited-slip differential is a type of differential that allows its two output shafts to rotate at different speeds but limits the maximum difference between the two shafts.', ref_link: 'https://en.wikipedia.org/wiki/Limited-slip_differential'},
        {code: 'Wankel_Engine', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Wankel-1.jpg/560px-Wankel-1.jpg', title: 'Wankel Engine', content: 'The Wankel engine is a type of internal combustion engine using an eccentric rotary design to convert pressure into rotating motion.', ref_link: 'https://en.wikipedia.org/wiki/Wankel_engine'}
    ];

    $scope.dictionary = [
        {code: "Petrolhead", name: "Petrolhead", content: "Car Enthusiast"},
        {code: "JDM", name: "JDM", content: "Japanese domestic market"},
        {code: "Muscle_car", name: "Muscle Car", content: "American term used to refer to a variety of high-performance automobiles"},
        {code: "ABS", name: "ABS (Anti-lock braking system)", content: "An anti-lock braking system or anti-skid braking system (ABS) is an automobile safety system that allows the wheels on a motor vehicle to maintain tractive contact with the road surface according to driver inputs while braking, preventing the wheels from locking up (ceasing rotation) and avoiding uncontrolled skidding."},
        {code: "ESC", name: "ESC / ESP / DSC / ASC", content: "Electronic stability control (ESC), also referred to as electronic stability program (ESP) or dynamic stability control (DSC), is a computerized technology that improves a vehicle's stability by detecting and reducing loss of traction (skidding). When ESC detects loss of steering control, it automatically applies the brakes to help \"steer\" the vehicle where the driver intends to go. Braking is automatically applied to wheels individually, such as the outer front wheel to counter oversteer or the inner rear wheel to counter understeer. Some ESC systems also reduce engine power until control is regained. ESC does not improve a vehicle's cornering performance; instead, it helps to minimize the loss of control."},
        {code: "Powertrain", name: "Powertrain", content: "The mechanism that transmits the drive from the engine of a vehicle to its axle."}
    ];

}]);