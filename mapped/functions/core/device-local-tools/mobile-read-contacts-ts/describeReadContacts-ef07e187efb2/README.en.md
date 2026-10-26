# `describeReadContacts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/mobile-read-contacts.ts` · [Module README](../../../../../modules/core/device-local-tools/mobile-read-contacts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759400-759404](../../../../../../reference/runtime/host-main.cjs#L759400-L759404) | `FunctionDeclaration` | no | `query2` |
| [evaluation:549560-549564](../../../../../../reference/runtime/sand-eval-runner.cjs#L549560-L549564) | `FunctionDeclaration` | no | `query2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759400-759404](../../../../../../reference/runtime/host-main.cjs#L759400-L759404) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:549560-549564](../../../../../../reference/runtime/sand-eval-runner.cjs#L549560-L549564) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:759400

Calls written directly in this body: `.trim`, `query2.replace`, `words2.slice`.

SHA-256 of the source span: `4fd5a6ea6b14c5135a842dc8fd0c0b931010125818aa473da320987bf1545462`.

### evaluation:549560

Calls written directly in this body: `.trim`, `query2.replace`, `words.slice`.

SHA-256 of the source span: `08a0a6e8e095f3b758005f31be04d220730416c46c9a0aaa2b06a5375019a715`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
