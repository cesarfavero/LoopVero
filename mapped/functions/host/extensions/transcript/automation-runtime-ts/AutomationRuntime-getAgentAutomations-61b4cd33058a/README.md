# `AutomationRuntime.getAgentAutomations`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/transcript/automation-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/automation-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:734243-734249](../../../../../../../reference/runtime/host-main.cjs#L734243-L734249) | `method` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734243-734249](../../../../../../../reference/runtime/host-main.cjs#L734243-L734249) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:734243

Chamadas escritas diretamente neste corpo: `.slice`, `active.automations.list`, `this.tm.sessionStore.listAgentAutomations`.

SHA-256 do trecho: `8ac2276783c0f8db5b372ad41ef00d385d40a57fdc0960d97b20fd9a858b29a9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
