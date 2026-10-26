# `isKnownNonImage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-schema.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:741198-741201](../../../../../../../reference/runtime/host-main.cjs#L741198-L741201) | `FunctionDeclaration` | no | `url2` |
| [evaluation:482145-482148](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482145-L482148) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741198-741201](../../../../../../../reference/runtime/host-main.cjs#L741198-L741201) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:482145-482148](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482145-L482148) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:741198

Calls written directly in this body: `classifyAttachment`.

SHA-256 of the source span: `3f9b9faca7eee1f37f0af7739991356bf145f494c25e2808508ea2220a9ef329`.

### evaluation:482145

Calls written directly in this body: `classifyAttachment`.

SHA-256 of the source span: `3f9b9faca7eee1f37f0af7739991356bf145f494c25e2808508ea2220a9ef329`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
