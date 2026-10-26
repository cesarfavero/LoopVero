# `loadRedactor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/secure-value-guard.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/secure-value-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767727-767767](../../../../../../../../reference/runtime/host-main.cjs#L767727-L767767) | `FunctionDeclaration` | yes | `source, now` |
| [evaluation:563244-563284](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563244-L563284) | `FunctionDeclaration` | yes | `source, now` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767727-767767](../../../../../../../../reference/runtime/host-main.cjs#L767727-L767767) | 2 | 1 | 1 | 2 | 0 | 0 |
| [evaluation:563244-563284](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563244-L563284) | 2 | 1 | 1 | 2 | 0 | 0 |

### host:767727

Calls written directly in this body: `.filter`, `.join`, `.sort`, `decrypted.delete`, `decrypted.keys`, `decryptedLiveValues.get`, `decryptedLiveValues.set`, `live.map`, `liveKeys.has`, `loadedRedactors.get`, `loadedRedactors.set`, `new Map`, `new Set`, `now`, `redactor.then`, `source.listMetadata`.

SHA-256 of the source span: `7c251768eaba2b8cfa5de9027188d9e9baa38fd72618da0ae07a3755eb8baf76`.

### evaluation:563244

Calls written directly in this body: `.filter`, `.join`, `.sort`, `decrypted.delete`, `decrypted.keys`, `decryptedLiveValues.get`, `decryptedLiveValues.set`, `live.map`, `liveKeys.has`, `loadedRedactors.get`, `loadedRedactors.set`, `new Map`, `new Set`, `now`, `redactor.then`, `source.listMetadata`.

SHA-256 of the source span: `6ed93f0c7e301e2e4c5164535860a9b2ece9c5b1c770a1661f07a12f6733a1c4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
