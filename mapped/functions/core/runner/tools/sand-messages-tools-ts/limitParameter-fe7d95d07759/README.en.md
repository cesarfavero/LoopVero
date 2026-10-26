# `limitParameter`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-messages-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778056-778060](../../../../../../../reference/runtime/host-main.cjs#L778056-L778060) | `FunctionDeclaration` | no | `limits` |
| [evaluation:577791-577795](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577791-L577795) | `FunctionDeclaration` | no | `limits` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778056-778060](../../../../../../../reference/runtime/host-main.cjs#L778056-L778060) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:577791-577795](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577791-L577795) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:778056

Calls written directly in this body: `.describe`, `.int`, `.min`, `.optional`, `external_exports2.number`.

SHA-256 of the source span: `dc770ca6c4224db63f2d2f655faf23430f1f6d40e36195c8891c83d6726a676e`.

### evaluation:577791

Calls written directly in this body: `.describe`, `.int`, `.min`, `.optional`, `external_exports3.number`.

SHA-256 of the source span: `79c002c09913fbb76c7efc1723da1aad14f2f86f6d47e5af5827e145fef980f9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
