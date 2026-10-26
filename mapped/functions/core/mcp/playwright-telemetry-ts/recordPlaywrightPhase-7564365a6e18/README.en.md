# `recordPlaywrightPhase`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-telemetry.ts` · [Module README](../../../../../modules/core/mcp/playwright-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700609-700612](../../../../../../reference/runtime/host-main.cjs#L700609-L700612) | `FunctionDeclaration` | no | `ctx, args` |
| [evaluation:514401-514404](../../../../../../reference/runtime/sand-eval-runner.cjs#L514401-L514404) | `FunctionDeclaration` | no | `ctx, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700609-700612](../../../../../../reference/runtime/host-main.cjs#L700609-L700612) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:514401-514404](../../../../../../reference/runtime/sand-eval-runner.cjs#L514401-L514404) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:700609

Calls written directly in this body: `phases.histogram`, `toolLabel`.

SHA-256 of the source span: `a772b962188a3b7c40b990be57ee471d4b93196f7e8e08d98945af0096b6abf2`.

### evaluation:514401

Calls written directly in this body: `phases.histogram`, `toolLabel`.

SHA-256 of the source span: `a772b962188a3b7c40b990be57ee471d4b93196f7e8e08d98945af0096b6abf2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
