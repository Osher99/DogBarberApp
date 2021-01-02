using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DogBarber.Models
{
    public class RegisterAppointmentModel
    {
        public DateTime AppointmentDate { get; set; }
        public DateTime CreatedOn { get; set; }
        public string AppointmentHour { get; set; }
        public string UserName { get; set; }

    }
}
