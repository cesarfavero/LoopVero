# `AutomationRuntime.setAgentAutomationEnabled`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/transcript/automation-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/automation-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:734256-734265](../../../../../../../reference/runtime/host-main.cjs#L734256-L734265) | `method` | não | `agentId, automationId, isEnabled` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734256-734265](../../../../../../../reference/runtime/host-main.cjs#L734256-L734265) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:734256

Chamadas escritas diretamente neste corpo: `this.enqueueAutomationMutation`.

SHA-256 do trecho: `2a392b251be96a3b1565bf037495e6da1dd37c80803e93b03f6bf415fcce9dee`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
