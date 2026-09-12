using Microsoft.AspNetCore.Mvc;

namespace Hrm.Host.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class PingController : ControllerBase
{
    [HttpGet]
    public IActionResult Get() => Ok(new { status = "ok", product = "Hrm" });
}
