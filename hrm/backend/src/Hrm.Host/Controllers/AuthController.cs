using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.Mvc;

namespace Hrm.Host.Controllers;

[ApiController]
[Route("api/auth")]
public sealed class AuthController(IConfiguration configuration) : ControllerBase
{
    [HttpPost("login")]
    public IActionResult Login(LoginRequest request)
    {
        var demoAdmin = configuration.GetSection("DemoAdmin");
        var configuredEmail = demoAdmin["Email"];
        var configuredPassword = demoAdmin["Password"];

        if (!string.Equals(request.Email, configuredEmail, StringComparison.OrdinalIgnoreCase) ||
            !FixedTimeEquals(request.Password, configuredPassword))
        {
            return Unauthorized(new { message = "Email hoặc mật khẩu không đúng." });
        }

        return Ok(new
        {
            token = demoAdmin["Token"],
            user = new { email = configuredEmail, role = "Administrator" },
            redirectTo = "/dashboard"
        });
    }

    private static bool FixedTimeEquals(string? provided, string? expected)
    {
        if (provided is null || expected is null)
            return false;

        var providedBytes = Encoding.UTF8.GetBytes(provided);
        var expectedBytes = Encoding.UTF8.GetBytes(expected);

        return providedBytes.Length == expectedBytes.Length &&
            CryptographicOperations.FixedTimeEquals(providedBytes, expectedBytes);
    }
}

public sealed record LoginRequest(string Email, string Password);
