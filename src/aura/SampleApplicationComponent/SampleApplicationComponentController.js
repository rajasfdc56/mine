({
    handleClick : function(component, event) {
        var appEvent = $A.get("e.c:SampleApplicationEvent");
        appEvent.setParams({ 'message': 'Clicked! ' + (new Date().toGMTString()) });
        appEvent.fire();        
    }
})