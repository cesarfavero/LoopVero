# `draftCallResultText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-connector-results.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732657-732661](../../../../../../../reference/runtime/host-main.cjs#L732657-L732661) | `FunctionDeclaration` | no | `result` |
| [evaluation:540179-540183](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540179-L540183) | `FunctionDeclaration` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732657-732661](../../../../../../../reference/runtime/host-main.cjs#L732657-L732661) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:540179-540183](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540179-L540183) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:732657

Calls written directly in this body: `.join`, `.trim`, `inner.value.content.map`.

SHA-256 of the source span: `5722e96b9dbb31edc3cf0394af76b4e44ae502e440ff51754fb7085e16fe5b46`.

### evaluation:540179

Calls written directly in this body: `.join`, `.trim`, `inner.value.content.map`.

SHA-256 of the source span: `5722e96b9dbb31edc3cf0394af76b4e44ae502e440ff51754fb7085e16fe5b46`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
