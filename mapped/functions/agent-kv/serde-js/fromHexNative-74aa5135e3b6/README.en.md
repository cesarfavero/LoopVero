# `fromHexNative`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/serde.js` · [Module README](../../../../modules/agent-kv/serde-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615906-615917](../../../../../reference/runtime/host-main.cjs#L615906-L615917) | `FunctionDeclaration` | no | `clean` |
| [evaluation:284691-284702](../../../../../reference/runtime/sand-eval-runner.cjs#L284691-L284702) | `FunctionDeclaration` | no | `clean` |
| [state-worker:21700-21711](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21700-L21711) | `FunctionDeclaration` | no | `clean` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615906-615917](../../../../../reference/runtime/host-main.cjs#L615906-L615917) | 2 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:284691-284702](../../../../../reference/runtime/sand-eval-runner.cjs#L284691-L284702) | 2 | 0 | 0 | 3 | 0 | 1 |
| [state-worker:21700-21711](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21700-L21711) | 2 | 0 | 0 | 3 | 0 | 1 |

### host:615906

Calls written directly in this body: `.write`, `Buffer.from`, `STRICT_HEX_RE.test`, `new Uint8Array`.

SHA-256 of the source span: `b291d5ee5439ad09cb25ae97612039a86d9566558f9760aebea94ec6994fd413`.

### evaluation:284691

Calls written directly in this body: `.write`, `Buffer.from`, `STRICT_HEX_RE.test`, `new Uint8Array`.

SHA-256 of the source span: `b291d5ee5439ad09cb25ae97612039a86d9566558f9760aebea94ec6994fd413`.

### state-worker:21700

Calls written directly in this body: `.write`, `Buffer.from`, `STRICT_HEX_RE.test`, `new Uint8Array`.

SHA-256 of the source span: `b291d5ee5439ad09cb25ae97612039a86d9566558f9760aebea94ec6994fd413`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
