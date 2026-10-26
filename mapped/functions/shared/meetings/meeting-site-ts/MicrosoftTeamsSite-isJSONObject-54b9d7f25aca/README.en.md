# `_MicrosoftTeamsSite.isJSONObject`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-site.ts` · [Module README](../../../../../modules/shared/meetings/meeting-site-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772425-772433](../../../../../../reference/runtime/host-main.cjs#L772425-L772433) | `method` | no | `text3` |
| [evaluation:571654-571662](../../../../../../reference/runtime/sand-eval-runner.cjs#L571654-L571662) | `method` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772425-772433](../../../../../../reference/runtime/host-main.cjs#L772425-L772433) | 1 | 0 | 0 | 2 | 1 | 1 |
| [evaluation:571654-571662](../../../../../../reference/runtime/sand-eval-runner.cjs#L571654-L571662) | 1 | 0 | 0 | 2 | 1 | 1 |

### host:772425

Calls written directly in this body: `Array.isArray`, `JSON.parse`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `c8a2603094e9a56f1326de00deff2ab175f913e88062a1fe24a547c465e6d97f`.

### evaluation:571654

Calls written directly in this body: `Array.isArray`, `JSON.parse`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `57cb9178f27aaf96f0e722e4ec646360bf29b700fed44d64636a1915e9b2a4a1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
