# `getSandProductionRootDir`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/host-paths.ts` · [Module README](../../../../modules/core/host-paths-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:430899-430901](../../../../../reference/runtime/host-main.cjs#L430899-L430901) | `FunctionDeclaration` | no | `homeDir = (0, import_node_os.homedir)()` |
| [evaluation:530491-530493](../../../../../reference/runtime/sand-eval-runner.cjs#L530491-L530493) | `FunctionDeclaration` | no | `homeDir = (0, import_node_os8.homedir)()` |
| [state-worker:410-412](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L410-L412) | `FunctionDeclaration` | no | `homeDir = (0, import_node_os.homedir)()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430899-430901](../../../../../reference/runtime/host-main.cjs#L430899-L430901) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:530491-530493](../../../../../reference/runtime/sand-eval-runner.cjs#L530491-L530493) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:410-412](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L410-L412) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:430899

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `f53101cf987e16f2ed65085269ed27d15f418325c727be418d3907d590be49e9`.

### evaluation:530491

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `71b8dada3417863c31db65a0a5412c4e918f04c393e2cda8636d944f8e0e4a8c`.

### state-worker:410

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `1f6e7842f1e2d7a3ec24f254ebbcfc081274265335fd889f164804ed19028962`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
