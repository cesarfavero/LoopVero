# `findConnectorManifest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/channels/channels.ts` · [Module README](../../../../../modules/shared/channels/channels-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505295-505297](../../../../../../reference/runtime/host-main.cjs#L505295-L505297) | `FunctionDeclaration` | no | `platform2` |
| [evaluation:474526-474528](../../../../../../reference/runtime/sand-eval-runner.cjs#L474526-L474528) | `FunctionDeclaration` | no | `platform` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505295-505297](../../../../../../reference/runtime/host-main.cjs#L505295-L505297) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:474526-474528](../../../../../../reference/runtime/sand-eval-runner.cjs#L474526-L474528) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:505295

Calls written directly in this body: `CONNECTOR_MANIFESTS.find`.

SHA-256 of the source span: `0b4a84c8bee01538a88524615f8a593746d96321e49f96db7c386981f946b51e`.

### evaluation:474526

Calls written directly in this body: `CONNECTOR_MANIFESTS.find`.

SHA-256 of the source span: `6c830ead9c47dcef954006cac0dc63dcdf45b1a65fa3e13db8bf9da4ca26c7bb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
