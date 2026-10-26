# `structFromRecord`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/struct-from-record.ts` · [Module README](../../../../../modules/core/runner/struct-from-record-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699137-699139](../../../../../../reference/runtime/host-main.cjs#L699137-L699139) | `FunctionDeclaration` | no | `record3` |
| [evaluation:512968-512970](../../../../../../reference/runtime/sand-eval-runner.cjs#L512968-L512970) | `FunctionDeclaration` | no | `record4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699137-699139](../../../../../../reference/runtime/host-main.cjs#L699137-L699139) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:512968-512970](../../../../../../reference/runtime/sand-eval-runner.cjs#L512968-L512970) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:699137

Calls written directly in this body: `Struct.fromJson`, `jsonObjectFrom`.

SHA-256 of the source span: `6edcc9f34bb305146ee0de54e2e4aa42ee2db704ae41e1f8f40a3013be24969e`.

### evaluation:512968

Calls written directly in this body: `Struct.fromJson`, `jsonObjectFrom`.

SHA-256 of the source span: `e974dbd58ca2e6e394100da626896dbe7e8975aa189c52be33449ab5881bab38`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
