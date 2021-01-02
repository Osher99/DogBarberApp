using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DogBarber.Models
{
    public class Appointment
    {
        [Key]
        public Guid GuidID { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string UserName { get; set; }
        [Required(AllowEmptyStrings = false)]
        public DateTime CreatedOn { get; set; }
        [Required(AllowEmptyStrings = false)]
        public DateTime AppointmentDate { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string AppointmentHour { get; set; }
    }
}
