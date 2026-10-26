# `isBoundedListener`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/repo-wide-listener-refusal.ts` · [Module README](../../../../../modules/core/automations/repo-wide-listener-refusal-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762008-762011](../../../../../../reference/runtime/host-main.cjs#L762008-L762011) | `FunctionDeclaration` | no | `listener` |
| [evaluation:554586-554589](../../../../../../reference/runtime/sand-eval-runner.cjs#L554586-L554589) | `FunctionDeclaration` | no | `listener` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762008-762011](../../../../../../reference/runtime/host-main.cjs#L762008-L762011) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:554586-554589](../../../../../../reference/runtime/sand-eval-runner.cjs#L554586-L554589) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:762008

Calls written directly in this body: `.some`.

SHA-256 of the source span: `520114e96e0b3aa22e2b76ed449e9340c6f6c617324d47121aaf0dcdcd3496cd`.

### evaluation:554586

Calls written directly in this body: `.some`.

SHA-256 of the source span: `520114e96e0b3aa22e2b76ed449e9340c6f6c617324d47121aaf0dcdcd3496cd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
