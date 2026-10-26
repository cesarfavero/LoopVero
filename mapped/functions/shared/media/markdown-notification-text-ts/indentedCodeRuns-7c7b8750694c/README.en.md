# `indentedCodeRuns`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/markdown-notification-text.ts` · [Module README](../../../../../modules/shared/media/markdown-notification-text-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722250-722278](../../../../../../reference/runtime/host-main.cjs#L722250-L722278) | `FunctionDeclaration` | no | `source, fences` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722250-722278](../../../../../../reference/runtime/host-main.cjs#L722250-L722278) | 8 | 1 | 0 | 1 | 0 | 0 |

### host:722250

Calls written directly in this body: `/^[ \t]/.test`, `INDENTED_CODE_PATTERN.test`, `LIST_ITEM_PATTERN.test`, `fences.map`, `isInsideFenceBody`, `line.trim`, `monotonicRangeProbe`, `runs.push`, `source.slice`, `source.split`.

Assignment or increment targets: `afterBlank`, `inList`, `offset2`, `open13`.

SHA-256 of the source span: `74171bb860e5befed906e047c4e467ab5d8665d15f78c18860302cc2385f81eb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
