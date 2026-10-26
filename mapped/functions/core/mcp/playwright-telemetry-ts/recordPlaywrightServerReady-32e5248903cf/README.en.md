# `recordPlaywrightServerReady`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-telemetry.ts` · [Module README](../../../../../modules/core/mcp/playwright-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700500-700503](../../../../../../reference/runtime/host-main.cjs#L700500-L700503) | `FunctionDeclaration` | no | `ctx, args` |
| [evaluation:514292-514295](../../../../../../reference/runtime/sand-eval-runner.cjs#L514292-L514295) | `FunctionDeclaration` | no | `ctx, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700500-700503](../../../../../../reference/runtime/host-main.cjs#L700500-L700503) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:514292-514295](../../../../../../reference/runtime/sand-eval-runner.cjs#L514292-L514295) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:700500

Calls written directly in this body: `serverReadiness.histogram`.

SHA-256 of the source span: `b498840e110565bb179ce052e9b9b789e10917d515dc9c0f9a7d0b414bd38a2a`.

### evaluation:514292

Calls written directly in this body: `serverReadiness.histogram`.

SHA-256 of the source span: `b498840e110565bb179ce052e9b9b789e10917d515dc9c0f9a7d0b414bd38a2a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
