# `AutomationRuntime.enqueueAutomationMutation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/transcript/automation-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/automation-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:734078-734112](../../../../../../../reference/runtime/host-main.cjs#L734078-L734112) | `method` | não | `{     agentId,     activeMutation,     inactiveMutation   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734078-734112](../../../../../../../reference/runtime/host-main.cjs#L734078-L734112) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:734078

Chamadas escritas diretamente neste corpo: `this.enqueueAutomationLifecycleMutation`.

SHA-256 do trecho: `5d81e6175c854d0a71ab598680b362c08c72ca660c1d80f9126ed8fabbd28fc4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
