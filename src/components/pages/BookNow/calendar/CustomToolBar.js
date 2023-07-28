import { Calendar, momentLocalizer, Toolbar } from "react-big-calendar";

export const CustomToolbar = (toolbar) => {
 const goToBack = () => {
   toolbar.onNavigate("PREV");
 };

 const goToNext = () => {
   toolbar.onNavigate("NEXT");
 };

 const goToToday = () => {
   toolbar.onNavigate("TODAY");
 };

 const switchView = (view) => {
   toolbar.onView(view);
 };

 return (
   <div className="rbc-toolbar">
     <span className="rbc-btn-group">
       <button onClick={goToBack}>Back</button>
       <button onClick={goToNext}>Next</button>
     </span>
     <span className="rbc-toolbar-label">My Calendar</span>
     <span className="rbc-btn-group">
       <button onClick={() => switchView("month")}>Month</button>
       <button onClick={() => switchView("week")}>Week</button>
       <button onClick={() => switchView("day")}>Day</button>
     </span>
   </div>
 );
};
