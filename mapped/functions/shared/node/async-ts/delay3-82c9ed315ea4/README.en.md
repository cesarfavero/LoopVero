# `delay3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/async.ts` · [Module README](../../../../../modules/shared/node/async-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494332-494334](../../../../../../reference/runtime/host-main.cjs#L494332-L494334) | `FunctionDeclaration` | no | `ms2, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494332-494334](../../../../../../reference/runtime/host-main.cjs#L494332-L494334) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494332

Calls written directly in this body: `delayWith`.

SHA-256 of the source span: `19bf95eb941b8a83d711c1c1e57fcb6a2da0bd3e5982cbb3aebba14e633a9d36`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
