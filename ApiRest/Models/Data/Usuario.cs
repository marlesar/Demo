﻿namespace ApiRest.Models.Data
{
    public class Usuario
    {
        public int Id { get; set; }
        public string? Nombre { get; set; }
        public string? Apellido { get; set; }
        public int Edad { get; set; }
        public string? Email { get; set; }
        public DateTime Fecha_Nac { get; set; }
    }
}
