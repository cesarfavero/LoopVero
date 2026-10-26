# `AutomationRuntime.recordInactiveAutomationChanges`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/transcript/automation-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/automation-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:734113-734153](../../../../../../../reference/runtime/host-main.cjs#L734113-L734153) | `method` | não | `{     agentId,     before,     after,     source   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734113-734153](../../../../../../../reference/runtime/host-main.cjs#L734113-L734153) | 3 | 2 | 0 | 0 | 0 | 0 |

### host:734113

Chamadas escritas diretamente neste corpo: `current2.has`, `diffAutomationAction`, `previous.get`, `snapshotAutomations`, `this.emitAutomationLifecycle`, `this.lastKnownAutomations.get`, `this.lastKnownAutomations.set`.

SHA-256 do trecho: `28c9d47b1afa14e57033c241527a2472d6818122640adbc82eb3622197a4185e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
