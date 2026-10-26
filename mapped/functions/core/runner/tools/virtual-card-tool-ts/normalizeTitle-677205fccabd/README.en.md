# `normalizeTitle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/virtual-card-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/virtual-card-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775309-775318](../../../../../../../reference/runtime/host-main.cjs#L775309-L775318) | `FunctionDeclaration` | no | `raw` |
| [evaluation:574954-574963](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574954-L574963) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775309-775318](../../../../../../../reference/runtime/host-main.cjs#L775309-L775318) | 1 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:574954-574963](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574954-L574963) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:775309

Calls written directly in this body: `.filter`, `clampLine`, `new SandToolInputError`, `title.split`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `2b386081ca61f715bc3ef05eeae7d2a63c14f340867a57a826696d2763271d99`.

### evaluation:574954

Calls written directly in this body: `.filter`, `clampLine`, `new SandToolInputError`, `title.split`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `ea6daed9a44f5952f8de39d8a9fe8a3697638aab8a2e31cc7f0608dfb6ad93e1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
