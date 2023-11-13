using Microsoft.EntityFrameworkCore;

namespace ApiRest.Models.Data
{
    public class DemoContext : DbContext
    {
        public DemoContext(DbContextOptions<DemoContext> options) : base(options)
        {
        }
        //public DbSet<Product> Products { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Permiso> Permisos { get; set; }
        public DbSet<PrivilegioUsuario> PrivilegioUsuarios { get; set; }
    }
}
