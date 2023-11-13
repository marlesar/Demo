using ApiRest.Models.Data;
using ApiRest.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace ApiRest.Controllers
{
    public class UsuarioController : ControllerBase
    {
        private IUsuarioRepository _usuarioRepository;
        public UsuarioController(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        [HttpGet("~/GetUsuarios")]
        [ActionName(nameof(GetUsuariosAsync))]
        public IEnumerable<Usuario> GetUsuariosAsync()
        {
            return _usuarioRepository.GetUsuarios();
        }

        [HttpGet("~/GetUsuarioById")]
        [ActionName(nameof(GetUsuarioById))]
        public ActionResult<Usuario> GetUsuarioById(int id)
        {
            var usuByID = _usuarioRepository.GetUsuarioById(id);
            if (usuByID == null)
            {
                return NotFound();
            }
            return usuByID;
        }

        [HttpPost("~/CreateUsuario")]
        [ActionName(nameof(CreateUsuarioAsync))]
        public async Task<ActionResult<Usuario>> CreateUsuarioAsync(Usuario usuario)
        {
            await _usuarioRepository.CreateUsuarioAsync(usuario);
            return CreatedAtAction(nameof(GetUsuarioById), new { id = usuario.Id }, usuario);
        }

        [HttpPut("~/UpdateUsuario/{id}")]
        [ActionName(nameof(UpdateUsuario))]
        public async Task<ActionResult> UpdateUsuario(int id, Usuario usuario)
        {
            if (id != usuario.Id)
            {
                return BadRequest();
            }

            await _usuarioRepository.UpdateUsuarioAsync(usuario);

            return NoContent();
        }

        [HttpDelete("~/DeleteUsuario/{id}")]
        [ActionName(nameof(DeleteUsuario))]
        public async Task<IActionResult> DeleteUsuario(int id)
        {
            var usuario = _usuarioRepository.GetUsuarioById(id);
            if (usuario == null)
            {
                return NotFound();
            }

            await _usuarioRepository.DeleteUsuarioAsync(usuario);

            return NoContent();
        }
    }
}
