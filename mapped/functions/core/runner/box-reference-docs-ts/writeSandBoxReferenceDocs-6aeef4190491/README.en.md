# `writeSandBoxReferenceDocs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/box-reference-docs.ts` · [Module README](../../../../../modules/core/runner/box-reference-docs-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:558511-558529](../../../../../../reference/runtime/host-main.cjs#L558511-L558529) | `FunctionDeclaration` | yes | `referenceDir = SAND_BOX_REFERENCE_DIR, facts = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:558511-558529](../../../../../../reference/runtime/host-main.cjs#L558511-L558529) | 1 | 1 | 2 | 1 | 0 | 0 |

### host:558511

Calls written directly in this body: `encoder2.encode`, `gatedSandAppActionsReferenceDoc`, `gatedSandAppUiReferenceDoc`, `new TextEncoder`, `writeFileAtomic`, `written.push`.

SHA-256 of the source span: `20ebc9a057cc835223337e5672c7d055c4d2d39992e37500e23b9cbbdf6fb234`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
