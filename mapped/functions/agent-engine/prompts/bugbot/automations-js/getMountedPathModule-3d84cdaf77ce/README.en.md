# `getMountedPathModule`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `agent-engine/prompts/bugbot/automations.js` · [Module README](../../../../../../modules/agent-engine/prompts/bugbot/automations-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:631421-631423](../../../../../../../reference/runtime/host-main.cjs#L631421-L631423) | `FunctionDeclaration` | no | `mountPath` |
| [evaluation:410606-410608](../../../../../../../reference/runtime/sand-eval-runner.cjs#L410606-L410608) | `FunctionDeclaration` | no | `mountPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:631421-631423](../../../../../../../reference/runtime/host-main.cjs#L631421-L631423) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:410606-410608](../../../../../../../reference/runtime/sand-eval-runner.cjs#L410606-L410608) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:631421

Calls written directly in this body: `import_node_path101.default.posix.isAbsolute`, `import_node_path101.default.win32.isAbsolute`.

SHA-256 of the source span: `6f6430fce46b056a9a8e5a0ad48f7f94240d8f31405b6312dcd59028520979c4`.

### evaluation:410606

Calls written directly in this body: `import_node_path6.default.posix.isAbsolute`, `import_node_path6.default.win32.isAbsolute`.

SHA-256 of the source span: `37ff323801d1df6d7447fe2c8a5e22ea6d51d61e6392ea482d6ec1816f85291f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
