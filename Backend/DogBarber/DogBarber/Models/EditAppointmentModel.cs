using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DogBarber.Models
{
    public class EditAppointmentModel
    {
        public Guid GuidID { get; set; }
        public string UserName { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime AppointmentDate { get; set; }
        public string AppointmentHour { get; set; }
    }
}
