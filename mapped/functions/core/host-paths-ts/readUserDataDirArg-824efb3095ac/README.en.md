# `readUserDataDirArg`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/host-paths.ts` · [Module README](../../../../modules/core/host-paths-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:430881-430892](../../../../../reference/runtime/host-main.cjs#L430881-L430892) | `FunctionDeclaration` | no | `argv` |
| [evaluation:530473-530484](../../../../../reference/runtime/sand-eval-runner.cjs#L530473-L530484) | `FunctionDeclaration` | no | `argv` |
| [state-worker:392-403](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L392-L403) | `FunctionDeclaration` | no | `argv` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430881-430892](../../../../../reference/runtime/host-main.cjs#L430881-L430892) | 3 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:530473-530484](../../../../../reference/runtime/sand-eval-runner.cjs#L530473-L530484) | 3 | 1 | 0 | 3 | 0 | 0 |
| [state-worker:392-403](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L392-L403) | 3 | 1 | 0 | 3 | 0 | 0 |

### host:430881

Calls written directly in this body: `arg.slice`, `arg.startsWith`, `next.startsWith`.

Assignment or increment targets: `i`.

SHA-256 of the source span: `6bb33792392a37cbb65074755f3f68bf09a2b5160110c9d43d28796d3210c8cb`.

### evaluation:530473

Calls written directly in this body: `arg.slice`, `arg.startsWith`, `next.startsWith`.

Assignment or increment targets: `i`.

SHA-256 of the source span: `6bb33792392a37cbb65074755f3f68bf09a2b5160110c9d43d28796d3210c8cb`.

### state-worker:392

Calls written directly in this body: `arg.slice`, `arg.startsWith`, `next.startsWith`.

Assignment or increment targets: `i`.

SHA-256 of the source span: `6bb33792392a37cbb65074755f3f68bf09a2b5160110c9d43d28796d3210c8cb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
