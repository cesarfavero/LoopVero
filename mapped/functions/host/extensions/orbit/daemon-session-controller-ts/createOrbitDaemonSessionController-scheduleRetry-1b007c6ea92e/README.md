# `createOrbitDaemonSessionController/scheduleRetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-session-controller.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:706023-706053](../../../../../../../reference/runtime/host-main.cjs#L706023-L706053) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706023-706053](../../../../../../../reference/runtime/host-main.cjs#L706023-L706053) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:706023

Chamadas escritas diretamente neste corpo: `delay5.elapsed.then`, `deps.policies.reconciliationRetry.schedule`.

Alvos de atribuição ou incremento: `state.reconciliationRequested`, `state.retryAttempt`, `state.scheduledWake`.

SHA-256 do trecho: `d2132d916a10038cd0baf0dd001d1d2f74fc4f8978501928f7dffaa0c12484de`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
