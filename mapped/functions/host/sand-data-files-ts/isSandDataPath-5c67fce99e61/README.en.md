# `isSandDataPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454038-454040](../../../../../reference/runtime/host-main.cjs#L454038-L454040) | `FunctionDeclaration` | no | `path33` |
| [evaluation:627638-627640](../../../../../reference/runtime/sand-eval-runner.cjs#L627638-L627640) | `FunctionDeclaration` | no | `path33` |
| [state-worker:639-641](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L639-L641) | `FunctionDeclaration` | no | `path` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454038-454040](../../../../../reference/runtime/host-main.cjs#L454038-L454040) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627638-627640](../../../../../reference/runtime/sand-eval-runner.cjs#L627638-L627640) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:639-641](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L639-L641) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:454038

Calls written directly in this body: `isPathWithin`, `sandDataAnchor`.

SHA-256 of the source span: `c61c1b3691504955e0a66ad5cd5a483fba0c23c73271600e68d55a00c73ee2fd`.

### evaluation:627638

Calls written directly in this body: `isPathWithin2`, `sandDataAnchor`.

SHA-256 of the source span: `0fbe23d02317c6bf18da7db08ab45d570a21ad07ab6b22a6c183b3852660476e`.

### state-worker:639

Calls written directly in this body: `isPathWithin`, `sandDataAnchor`.

SHA-256 of the source span: `96227e849fd19c63f4e781a9f8f1b5517752a8f12d46d9815cd779a0962375eb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
