# `readCloudAgentAttachment`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-images.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-images-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:567427-567461](../../../../../../reference/runtime/sand-eval-runner.cjs#L567427-L567461) | `FunctionDeclaration` | yes | `{   ctx,   hostPath,   mediaStoreRoots,   boxPath,   byteLimit,   readBoxFile }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:567427-567461](../../../../../../reference/runtime/sand-eval-runner.cjs#L567427-L567461) | 9 | 0 | 3 | 7 | 0 | 1 |

### evaluation:567427

Calls written directly in this body: `boxDataRootSpellings`, `boxPath.startsWith`, `containWithin`, `readBoxFile`, `readHostFileWithinLimit`, `toPhysicalBoxPath`.

SHA-256 of the source span: `f06349de810b0c713df190200a0c51950c3ac4b08bb7a8d55fa6e9c7c6cb6932`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
