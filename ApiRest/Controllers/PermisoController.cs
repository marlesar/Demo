using ApiRest.Models.Data;
using ApiRest.Repository;
using Microsoft.AspNetCore.Mvc;

namespace ApiRest.Controllers
{
    public class PermisoController : ControllerBase
    {
        private IPermisoRepository _permisoRepository;
        public PermisoController(IPermisoRepository permisoRepository)
        {
            _permisoRepository = permisoRepository;
        }

        [HttpGet("~/GetPermisos")]
        [ActionName(nameof(GetPermisosAsync))]
        public IEnumerable<Permiso> GetPermisosAsync()
        {
            return _permisoRepository.GetPermisos();
        }

        [HttpGet("~/GetPermisoById/{id}")]
        [ActionName(nameof(GetPermisoById))]
        public ActionResult<Permiso> GetPermisoById(int id)
        {
            var privByID = _permisoRepository.GetPermisoById(id);
            if (privByID == null)
            {
                return NotFound();
            }
            return privByID;
        }

        [HttpPost("~/CreatePermiso")]
        [ActionName(nameof(CreatePermisoAsync))]
        public async Task<ActionResult<Permiso>> CreatePermisoAsync(Permiso permiso)
        {
            await _permisoRepository.CreatePermisoAsync(permiso);
            return CreatedAtAction(nameof(GetPermisoById), new { id = permiso.Id }, permiso);
        }

        [HttpPut("~/UpdatePermiso/{id}")]
        [ActionName(nameof(UpdatePermiso))]
        public async Task<ActionResult> UpdatePermiso(int id, Permiso priv)
        {
            if (id != priv.Id)
            {
                return BadRequest();
            }

            await _permisoRepository.UpdatePermisoAsync(priv);

            return NoContent();
        }

        [HttpDelete("~/DeletePermiso/{id}")]
        [ActionName(nameof(DeletePermiso))]
        public async Task<IActionResult> DeletePermiso(int id)
        {
            var priv = _permisoRepository.GetPermisoById(id);
            if (priv == null)
            {
                return NotFound();
            }

            await _permisoRepository.DeletePermisoAsync(priv);

            return NoContent();
        }
    }
}
