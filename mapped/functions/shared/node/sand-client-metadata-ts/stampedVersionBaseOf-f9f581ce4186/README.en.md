# `stampedVersionBaseOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/sand-client-metadata.ts` · [Module README](../../../../../modules/shared/node/sand-client-metadata-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:175794-175796](../../../../../../reference/runtime/host-main.cjs#L175794-L175796) | `FunctionDeclaration` | no | `stamped` |
| [evaluation:511740-511742](../../../../../../reference/runtime/sand-eval-runner.cjs#L511740-L511742) | `FunctionDeclaration` | no | `stamped` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175794-175796](../../../../../../reference/runtime/host-main.cjs#L175794-L175796) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:511740-511742](../../../../../../reference/runtime/sand-eval-runner.cjs#L511740-L511742) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:175794

Calls written directly in this body: `STAMPED_VERSION_BASE.exec`, `stamped.trim`.

SHA-256 of the source span: `e23c9e2c340557a86de9765e5b37a25cf8fb9a3608536ac311c502972b5af6ba`.

### evaluation:511740

Calls written directly in this body: `STAMPED_VERSION_BASE.exec`, `stamped.trim`.

SHA-256 of the source span: `e23c9e2c340557a86de9765e5b37a25cf8fb9a3608536ac311c502972b5af6ba`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
