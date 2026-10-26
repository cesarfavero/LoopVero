# `isObjectKind`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only-allowlist.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-allowlist-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:749239-749241](../../../../../../../../reference/runtime/host-main.cjs#L749239-L749241) | `FunctionDeclaration` | no | `kind` |
| [evaluation:522090-522092](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522090-L522092) | `FunctionDeclaration` | no | `kind` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749239-749241](../../../../../../../../reference/runtime/host-main.cjs#L749239-L749241) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:522090-522092](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522090-L522092) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:749239

Calls written directly in this body: `OBJECT_KINDS.some`.

SHA-256 of the source span: `e23b9f615395dab1627bc4c5f15a32e8e01fad8403c449e3aca80d68808ea865`.

### evaluation:522090

Calls written directly in this body: `OBJECT_KINDS.some`.

SHA-256 of the source span: `e23b9f615395dab1627bc4c5f15a32e8e01fad8403c449e3aca80d68808ea865`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
