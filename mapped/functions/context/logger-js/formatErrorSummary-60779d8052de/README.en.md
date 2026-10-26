# `formatErrorSummary`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/logger.js` · [Module README](../../../../modules/context/logger-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225551-225567](../../../../../reference/runtime/host-main.cjs#L225551-L225567) | `FunctionDeclaration` | no | `error64, options2, colors, depth, seen, path33` |
| [evaluation:2039-2055](../../../../../reference/runtime/sand-eval-runner.cjs#L2039-L2055) | `FunctionDeclaration` | no | `error63, options2, colors, depth, seen, path33` |
| [state-worker:21428-21444](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21428-L21444) | `FunctionDeclaration` | no | `error, options, colors, depth, seen, path` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225551-225567](../../../../../reference/runtime/host-main.cjs#L225551-L225567) | 5 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:2039-2055](../../../../../reference/runtime/sand-eval-runner.cjs#L2039-L2055) | 5 | 0 | 0 | 2 | 0 | 0 |
| [state-worker:21428-21444](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21428-L21444) | 5 | 0 | 0 | 2 | 0 | 0 |

### host:225551

Calls written directly in this body: `colors.dim`, `colors.red`, `formatInlineValue`, `path33.concat`, `seen.add`, `seen.delete`, `seen.has`.

Assignment or increment targets: `result`.

SHA-256 of the source span: `720ac1182d54f2fb216993ff81cbaee1490a85ef182b49fad1f6b2d2043b3bd2`.

### evaluation:2039

Calls written directly in this body: `colors.dim`, `colors.red`, `formatInlineValue`, `path33.concat`, `seen.add`, `seen.delete`, `seen.has`.

Assignment or increment targets: `result`.

SHA-256 of the source span: `fe18bcd1047406d27158b76a27d4e313cc2b1d6cf76c2f9b49b7f1d8ed92e170`.

### state-worker:21428

Calls written directly in this body: `colors.dim`, `colors.red`, `formatInlineValue`, `path.concat`, `seen.add`, `seen.delete`, `seen.has`.

Assignment or increment targets: `result`.

SHA-256 of the source span: `4531d1a74a3161fefae6c0f66cef2750740c0bc78849fe93421d313a676814df`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
