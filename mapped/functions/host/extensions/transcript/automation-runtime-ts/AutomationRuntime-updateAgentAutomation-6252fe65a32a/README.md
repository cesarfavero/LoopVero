# `AutomationRuntime.updateAgentAutomation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/transcript/automation-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/automation-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:734276-734285](../../../../../../../reference/runtime/host-main.cjs#L734276-L734285) | `method` | não | `agentId, automationId, spec` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734276-734285](../../../../../../../reference/runtime/host-main.cjs#L734276-L734285) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:734276

Chamadas escritas diretamente neste corpo: `this.enqueueAutomationMutation`.

SHA-256 do trecho: `c6868583c2700c08afb5ed898dbd062eae3906debdc41955011a039f26ad34c6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
