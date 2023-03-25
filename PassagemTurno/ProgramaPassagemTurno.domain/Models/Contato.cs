using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;


namespace ProgramaPassagemTurno.Domain.Models
{
    public class Contato
    {

        public int Telefone { get; set; }

        public string Equipe { get; set; }

        public string Turno { get; set; }

        public string Usuario { get; set; }


    }
}
