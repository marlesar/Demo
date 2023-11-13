using ApiRest.Models.Data;

namespace ApiRest.Repository
{
    public interface IUsuarioRepository
    {
        Task<Usuario> CreateUsuarioAsync(Usuario usuario);
        Task<bool> DeleteUsuarioAsync(Usuario usuario);
        Usuario GetUsuarioById(int id);
        IEnumerable<Usuario> GetUsuarios();
        Task<bool> UpdateUsuarioAsync(Usuario usuario);
    }
}
