using ApiRest.Models.Data;
using Microsoft.EntityFrameworkCore;

namespace ApiRest.Repository
{
    public class PermisoUsuRepository : IPermisoUsuRepository
    {
        protected readonly DemoContext _context;
        public PermisoUsuRepository(DemoContext context) {  _context = context; }
        public IEnumerable<PrivilegioUsuario> GetPermisosUsu()
        {
            return _context.PrivilegioUsuarios.ToList();
        }
        public PrivilegioUsuario GetPermisoUsuById(int id)
        {
            return _context.PrivilegioUsuarios.Find(id);
        }
        public async Task<PrivilegioUsuario> CreatePermisoUsuAsync(PrivilegioUsuario permiso)
        {
            await _context.Set<PrivilegioUsuario>().AddAsync(permiso);
            await _context.SaveChangesAsync();
            return permiso;
        }

        public async Task<bool> UpdatePermisoUsuAsync(PrivilegioUsuario permiso)
        {
            _context.Entry(permiso).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeletePermisoUsuAsync(PrivilegioUsuario permiso)
        {
            if (permiso is null)
            {
                return false;
            }
            _context.Set<PrivilegioUsuario>().Remove(permiso);
            await _context.SaveChangesAsync();

            return true;
        }
    }
}
