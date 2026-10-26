# `normalizeCurrency`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/virtual-card-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/virtual-card-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775301-775308](../../../../../../../reference/runtime/host-main.cjs#L775301-L775308) | `FunctionDeclaration` | no | `raw` |
| [evaluation:574946-574953](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574946-L574953) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775301-775308](../../../../../../../reference/runtime/host-main.cjs#L775301-L775308) | 1 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:574946-574953](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574946-L574953) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:775301

Calls written directly in this body: `JSON.stringify`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `718fd0815ec728445439ad2f1a7c755da736c236d20b24f5e6ed9d92589452fd`.

### evaluation:574946

Calls written directly in this body: `JSON.stringify`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `718fd0815ec728445439ad2f1a7c755da736c236d20b24f5e6ed9d92589452fd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
