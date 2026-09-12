using Hrm.Domain.Shared;

namespace Hrm.Domain.Tests;

public sealed class ProjectInfoTests
{
    [Fact]
    public void ProductName_IsHrm()
    {
        Assert.Equal("Hrm", ProjectInfo.ProductName);
    }
}
