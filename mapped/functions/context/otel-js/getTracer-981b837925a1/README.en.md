# `getTracer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/otel.js` · [Module README](../../../../modules/context/otel-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225788-225790](../../../../../reference/runtime/host-main.cjs#L225788-L225790) | `FunctionDeclaration` | no | `name18 = "context-tracer"` |
| [evaluation:2276-2278](../../../../../reference/runtime/sand-eval-runner.cjs#L2276-L2278) | `FunctionDeclaration` | no | `name18 = "context-tracer"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225788-225790](../../../../../reference/runtime/host-main.cjs#L225788-L225790) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:2276-2278](../../../../../reference/runtime/sand-eval-runner.cjs#L2276-L2278) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225788

Calls written directly in this body: `trace.getTracer`.

SHA-256 of the source span: `e210990b04e3de89dd1234863414ecc01c47b9ca91db03eea459aa03b7c8ccfe`.

### evaluation:2276

Calls written directly in this body: `trace.getTracer`.

SHA-256 of the source span: `e210990b04e3de89dd1234863414ecc01c47b9ca91db03eea459aa03b7c8ccfe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
