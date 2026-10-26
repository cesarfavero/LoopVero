# `runHostMain`

[English](README.en.md) · [Português (Brasil)](README.md)

**Primary source:** [host-main.cjs:786935–787050](../../../reference/runtime/host-main.cjs#L786935-L787050).

**Component:** [bootstrap](../../components/bootstrap/README.en.md). **Evidence:** compiled implementation inspected statically; the original was not executed.

## Responsibility

Turn the Node process into the Sand Host: lock-based mutual exclusion, environment, extensions, gateway, and readiness announcement. This is neither the function that selects proactive tasks nor the inference loop.

## Input and output

Uses process arguments and environment. The auxiliary `--box-copy-in` mode finishes before the server. On the normal path, it resolves after starting the host, gateway, and discovery; listeners continue keeping the process alive. A fatal failure is reported and exits with code 1.

## Algorithm

1. Handle copy mode with a fail-closed result.
2. Install crash guards and acquire the host directory lock.
3. Read `SandHostEnvironment`, construct `SandHost`, and connect reporters.
4. Call `host.start` with the `beforeResumeOwnership` hook.
5. In the hook, resolve configuration and open the gateway with the final API, authentication, TLS, and bridges.
6. Install shutdown handlers before releasing the hook.
7. Await startup, write discovery information, and trigger the `box ready` report.
8. On error, write a marker with the stage, flush, release the lock, and exit.

## Why the order matters

The gateway API depends on extensions that have already been initialized. Ownership resumption, however, only occurs after the gateway hook. Changing this order could announce ownership before a transport exists to accept connections. This consequence follows from the observed sequence, not from a deployment test.

## State and failures

`stage` distinguishes `host_start`, `gateway`, and `discovery` in the fatal marker. `gatewayStarted` carries the server and its configuration from the hook to the final section. The lock is released both on error and during normal shutdown. The relationship between this process and the original remote infrastructure still depends on external composition.
