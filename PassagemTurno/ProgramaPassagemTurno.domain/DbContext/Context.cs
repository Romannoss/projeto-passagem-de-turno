using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProgramaPassagemTurno.Domain.Models
{
    public class Context : DbContext
    {
        public DbSet<CadastrarPassagem> CadastrarPassagem { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=DESKTOP-FOFBEVP\SQLEXPRESS;Initial Catalog=PassagemDeTurno;Integrated Security=True");
        }
    }
}
