# `boundedSiteBucket`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/site-visit-tracking.ts` · [Module README](../../../../../modules/core/runner/site-visit-tracking-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454743-454757](../../../../../../reference/runtime/host-main.cjs#L454743-L454757) | `FunctionDeclaration` | no | `hostname4` |
| [evaluation:483969-483983](../../../../../../reference/runtime/sand-eval-runner.cjs#L483969-L483983) | `FunctionDeclaration` | no | `hostname3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454743-454757](../../../../../../reference/runtime/host-main.cjs#L454743-L454757) | 7 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:483969-483983](../../../../../../reference/runtime/sand-eval-runner.cjs#L483969-L483983) | 7 | 0 | 0 | 6 | 0 | 0 |

### host:454743

Calls written directly in this body: `.join`, `.replace`, `CC_SECOND_LEVEL_LABELS.has`, `COMMON_PUBLIC_GTLDS.has`, `DELEGATED_CC_TLDS.has`, `PRIVATE_TLDS.has`, `host.endsWith`, `host.split`, `host.startsWith`, `hostname4.toLowerCase`, `labels.slice`, `mint`.

SHA-256 of the source span: `8f413fb1fb9e905fbfb2baaf07c81b5a9fc8283352f0c0aba8c5460a810fbdfc`.

### evaluation:483969

Calls written directly in this body: `.join`, `.replace`, `CC_SECOND_LEVEL_LABELS.has`, `COMMON_PUBLIC_GTLDS.has`, `DELEGATED_CC_TLDS.has`, `PRIVATE_TLDS.has`, `host.endsWith`, `host.split`, `host.startsWith`, `hostname3.toLowerCase`, `labels.slice`, `mint`.

SHA-256 of the source span: `7060362aecdda92248f5b8ca814f6eeff1076d760ab007e31502355dba525677`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
