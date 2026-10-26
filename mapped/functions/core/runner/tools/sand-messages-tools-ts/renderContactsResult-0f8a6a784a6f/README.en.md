# `renderContactsResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-messages-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778051-778055](../../../../../../../reference/runtime/host-main.cjs#L778051-L778055) | `FunctionDeclaration` | no | `result` |
| [evaluation:577786-577790](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577786-L577790) | `FunctionDeclaration` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778051-778055](../../../../../../../reference/runtime/host-main.cjs#L778051-L778055) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:577786-577790](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577786-L577790) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:778051

Calls written directly in this body: `JSON.stringify`.

SHA-256 of the source span: `bdccbf881df0fcf8b95298be7da139650973d2956cc144219a9fe314b3f5aaab`.

### evaluation:577786

Calls written directly in this body: `JSON.stringify`.

SHA-256 of the source span: `bdccbf881df0fcf8b95298be7da139650973d2956cc144219a9fe314b3f5aaab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
