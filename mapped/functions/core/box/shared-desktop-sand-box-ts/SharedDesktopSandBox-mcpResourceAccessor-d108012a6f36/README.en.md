# `SharedDesktopSandBox.mcpResourceAccessor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:555019-555021](../../../../../../reference/runtime/host-main.cjs#L555019-L555021) | `method` | yes | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:555019-555021](../../../../../../reference/runtime/host-main.cjs#L555019-L555021) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:555019

Calls written directly in this body: `boxMcpResourceAccessor`.

SHA-256 of the source span: `867b1a361bcabe1e11c17f930e86be0e29b4f42f3e33dd0b779766fce57d0847`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
