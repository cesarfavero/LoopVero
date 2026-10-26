# `argIssueFolder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/communicate-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725089-725100](../../../../../../../reference/runtime/host-main.cjs#L725089-L725100) | `FunctionDeclaration` | no | `knownFields` |
| [evaluation:480060-480071](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480060-L480071) | `FunctionDeclaration` | no | `knownFields` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725089-725100](../../../../../../../reference/runtime/host-main.cjs#L725089-L725100) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480060-480071](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480060-L480071) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:725089

Calls written directly in this body: `brandLiteralEnum`, `brandedEnumOf`.

SHA-256 of the source span: `864117a4517ecd25f57541e19be070789f0ff51b42bf0c68ab356807985681ce`.

### evaluation:480060

Calls written directly in this body: `brandLiteralEnum`, `brandedEnumOf`.

SHA-256 of the source span: `ba395de40af9b327d1ffb078790c2ab94158b78f893d229c2448944beb4b194a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
