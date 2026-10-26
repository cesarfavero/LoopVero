# `WatchedDirectory.listSubdirectoryNamesOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/watched-directory.ts` · [Module README](../../../../modules/host/watched-directory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684453-684462](../../../../../reference/runtime/host-main.cjs#L684453-L684462) | `method` | no | `directory` |
| [evaluation:627777-627786](../../../../../reference/runtime/sand-eval-runner.cjs#L627777-L627786) | `method` | no | `directory` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684453-684462](../../../../../reference/runtime/host-main.cjs#L684453-L684462) | 0 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:627777-627786](../../../../../reference/runtime/sand-eval-runner.cjs#L627777-L627786) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:684453

Calls written directly in this body: `.map`, `.sort`, `entries.filter`, `reportFallbackUnlessAbsent`.

Assignment or increment targets: `entries`.

SHA-256 of the source span: `0444fda81caa5a6d8e44a222c9c071ce5a22944f1cff88101e0595997aa385d8`.

### evaluation:627777

Calls written directly in this body: `.map`, `.sort`, `entries.filter`, `reportFallbackUnlessAbsent`.

Assignment or increment targets: `entries`.

SHA-256 of the source span: `263915e33164c9f411de1d999d7c120a18a7af88cd3e3f950defb64503297787`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
