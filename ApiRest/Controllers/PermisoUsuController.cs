using ApiRest.Models.Data;
using ApiRest.Repository;
using Microsoft.AspNetCore.Mvc;

namespace ApiRest.Controllers
{
    public class PermisoUsuController : ControllerBase
    {
        private IPermisoUsuRepository _permisoRepository;
        public PermisoUsuController(IPermisoUsuRepository permisoRepository)
        {
            _permisoRepository = permisoRepository;
        }

        [HttpGet("~/GetPermisosUsu")]
        [ActionName(nameof(GetPermisosUsuAsync))]
        public IEnumerable<PrivilegioUsuario> GetPermisosUsuAsync()
        {
            return _permisoRepository.GetPermisosUsu();
        }

        [HttpGet("~/GetPermisoUsuById/{id}")]
        [ActionName(nameof(GetPermisoUsuById))]
        public ActionResult<PrivilegioUsuario> GetPermisoUsuById(int id)
        {
            var privByID = _permisoRepository.GetPermisoUsuById(id);
            if (privByID == null)
            {
                return NotFound();
            }
            return privByID;
        }

        [HttpPost("~/CreatePermisoUsu")]
        [ActionName(nameof(CreatePermisoUsuAsync))]
        public async Task<ActionResult<PrivilegioUsuario>> CreatePermisoUsuAsync(PrivilegioUsuario permiso)
        {
            await _permisoRepository.CreatePermisoUsuAsync(permiso);
            return CreatedAtAction(nameof(GetPermisoUsuById), new { id = permiso.Id }, permiso);
        }

        [HttpPut("~/UpdatePermisoUsu/{id}")]
        [ActionName(nameof(UpdatePermisoUsu))]
        public async Task<ActionResult> UpdatePermisoUsu(int id, PrivilegioUsuario priv)
        {
            if (id != priv.Id)
            {
                return BadRequest();
            }

            await _permisoRepository.UpdatePermisoUsuAsync(priv);

            return NoContent();
        }

        [HttpDelete("~/DeletePermisoUsu/{id}")]
        [ActionName(nameof(DeletePermisoUsu))]
        public async Task<IActionResult> DeletePermisoUsu(int id)
        {
            var priv = _permisoRepository.GetPermisoUsuById(id);
            if (priv == null)
            {
                return NotFound();
            }

            await _permisoRepository.DeletePermisoUsuAsync(priv);

            return NoContent();
        }
    }
}
