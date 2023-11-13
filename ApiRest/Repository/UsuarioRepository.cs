using ApiRest.Models.Data;
using Microsoft.EntityFrameworkCore;

namespace ApiRest.Repository
{
    public class UsuarioRepository : IUsuarioRepository
    {
        protected readonly DemoContext _context;
        public UsuarioRepository(DemoContext context) {  _context = context; }
        public IEnumerable<Usuario> GetUsuarios()
        {
            return _context.Usuarios.ToList();
        }
        public Usuario GetUsuarioById(int id)
        {
            return _context.Usuarios.Find(id);
        }
        public async Task<Usuario> CreateUsuarioAsync(Usuario usuario)
        {
            await _context.Set<Usuario>().AddAsync(usuario);
            await _context.SaveChangesAsync();
            return usuario;
        }

        public async Task<bool> UpdateUsuarioAsync(Usuario usuario)
        {
            _context.Entry(usuario).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteUsuarioAsync(Usuario usuario)
        {
            if (usuario is null)
            {
                return false;
            }
            _context.Set<Usuario>().Remove(usuario);
            await _context.SaveChangesAsync();

            return true;
        }
    }
}
