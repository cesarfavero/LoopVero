# `recordPlaywrightRunCodeImages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-telemetry.ts` · [Module README](../../../../../modules/core/mcp/playwright-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700476-700482](../../../../../../reference/runtime/host-main.cjs#L700476-L700482) | `FunctionDeclaration` | no | `ctx, args` |
| [evaluation:514265-514271](../../../../../../reference/runtime/sand-eval-runner.cjs#L514265-L514271) | `FunctionDeclaration` | no | `ctx, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700476-700482](../../../../../../reference/runtime/host-main.cjs#L700476-L700482) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:514265-514271](../../../../../../reference/runtime/sand-eval-runner.cjs#L514265-L514271) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:700476

Calls written directly in this body: `countBucket`, `runCodeResultImages.increment`.

SHA-256 of the source span: `ffc3a90bcacb30ad61612abfa9c413c96e6d72c54894ebcfb8608cf63faa4187`.

### evaluation:514265

Calls written directly in this body: `countBucket`, `runCodeResultImages.increment`.

SHA-256 of the source span: `ffc3a90bcacb30ad61612abfa9c413c96e6d72c54894ebcfb8608cf63faa4187`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
