using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;


namespace ProgramaPassagemTurno.Domain.Models
{
    public class CadastrarPassagem
    {


        public DateTime Data { get; set; }

        public char Plataforma { get; set; }

        public char Sistema { get; set; }

        public char Ocorrencia { get; set; }

        [Column("numeroOcorrencia")]
        [Key]
        public int NumeroOcorrencia { get; set; }

        public char Assunto { get; set; }

        public char Equipe { get; set; }

        public string Descricao { get; set; }


    }
}
