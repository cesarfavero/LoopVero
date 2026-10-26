# `truncateString`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/logger.js` · [Module README](../../../../modules/context/logger-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225473-225478](../../../../../reference/runtime/host-main.cjs#L225473-L225478) | `FunctionDeclaration` | no | `value, maxLength` |
| [evaluation:1961-1966](../../../../../reference/runtime/sand-eval-runner.cjs#L1961-L1966) | `FunctionDeclaration` | no | `value, maxLength` |
| [state-worker:21350-21355](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21350-L21355) | `FunctionDeclaration` | no | `value, maxLength` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225473-225478](../../../../../reference/runtime/host-main.cjs#L225473-L225478) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:1961-1966](../../../../../reference/runtime/sand-eval-runner.cjs#L1961-L1966) | 1 | 0 | 0 | 2 | 0 | 0 |
| [state-worker:21350-21355](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21350-L21355) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:225473

Calls written directly in this body: `value.slice`.

SHA-256 of the source span: `037712657b82970b32e05b2f26f35eab902c92fcf8bca765ed6d6f22732f3e5c`.

### evaluation:1961

Calls written directly in this body: `value.slice`.

SHA-256 of the source span: `037712657b82970b32e05b2f26f35eab902c92fcf8bca765ed6d6f22732f3e5c`.

### state-worker:21350

Calls written directly in this body: `value.slice`.

SHA-256 of the source span: `037712657b82970b32e05b2f26f35eab902c92fcf8bca765ed6d6f22732f3e5c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
