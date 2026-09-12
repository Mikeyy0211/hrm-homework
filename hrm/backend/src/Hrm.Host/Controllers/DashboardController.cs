using Microsoft.AspNetCore.Mvc;

namespace Hrm.Host.Controllers;

[ApiController]
[Route("api/dashboard")]
public sealed class DashboardController(IConfiguration configuration) : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        var authorization = Request.Headers.Authorization.ToString();
        var expectedToken = configuration["DemoAdmin:Token"];

        if (!string.Equals(authorization, $"Bearer {expectedToken}", StringComparison.Ordinal))
            return Unauthorized(new { message = "Cần đăng nhập để truy cập dashboard." });

        return Ok(new
        {
            title = "Hrm Dashboard",
            message = "Đăng nhập thành công.",
            user = configuration["DemoAdmin:Email"]
        });
    }
}
