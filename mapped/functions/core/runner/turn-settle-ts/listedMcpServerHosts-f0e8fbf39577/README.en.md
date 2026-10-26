# `listedMcpServerHosts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-settle.ts` · [Module README](../../../../../modules/core/runner/turn-settle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590670-590681](../../../../../../reference/runtime/sand-eval-runner.cjs#L590670-L590681) | `FunctionDeclaration` | yes | `listHosts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590670-590681](../../../../../../reference/runtime/sand-eval-runner.cjs#L590670-L590681) | 0 | 0 | 1 | 2 | 0 | 1 |

### evaluation:590670

Calls written directly in this body: `errorLogTag`, `listHosts`, `reportHostDiagnostic`, `withTimeout`.

SHA-256 of the source span: `ce41f1edba8a1327b553c779d7d6c3e2dad68be6b284f6e8db1f94230bb5191f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
