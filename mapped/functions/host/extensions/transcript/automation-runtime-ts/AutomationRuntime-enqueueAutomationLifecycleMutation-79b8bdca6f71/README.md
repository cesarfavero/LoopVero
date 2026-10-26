# `AutomationRuntime.enqueueAutomationLifecycleMutation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/transcript/automation-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/automation-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:734057-734062](../../../../../../../reference/runtime/host-main.cjs#L734057-L734062) | `method` | não | `{     agentId,     mutation   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734057-734062](../../../../../../../reference/runtime/host-main.cjs#L734057-L734062) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:734057

Chamadas escritas diretamente neste corpo: `this.runOnPerAgentChain`.

SHA-256 do trecho: `6f6ac87081d77280dc0a2a8f3df283ae2064ee86af6648cff4089039d7f0aa7a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
