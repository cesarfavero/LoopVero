# `matchCredentialItemToSite`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/credential-domain.ts` · [Module README](../../../../../modules/core/runner/credential-domain-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:546825-546839](../../../../../../reference/runtime/host-main.cjs#L546825-L546839) | `FunctionDeclaration` | no | `item, rawTarget` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546825-546839](../../../../../../reference/runtime/host-main.cjs#L546825-L546839) | 4 | 1 | 0 | 4 | 0 | 0 |

### host:546825

Calls written directly in this body: `isBrowserLoginCredential`, `isSecureCredentialTarget`, `matchTargetRule`, `parseHttpUrl`.

Assignment or increment targets: `best`.

SHA-256 of the source span: `4d5448e7575cf27994363b1adb75b1524ba868063f628a9ee15ce0a6d55e6221`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
