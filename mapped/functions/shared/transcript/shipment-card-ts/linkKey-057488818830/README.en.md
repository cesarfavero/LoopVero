# `linkKey`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shipment-card.ts` · [Module README](../../../../../modules/shared/transcript/shipment-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707183-707190](../../../../../../reference/runtime/host-main.cjs#L707183-L707190) | `FunctionDeclaration` | no | `raw` |
| [evaluation:481306-481313](../../../../../../reference/runtime/sand-eval-runner.cjs#L481306-L481313) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707183-707190](../../../../../../reference/runtime/host-main.cjs#L707183-L707190) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:481306-481313](../../../../../../reference/runtime/sand-eval-runner.cjs#L481306-L481313) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:707183

Calls written directly in this body: `.replace`, `URL.canParse`, `new URL`, `raw.replace`, `url2.hostname.toLowerCase`, `url2.pathname.replace`.

SHA-256 of the source span: `1eb1a81df5c3af19c000af72441dd4ddea5a1fb755316af4685308648c74916a`.

### evaluation:481306

Calls written directly in this body: `.replace`, `URL.canParse`, `new URL`, `raw.replace`, `url2.hostname.toLowerCase`, `url2.pathname.replace`.

SHA-256 of the source span: `1eb1a81df5c3af19c000af72441dd4ddea5a1fb755316af4685308648c74916a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
