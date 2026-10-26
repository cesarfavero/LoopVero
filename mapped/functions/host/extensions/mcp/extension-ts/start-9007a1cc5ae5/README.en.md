# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/extensions/mcp/extension.ts` · [Module README](../../../../../../modules/host/extensions/mcp/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702433-702516](../../../../../../../reference/runtime/host-main.cjs#L702433-L702516) | `ArrowFunctionExpression` | yes | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702433-702516](../../../../../../../reference/runtime/host-main.cjs#L702433-L702516) | 0 | 0 | 1 | 1 | 0 | 1 |

### host:702433

Calls written directly in this body: `cleanupLegacyMcpAuthCredentials`, `context2.deps.telemetry.logs.reportMcpAuthCleanup`, `context2.onStop`, `createMcpService`, `createPollingPolicy2`, `createSandSkillPublishClient`, `createSharedInstalledPluginsLoader`, `getSandRootDir`, `new SandPluginSkillsService`, `new SandSkillPublishService`, `pinMcpDiagnosticsReporter`, `startPluginSkillsWhenAuthenticated`.

SHA-256 of the source span: `5b8c39201aee19b1931e6873cd15e54f12fbe33f3d8db9a6cc51c1ca28333209`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
