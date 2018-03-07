// Retrieve attribute value from RTC and map it to another RTC attribute.

dojo.provide("Gen.workitems.providers.CompareTeamAreaWithState");

dojo.require("com.ibm.team.workitem.api.common.WorkItemAttributes");

(function() {
var WorkItemAttributes= com.ibm.team.workitem.api.common.WorkItemAttributes;

dojo.declare("Gen.workitems.providers.CompareTeamAreaWithState", null, {
    getValue: function(attributeId, workItem, configuration) {
    

	//Get attribute values and assign to variables

	 var DisplayValue;


         var state= workItem.getValue(WorkItemAttributes.STATE);

        
	 
         var filedagainst = workItem.getValue(WorkItemAttributes.FILED_AGAINST);


	//******************************Service Request**********************************************

	if (((state == "Service_Request_Workflow.state.s2") || (state == "Service_Request_Workflow.state.s6")) && (filedagainst == "_kzLf8OtkEeWsyJ_TPCnf9g")) //level 1 
          
        	DisplayValue = "Level 1";
	
	else
		
		
	if (((state == "Service_Request_Workflow.state.s5") || (state == "Service_Request_Workflow.state.s7")) && (filedagainst == "_rx43QOxQEeWx77I6URsLIA")) //level 2 
          
        	DisplayValue = "Level 2";
	
	
	else
		
		
	if (((state == "Service_Request_Workflow.state.s10") || (state == "Service_Request_Workflow.state.s11")) && ((filedagainst == "_wvgn0OxQEeWx77I6URsLIA") || (filedagainst == "_yhydwOxQEeWx77I6URsLIA"))) //level 3 

          
        	DisplayValue = "Level 3";

        
       if (((state == "Service_Request_Workflow.state.s11") || (state == "Service_Request_Workflow.state.s12")) && ((filedagainst == "_wvgn0OxQEeWx77I6URsLIA") || (filedagainst == "_yhydwOxQEeWx77I6URsLIA"))) //level 4 

          
        	DisplayValue = "Level 4";

	else
		
		
	if ((state == "Service_Request_Workflow.state.s1") || (state == "Service_Request_Workflow.state.s3")  || (state == "Service_Request_Workflow.state.s8")  || (state == "Service_Request_Workflow.state.s9"))//Other States 

          
        	DisplayValue = "Other States";


	//***************************************************Defect*********************************************************
 
	else
	
	
	if (((state == "TicketWorkflow.state.s2") || (state == "TicketWorkflow.state.s6")) && (filedagainst == "_kzLf8OtkEeWsyJ_TPCnf9g")) //level 1 
          
        	DisplayValue = "Level 1";
	
	else
		
		
	if (((state == "TicketWorkflow.state.s5") || (state == "TicketWorkflow.state.s7")) && (filedagainst == "_rx43QOxQEeWx77I6URsLIA")) //level 2
          
        	DisplayValue = "Level 2";
	
	
	else
		
		
	if (((state == "TicketWorkflow.state.s10") || (state == "TicketWorkflow.state.s11")) && ((filedagainst == "_wvgn0OxQEeWx77I6URsLIA") || (filedagainst == "_yhydwOxQEeWx77I6URsLIA"))) //level 3

          
        	DisplayValue = "Level 3";

	
	else
		
		
	if ((state == "TicketWorkflow.state.s1") || (state == "TicketWorkflow.state.s3")  || (state == "TicketWorkflow.state.s8")  || (state == "TicketWorkflow.state.s9"))//Other States 

          
        	DisplayValue = "Other States";

	
	//***************************************************Project*********************************************************
 
	else
	
	
	if (((state == "Project_Workflow.state.s2") || (state == "Project_Workflow.state.s6")) && (filedagainst == "_kzLf8OtkEeWsyJ_TPCnf9g")) //level 1 
          
        	DisplayValue = "Level 1";
	
	else
		
		
	if (((state == "Project_Workflow.state.s5") || (state == "Project_Workflow.state.s7")) && (filedagainst == "_rx43QOxQEeWx77I6URsLIA")) //level 2 
          
        	DisplayValue = "Level 2";
	
	
	else
		
		
	if (((state == "Project_Workflow.state.s10") || (state == "Project_Workflow.state.s11")) && ((filedagainst == "_wvgn0OxQEeWx77I6URsLIA") || (filedagainst == "_yhydwOxQEeWx77I6URsLIA"))) //level 3 

          
        	DisplayValue = "Level 3";

	else
		
		
	if ((state == "Project_Workflow.state.s1") || (state == "Project_Workflow.state.s3")  || (state == "Project_Workflow.state.s8")  || (state == "Project_Workflow.state.s9"))//Other States 

          
        	DisplayValue = "Other States";


	//***************************************************Incident*********************************************************
 
	else
	
	
	if (((state == "Incident_Workflow.state.s2") || (state == "Incident_Workflow.state.s6")) && (filedagainst == "_kzLf8OtkEeWsyJ_TPCnf9g")) //level 1 
          
        	DisplayValue = "Level 1";
	
	else
		
		
	if (((state == "Incident_Workflow.state.s5") || (state == "Incident_Workflow.state.s7")) && (filedagainst == "_rx43QOxQEeWx77I6URsLIA")) //level 2 
          
        	DisplayValue = "Level 2";
	
	
	else
		
		
	if (((state == "Incident_Workflow.state.s10") || (state == "Incident_Workflow.state.s11")) && ((filedagainst == "_wvgn0OxQEeWx77I6URsLIA") || (filedagainst == "_yhydwOxQEeWx77I6URsLIA"))) //level 3 

          
        	DisplayValue = "Level 3";

	else
		
		
	if ((state == "Incident_Workflow.state.s1") || (state == "Incident_Workflow.state.s3")  || (state == "Incident_Workflow.state.s8")  || (state == "Incident_Workflow.state.s9"))//Other States 

          
        	DisplayValue = "Other States";


	//***************************************************Functional Enhancement*********************************************************
 
	else
	
	
	if (((state == "Functional_Enhancement_Workflow.state.s2") || (state == "Functional_Enhancement_Workflow.state.s6")) && (filedagainst == "_kzLf8OtkEeWsyJ_TPCnf9g")) //level 1 
          
        	DisplayValue = "Level 1";
	
	else
		
		
	if (((state == "Functional_Enhancement_Workflow.state.s5") || (state == "Functional_Enhancement_Workflow.state.s7")) && (filedagainst == "_rx43QOxQEeWx77I6URsLIA")) //level 2 
          
        	DisplayValue = "Level 2";
	
	
	else
		
		
	if (((state == "Functional_Enhancement_Workflow.state.s10") || (state == "Functional_Enhancement_Workflow.state.s11")) && ((filedagainst == "_wvgn0OxQEeWx77I6URsLIA") || (filedagainst == "_yhydwOxQEeWx77I6URsLIA"))) //level 3 

          
        	DisplayValue = "Level 3";

	else
		
		
	if ((state == "Functional_Enhancement_Workflow.state.s1") || (state == "Functional_Enhancement_Workflow.state.s3")  || (state == "Functional_Enhancement_Workflow.state.s8")  || (state == "Functional_Enhancement_Workflow.state.s9"))//Other States 

          
        	DisplayValue = "Other States";


	//***************************************************User Access*********************************************************
 
	else
	
	
	if (((state == "User_Access_Workflow.state.s2") || (state == "User_Access_Workflow.state.s6")) && (filedagainst == "_kzLf8OtkEeWsyJ_TPCnf9g")) //level 1 
          
        	DisplayValue = "Level 1";
	
	else
		
		
	if (((state == "User_Access_Workflow.state.s5") || (state == "User_Access_Workflow.state.s7")) && (filedagainst == "_rx43QOxQEeWx77I6URsLIA")) //level 2 
          
        	DisplayValue = "Level 2";
	
	
	else
		
		
	if (((state == "User_Access_Workflow.state.s10") || (state == "User_Access_Workflow.state.s11")) && ((filedagainst == "_wvgn0OxQEeWx77I6URsLIA") || (filedagainst == "_yhydwOxQEeWx77I6URsLIA"))) //level 3 

          
        	DisplayValue = "Level 3";

	else
		
		
	if ((state == "User_Access_Workflow.state.s2") || (state == "User_Access_Workflow.state.s3")  || (state == "User_Access_Workflow.state.s8")  || (state == "User_Access_Workflow.state.s9"))//Other States 

          
        	DisplayValue = "Other States";


return DisplayValue;




        		//return state;


	//return filedagainst;

		
    }
});
})();