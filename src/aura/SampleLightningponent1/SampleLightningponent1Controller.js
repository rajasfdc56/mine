({
    handleClick : function(component, event) {
		console.log(' 1 Controller handle click');
        var compEvent = component.getEvent("simpleEvent");
        compEvent.setParams({ 'message': 'Clicked ! ' + 
            (new Date().toGMTString()) });
        compEvent.fire();
        console.log(' 2 Controller handle click');
    },
    handleSampleEvent : function(component, event, helper) {
		console.log(' 3 Controller handle sample event');        
		component.set("v.setMeOnEventFiring", "OK I Set It " + 
            event.getParam( 'message'));   
        console.log(' 4 Controller handle click');
    }
})