# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Assumptions

* There aren't any supplied APIs or other features that allow us to utilize data. May need to create one.
- Database is relational.
    - Facilities : id
    - Agents : id, facilityID, customID
    - Shifts : agentID

## Ticket 1 : Implement an API to assign a customID to an agent

**Implementation Details**

* GET that will return the facility specific ID of that agent in the DB. Would require facilityID and agentID
* POST that will save a specific facility id of that agent in the DB. Would require the facilityID, agentID, and newAgentID
* DELETE that will delete the facility specific ID of that agent in the DB. Would require facilityID and agentID.

**Acceptance Criteria**

* GET returns 200 OK. Returns the newID. If 404, there does not exist an agent with the given ID.
* POST returns 200 OK. The newID would be reflected in the facility table. Agent should be created if it does not exist.
* DELETE returns 200 OK. Deletion of specific ID of the agent.

**Time Effort**
* Singular work day

***

## Ticket 2 : Update getShiftsByFacility to include customID

It's mentioned that getShiftsByFacilitiy includes SOME metadata about the agents assigned to each shift at a facility

**Implementation Details**
 * Ensure that customID is included in the output when calling getShiftsByFacility

 **Acceptance Criteria**
 * customID is returned

 **Time Effort**
 * 1 Hour

 ## Ticket 3 : Update generateReport to include customID


**Implementation Details**
 * customID field is included in the report of shifts next to the corresponding agents.

 **Acceptance Criteria**
 * customID is indicated in the report next to the corresponding agents.

 **Time Effort**
 * 1 Hour