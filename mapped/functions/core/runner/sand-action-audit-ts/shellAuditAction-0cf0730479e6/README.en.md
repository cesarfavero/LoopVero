# `shellAuditAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-action-audit.ts` · [Module README](../../../../../modules/core/runner/sand-action-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:512915-512918](../../../../../../reference/runtime/sand-eval-runner.cjs#L512915-L512918) | `FunctionDeclaration` | no | `deps, shellKind, command, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512915-512918](../../../../../../reference/runtime/sand-eval-runner.cjs#L512915-L512918) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:512915

Calls written directly in this body: `deps.target`.

SHA-256 of the source span: `9ec1605d6fed98b09e2ad92520bcdee46c55aebdb71de0e637c36fb9d0f09340`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
