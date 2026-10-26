# `wait`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/core.js` · [Module README](../../../../modules/context/core-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225277-225285](../../../../../reference/runtime/host-main.cjs#L225277-L225285) | `FunctionDeclaration` | no | `ctx` |
| [evaluation:1765-1773](../../../../../reference/runtime/sand-eval-runner.cjs#L1765-L1773) | `FunctionDeclaration` | no | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225277-225285](../../../../../reference/runtime/host-main.cjs#L225277-L225285) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:1765-1773](../../../../../reference/runtime/sand-eval-runner.cjs#L1765-L1773) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225277

Calls written directly in this body: `new Promise`.

SHA-256 of the source span: `230e4a5a91e5175ec0a543c5c4f9a6bad638644105ef8f82d8339459f19c0c6c`.

### evaluation:1765

Calls written directly in this body: `new Promise`.

SHA-256 of the source span: `12667d611d16bcb0c20d09f551aa1217c492cb8d96f81ec2063c5ce0f36fcf8f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
