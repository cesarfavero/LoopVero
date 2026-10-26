# `start/probeWritable`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/extension.ts` · [Module README](../../../../../../modules/host/extensions/session/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:728428-728443](../../../../../../../reference/runtime/host-main.cjs#L728428-L728443) | `ArrowFunctionExpression` | yes | `path33, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728428-728443](../../../../../../../reference/runtime/host-main.cjs#L728428-L728443) | 1 | 0 | 2 | 0 | 0 | 0 |

### host:728428

Calls written directly in this body: `abortProbe`, `cancelProbe`, `mediaRootAccessorOf`, `mediaRootProbeContext.withCancel`, `probeDirectoryWritableViaExecDaemon`, `signal.addEventListener`, `signal.removeEventListener`.

SHA-256 of the source span: `44f6920acf137eea90d89ef63793259fd86766692b22fe429749bf23651083b2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
