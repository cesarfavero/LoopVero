# `Walker.playwrightOptions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750113-750123](../../../../../../../../reference/runtime/host-main.cjs#L750113-L750123) | `method` | no | `node2, scope` |
| [evaluation:522964-522974](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522964-L522974) | `method` | no | `node2, scope` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750113-750123](../../../../../../../../reference/runtime/host-main.cjs#L750113-L750123) | 3 | 1 | 0 | 0 | 0 | 0 |
| [evaluation:522964-522974](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522964-L522974) | 3 | 1 | 0 | 0 | 0 | 0 |

### host:750113

Calls written directly in this body: `DENIED_PROPERTY_NAMES.has`, `fail2`, `isInlineFunction`, `propertyKeyName`, `this.playwrightValue`.

SHA-256 of the source span: `d1450207f34fa13fd9671fd5eb2001702bd28295d588c4267212aca961e0a84d`.

### evaluation:522964

Calls written directly in this body: `DENIED_PROPERTY_NAMES.has`, `fail`, `isInlineFunction`, `propertyKeyName`, `this.playwrightValue`.

SHA-256 of the source span: `eac7aa3ee9f056fd8d88ff702611a0bed7a8a189cf6825568a91f14501d5c004`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
