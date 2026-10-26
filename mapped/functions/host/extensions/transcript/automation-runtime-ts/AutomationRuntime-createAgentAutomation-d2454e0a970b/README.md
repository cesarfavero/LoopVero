# `AutomationRuntime.createAgentAutomation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/transcript/automation-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/automation-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:734266-734275](../../../../../../../reference/runtime/host-main.cjs#L734266-L734275) | `method` | não | `agentId, spec, provenance = "user"` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734266-734275](../../../../../../../reference/runtime/host-main.cjs#L734266-L734275) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:734266

Chamadas escritas diretamente neste corpo: `this.enqueueAutomationMutation`.

SHA-256 do trecho: `b55c4e84711c389908ce74900385e0477402c1f702b355f69f9c8ae9157c5417`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
