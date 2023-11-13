using ApiRest.Models.Data;
using Microsoft.EntityFrameworkCore;

namespace ApiRest.Repository
{
    public class PermisoRepository : IPermisoRepository
    {
        protected readonly DemoContext _context;
        public PermisoRepository(DemoContext context) {  _context = context; }
        public IEnumerable<Permiso> GetPermisos()
        {
            return _context.Permisos.ToList();
        }
        public Permiso GetPermisoById(int id)
        {
            return _context.Permisos.Find(id);
        }
        public async Task<Permiso> CreatePermisoAsync(Permiso permiso)
        {
            await _context.Set<Permiso>().AddAsync(permiso);
            await _context.SaveChangesAsync();
            return permiso;
        }

        public async Task<bool> UpdatePermisoAsync(Permiso permiso)
        {
            _context.Entry(permiso).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeletePermisoAsync(Permiso permiso)
        {
            if (permiso is null)
            {
                return false;
            }
            _context.Set<Permiso>().Remove(permiso);
            await _context.SaveChangesAsync();

            return true;
        }
    }
}
