# `unnamedServerIdentity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/mcp-tool-call-telemetry.ts` · [Module README](../../../../../modules/core/mcp/mcp-tool-call-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693402-693421](../../../../../../reference/runtime/host-main.cjs#L693402-L693421) | `FunctionDeclaration` | no | `server` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693402-693421](../../../../../../reference/runtime/host-main.cjs#L693402-L693421) | 7 | 0 | 0 | 7 | 0 | 1 |

### host:693402

Calls written directly in this body: `.hostname.toLowerCase`, `.replace`, `MARKETPLACE_PLUGIN_ID.test`, `PACKAGE_LAUNCHERS.get`, `boundedLaunchToken`, `commandBasename`, `new URL`, `packageFromLauncherArgs`.

SHA-256 of the source span: `85b6358a8b39880fa42f6d7e8941bd6a3747702c5d9fcb99750095f6b6755498`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
