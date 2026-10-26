# `resolveSandUserDataDir`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/host-paths.ts` · [Module README](../../../../modules/core/host-paths-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:430893-430898](../../../../../reference/runtime/host-main.cjs#L430893-L430898) | `FunctionDeclaration` | no | `argv = [], env = process.env, cwd = process.cwd()` |
| [evaluation:530485-530490](../../../../../reference/runtime/sand-eval-runner.cjs#L530485-L530490) | `FunctionDeclaration` | no | `argv = [], env = process.env, cwd = process.cwd()` |
| [state-worker:404-409](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L404-L409) | `FunctionDeclaration` | no | `argv = [], env = process.env, cwd = process.cwd()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430893-430898](../../../../../reference/runtime/host-main.cjs#L430893-L430898) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:530485-530490](../../../../../reference/runtime/sand-eval-runner.cjs#L530485-L530490) | 2 | 0 | 0 | 2 | 0 | 0 |
| [state-worker:404-409](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L404-L409) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:430893

Calls written directly in this body: `raw.trim`, `readUserDataDirArg`.

SHA-256 of the source span: `d891ac00b7c6f766278a1a32c68bdef7f262a5cba79c424d0429485844b07681`.

### evaluation:530485

Calls written directly in this body: `raw.trim`, `readUserDataDirArg`.

SHA-256 of the source span: `c3a8d9a5990dafa5e87d53089d63d68a4a4a9fc9c801a271e705bdb105a9e3f4`.

### state-worker:404

Calls written directly in this body: `raw.trim`, `readUserDataDirArg`.

SHA-256 of the source span: `88830741d2ba43edaf62c81a84d2613a95d56bd770a36b770f5c9c166fc117b5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
