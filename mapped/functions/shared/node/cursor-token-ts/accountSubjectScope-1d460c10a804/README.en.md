# `accountSubjectScope`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-token.ts` · [Module README](../../../../../modules/shared/node/cursor-token-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:175726-175729](../../../../../../reference/runtime/host-main.cjs#L175726-L175729) | `FunctionDeclaration` | no | `subject` |
| [evaluation:511705-511708](../../../../../../reference/runtime/sand-eval-runner.cjs#L511705-L511708) | `FunctionDeclaration` | no | `subject` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175726-175729](../../../../../../reference/runtime/host-main.cjs#L175726-L175729) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:511705-511708](../../../../../../reference/runtime/sand-eval-runner.cjs#L511705-L511708) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:175726

Calls written directly in this body: `accountScopeOfPrincipal`.

SHA-256 of the source span: `82e6a5e0bf58b8d2ccac4effacf8d80e92ee6383483cad99d7cc38999c6c4e8d`.

### evaluation:511705

Calls written directly in this body: `accountScopeOfPrincipal`.

SHA-256 of the source span: `82e6a5e0bf58b8d2ccac4effacf8d80e92ee6383483cad99d7cc38999c6c4e8d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
