using ApiRest.Models.Data;

namespace ApiRest.Repository
{
    public interface IPermisoRepository
    {
        Task<Permiso> CreatePermisoAsync(Permiso permiso);
        Task<bool> DeletePermisoAsync(Permiso permiso);
        Permiso GetPermisoById(int id);
        IEnumerable<Permiso> GetPermisos();
        Task<bool> UpdatePermisoAsync(Permiso permiso);
    }
}
