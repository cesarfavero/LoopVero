# `servedModelLabel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-run-code-review-telemetry.ts` · [Module README](../../../../../modules/core/mcp/playwright-run-code-review-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742667-742669](../../../../../../reference/runtime/host-main.cjs#L742667-L742669) | `FunctionDeclaration` | no | `ctx` |
| [evaluation:515329-515331](../../../../../../reference/runtime/sand-eval-runner.cjs#L515329-L515331) | `FunctionDeclaration` | no | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742667-742669](../../../../../../reference/runtime/host-main.cjs#L742667-L742669) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:515329-515331](../../../../../../reference/runtime/sand-eval-runner.cjs#L515329-L515331) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:742667

Calls written directly in this body: `brandLiteralEnum`, `brandedId`, `readSandAgentLoopModel`.

SHA-256 of the source span: `895b2991caf2778b39089242973f7528569cf82aca986f3d2e051645dea28ae4`.

### evaluation:515329

Calls written directly in this body: `brandLiteralEnum`, `brandedId`, `readSandAgentLoopModel`.

SHA-256 of the source span: `895b2991caf2778b39089242973f7528569cf82aca986f3d2e051645dea28ae4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
