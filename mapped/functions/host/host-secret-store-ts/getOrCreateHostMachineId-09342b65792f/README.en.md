# `getOrCreateHostMachineId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/host-secret-store.ts` · [Module README](../../../../modules/host/host-secret-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454075-454085](../../../../../reference/runtime/host-main.cjs#L454075-L454085) | `FunctionDeclaration` | yes | `path33 = getHostSecretsPath(), onRefused, noFollowRoot = (0, import_node_path11.dirname)(path33), io2 = DISK_HOST_SECRET_IO` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454075-454085](../../../../../reference/runtime/host-main.cjs#L454075-L454085) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:454075

Calls written directly in this body: `.catch`, `loadMachineId`, `machineIdLoads.get`, `machineIdLoads.set`.

Assignment or increment targets: `load2`.

SHA-256 of the source span: `7ce5edfbdcc2546f5afda6b498e8bcf804950fb1b5e5759b32e619c1235a545c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
