# `stableAutomationId`

## Para que serve

Converte a identidade local de uma rotina, que é relativa a um agente, em um identificador remoto estável. [Implementação](../../../reference/runtime/host-main.cjs#L505708-L505718).

## Algoritmo

1. Concatena `agentId`, um byte NUL e `localId`.
2. Converte a concatenação em `Buffer`.
3. Calcula SHA-256 e obtém o texto hexadecimal.
4. Usa os primeiros 32 dígitos para o corpo de um UUID formatado.
5. Fixa o nibble de versão em `5`.
6. Ajusta o nibble de variante com `(parseInt(hex[16], 16) & 3) | 8`.
7. Insere os hífens na forma 8-4-4-4-12.

A função devolve string e não acessa banco, rede ou relógio. O separador NUL diferencia pares que poderiam colidir por concatenação simples, como `ab`/`c` e `a`/`bc`.

## Cuidado de compatibilidade

Embora o texto final tenha versão `5`, esta implementação **não deve ser substituída por uma chamada genérica de UUID v5**: o corpo é derivado por SHA-256 da concatenação indicada, sem namespace UUID explícito. Uma biblioteca que use outro algoritmo produzirá outro ID. Preservar exatamente essa regra é necessário para compatibilidade de referências.

A estabilidade vale para o par de entradas: mudar o nome exibido de uma rotina não altera o ID quando o `localId` permanece; mudar o agente ou ID local muda a entrada do hash. O hash não é autorização e não precisa ser mantido secreto.

## Callers recuperados

| Caller | Uso |
| --- | --- |
| `runSandAutomationNowInSession` | Endereçar o workflow remoto em `testAutomation` |
| `AutomationRuntime.emitAutomationLifecycle` | Correlacionar telemetria de lifecycle |
| Runtime de turno | Atribuir `automationId` à execução |

[Execução manual](../../../reference/runtime/host-main.cjs#L505725-L505746), [lifecycle](../../../reference/runtime/host-main.cjs#L734166-L734226), [atribuição no runner](../../../reference/runtime/sand-eval-runner.cjs#L591676-L591687).

## Limites

Não gera `runId` nem `requestId`. Também não garante idempotência de uma ação: apenas fornece uma identidade reproduzível. A decisão de não executar a mesma run duas vezes pertence aos stores e ao scheduler remoto.

[Automações](../../components/automations/README.md) · [Execução em sessão](../runSandAutomationNowInSession/README.md).
