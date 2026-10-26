# `recordSleeps`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-telemetry.ts` · [Module README](../../../../../modules/core/mcp/playwright-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700597-700608](../../../../../../reference/runtime/host-main.cjs#L700597-L700608) | `FunctionDeclaration` | no | `ctx, args` |
| [evaluation:514389-514400](../../../../../../reference/runtime/sand-eval-runner.cjs#L514389-L514400) | `FunctionDeclaration` | no | `ctx, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700597-700608](../../../../../../reference/runtime/host-main.cjs#L700597-L700608) | 2 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:514389-514400](../../../../../../reference/runtime/sand-eval-runner.cjs#L514389-L514400) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:700597

Calls written directly in this body: `runCodeSleepCalls.increment`, `runCodeSleepTime.histogram`.

SHA-256 of the source span: `ad04843d7f50b8166c3f5d61f7f17620b155871c7004eec3e27178f97560d331`.

### evaluation:514389

Calls written directly in this body: `runCodeSleepCalls.increment`, `runCodeSleepTime.histogram`.

SHA-256 of the source span: `ad04843d7f50b8166c3f5d61f7f17620b155871c7004eec3e27178f97560d331`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
