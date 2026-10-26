# `AutomationRuntime.recordAutomationChangeEvents`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/transcript/automation-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/automation-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:734012-734056](../../../../../../../reference/runtime/host-main.cjs#L734012-L734056) | `method` | não | `session, source` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734012-734056](../../../../../../../reference/runtime/host-main.cjs#L734012-L734056) | 6 | 2 | 0 | 3 | 0 | 0 |

### host:734012

Chamadas escritas diretamente neste corpo: `current2.has`, `diffAutomationAction`, `previous.get`, `session.automations.listDefinitions`, `snapshotAutomations`, `this.emitAutomationChange`, `this.lastKnownAutomations.get`, `this.lastKnownAutomations.set`, `this.tm.sessions.isAgentGone`.

SHA-256 do trecho: `7388a127a2e9ebf814e97d5ddc0b6ee8694df33a9b5db8944d00e8f48f9c609c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
