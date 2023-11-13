using ApiRest.Models.Data;

namespace ApiRest.Repository
{
    public interface IPermisoUsuRepository
    {
        Task<PrivilegioUsuario> CreatePermisoUsuAsync(PrivilegioUsuario permiso);
        Task<bool> DeletePermisoUsuAsync(PrivilegioUsuario permiso);
        PrivilegioUsuario GetPermisoUsuById(int id);
        IEnumerable<PrivilegioUsuario> GetPermisosUsu();
        Task<bool> UpdatePermisoUsuAsync(PrivilegioUsuario permiso);
    }
}
