# `../packages/context/dist/otel.js`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/otel.js` · [Module README](../../../../modules/context/otel-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225873-225894](../../../../../reference/runtime/host-main.cjs#L225873-L225894) | `FunctionExpression` | no | `(none)` |
| [evaluation:2387-2408](../../../../../reference/runtime/sand-eval-runner.cjs#L2387-L2408) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225873-225894](../../../../../reference/runtime/host-main.cjs#L225873-L225894) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:2387-2408](../../../../../reference/runtime/sand-eval-runner.cjs#L2387-L2408) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:225873

Calls written directly in this body: `Symbol`, `createKey`, `init_core3`, `init_esm4`.

Assignment or increment targets: `DisposableSpan`, `INHERITABLE_SPAN_ATTRIBUTES_KEY`, `ROOT_SPAN_KEY`, `ROOT_SPAN_START_MS_KEY`, `SPAN_KEY2`, `SUPPRESS_CHILD_SPANS_KEY`.

SHA-256 of the source span: `183be7412bb5bbd3ac78ec91adcb2ceb7001c8ed1aedf23b5aec8d87600e6bfb`.

### evaluation:2387

Calls written directly in this body: `Symbol`, `createKey`, `init_core`, `init_esm`.

Assignment or increment targets: `DisposableSpan`, `INHERITABLE_SPAN_ATTRIBUTES_KEY`, `ROOT_SPAN_KEY`, `ROOT_SPAN_START_MS_KEY`, `SPAN_KEY2`, `SUPPRESS_CHILD_SPANS_KEY`.

SHA-256 of the source span: `1b85aed67d0048be2f1278da60544b59b8747e2ed71cb969c4ad055557600aa9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
