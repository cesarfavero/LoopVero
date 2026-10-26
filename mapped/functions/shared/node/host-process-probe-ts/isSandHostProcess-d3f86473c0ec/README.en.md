# `isSandHostProcess`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/host-process-probe.ts` · [Module README](../../../../../modules/shared/node/host-process-probe-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494198-494201](../../../../../../reference/runtime/host-main.cjs#L494198-L494201) | `FunctionDeclaration` | no | `pid` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494198-494201](../../../../../../reference/runtime/host-main.cjs#L494198-L494201) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494198

Calls written directly in this body: `command.includes`, `readProcessCommand`.

SHA-256 of the source span: `2fe8d6332e3a358d7bb31ba1ee24d147404921135dd891c6563335d3941e82a6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
