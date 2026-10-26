# `createSendToAgentTool`

[English](README.en.md) · [Português (Brasil)](README.md)

[Component: integrations](../../components/integrations/README.en.md) · [Index](../../README.en.md)

**Primary source:** [host-main.cjs:757386-757434](../../../reference/runtime/host-main.cjs#L757386-L757434). Static analysis of the original snapshot; names preserved from the bundle.

## Contract

`createSendToAgentTool(deps)` creates the tool for messaging another persistent bot. It is distinct from creating a subagent and from messaging a person.

## Algorithm

Validates against the schema, obtains its own ID, and rejects self-messaging. Resolves an optional task thread and image attachments. Associates a delivery report with the call. Calls the `sendToAgent` port with the destination ID, message, images when present, priority, and optional task. Catches failures to record them and rethrows. A legacy string return is returned directly; a structured return records the destination, delivery, and failure category and returns an ack.

## Priority

The schema requires `priority`: true means actionable work that wakes the destination; false means information retained for the next turn. Groups have their own declared semantics. The wrapper carries priority but does not implement the recipient's queue by itself.

## Identity and state

Task validation prevents sending to a nonexistent/completed thread outside the permitted exception. A documentary task only correlates the flow; it does not change the recipient bot's ID. Port success, the ack, and the recipient's future response are different events.

## Limit

Remote delivery, retries, and idempotency must be verified in the port. The function does not consult history to resolve a person by name or authorize external communication on the user's behalf.
