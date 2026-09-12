using Asp.Versioning;
using Jarvis.DDD.Domain;
using Jarvis.HealthChecks;
using Jarvis.Mvc;
using Jarvis.Mvc.ApplicationBuilders;
using Jarvis.Mvc.ExceptionHandling;
using Jarvis.OpenTelemetry.Abstractions;
using Jarvis.OpenTelemetry.Extensions;
using Jarvis.Swashbuckle;

namespace Hrm.Host.DependencyInjection;

public static class HostLayerExtension
{
    public static IHostApplicationBuilder AddHostLayer(this IHostApplicationBuilder builder)
    {
        builder.Services.AddJarvisOpenTelemetry(builder.Configuration)
            .ConfigureResource()
            .ConfigureLogging()
            .ConfigureTrace()
            .ConfigureMetric();
        builder.Services.AddTelemetryEnrichment();

        builder.AddCoreJson();
        builder.AddCoreCors();
        builder.AddCoreDomain();
        builder.AddCoreWebApi();

        builder.Services.AddApiVersioning(options =>
        {
            options.DefaultApiVersion = new ApiVersion(1, 0);
            options.AssumeDefaultVersionWhenUnspecified = true;
            options.ReportApiVersions = true;
        }).AddApiExplorer(options =>
        {
            options.GroupNameFormat = "'v'VVV";
            options.SubstituteApiVersionInUrl = true;
        });

        builder.AddCoreSwagger();
        builder.AddHealthChecks();

        return builder;
    }

    public static WebApplication UseHostLayer(this WebApplication app)
    {
        app.UseCoreSwagger();
        app.UseCoreCors();
        app.UseJarvisOpenTelemetry();
        app.UseCoreMiddleware<ApiResponseWrapperMiddleware>();
        app.MapControllers();
        app.UseHealthChecks();

        return app;
    }
}
