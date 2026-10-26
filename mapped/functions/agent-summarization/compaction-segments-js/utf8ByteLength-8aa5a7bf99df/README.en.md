# `utf8ByteLength`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/compaction-segments.js` · [Module README](../../../../modules/agent-summarization/compaction-segments-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616894-616896](../../../../../reference/runtime/host-main.cjs#L616894-L616896) | `FunctionDeclaration` | no | `text3` |
| [evaluation:285434-285436](../../../../../reference/runtime/sand-eval-runner.cjs#L285434-L285436) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616894-616896](../../../../../reference/runtime/host-main.cjs#L616894-L616896) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:285434-285436](../../../../../reference/runtime/sand-eval-runner.cjs#L285434-L285436) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:616894

Calls written directly in this body: `Buffer.byteLength`.

SHA-256 of the source span: `fb9aa59605a57eca273c2a72781a4ac20c5db3512e829a1b583c54ea0e771b01`.

### evaluation:285434

Calls written directly in this body: `Buffer.byteLength`.

SHA-256 of the source span: `fb9aa59605a57eca273c2a72781a4ac20c5db3512e829a1b583c54ea0e771b01`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
