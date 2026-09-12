namespace Hrm.Application.Tests;

public sealed class ApplicationAssemblyTests
{
    [Fact]
    public void ApplicationAssembly_IsLoadable()
    {
        Assert.NotNull(typeof(ApplicationAssemblyTests).Assembly);
    }
}
