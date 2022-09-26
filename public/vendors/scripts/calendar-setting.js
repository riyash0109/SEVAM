jQuery(document).ready(function(){
	jQuery("#add-event").submit(function(){
		alert("Submitted");
		var values = {};
		$.each($('#add-event').serializeArray(), function(i, field) {
			values[field.name] = field.value;
		});
		console.log(
			values
		);
	});
});

(function () {
	'use strict';
	// ------------------------------------------------------- //
	// Calendar
	// ------------------------------------------------------ //
	jQuery(function() {
		// page is ready
		jQuery('#calendar').fullCalendar({
			themeSystem: 'bootstrap4',
			// emphasizes business hours
			businessHours: false,
			defaultView: 'month',
			// event dragging & resizing
			editable: true,
			// header
			header: {
				left: 'title',
				center: 'month,agendaWeek,agendaDay',
				right: 'today prev,next'
			},
			events: [
			{
				title: 'appointment1',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
				start: '2022-05-05',
				end: '2022-05-05',
				className: 'fc-bg-default',
				icon : "circle"
			},
			{
				title: 'appointment2',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
				start: '2022-05-05T14:00:00',
				end: '2022-05-05T20:00:00',
				className: 'fc-bg-deepskyblue',
				icon : "cog",
				allDay: false
			},
			{
				title: 'appointment3',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
				start: '2022-07-10T13:00:00',
				end: '2022-07-10T16:00:00',
				className: 'fc-bg-pinkred',
				icon : "group",
				allDay: false
			},
			{
				title: 'appointment4',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
				start: '2022-05-12',
				className: 'fc-bg-lightgreen',
				icon : "suitcase"
			},
			{
				title: 'appointment5',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
				start: '2022-05-13',
				end: '2022-05-15',
				className: 'fc-bg-blue',
				icon : "calendar"
			},
			{
				title: 'appointment6',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
				start: '2022-05-13',
				end: '2022-05-14',
				className: 'fc-bg-default',
				icon : "child"
			},
			{
				title: 'appointment7',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
				start: '2022-09-13',
				end: '2022-09-14',
				className: 'fc-bg-default',
				icon : "birthday-cake"
			},
			{
				title: 'appointment8',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
				start: '2022-10-15T09:30:00',
				end: '2022-10-15T11:45:00',
				className: 'fc-bg-default',
				icon : "glass",
				allDay: false
			},
			{
				title: 'appointment9',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
				start: '2022-11-15T20:00:00',
				end: '2022-11-15T22:30:00',
				className: 'fc-bg-default',
				icon : "cutlery",
				allDay: false
			},
			{
				title: 'appointment10',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
				start: '2022-05-25',
				end: '2022-05-25',
				className: 'fc-bg-blue',
				icon : "camera"
			},
			{
				title: 'appointment11',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
				start: '2022-12-27',
				end: '2022-12-27',
				className: 'fc-bg-default',
				icon : "rocket"
			},
			{
				title: 'appointment12',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
				start: '2022-12-29T11:30:00',
				end: '2022-12-29T012:30:00',
				className: 'fc-bg-blue',
				icon : "medkit",
				allDay: false
			}
			],
			dayClick: function() {
				jQuery('#modal-view-event-add').modal();
			},
			eventClick: function(event, jsEvent, view) {
				jQuery('.event-icon').html("<i class='fa fa-"+event.icon+"'></i>");
				jQuery('.event-title').html(event.title);
				jQuery('.event-body').html(event.description);
				jQuery('.eventUrl').attr('href',event.url);
				jQuery('#modal-view-event').modal();
			},
		})
});

})(jQuery);