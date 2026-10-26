# `AutomationRuntime.createAgentAutomation/activeMutation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/transcript/automation-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/automation-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:734269-734272](../../../../../../../reference/runtime/host-main.cjs#L734269-L734272) | `ArrowFunctionExpression` | não | `active` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734269-734272](../../../../../../../reference/runtime/host-main.cjs#L734269-L734272) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:734269

Chamadas escritas diretamente neste corpo: `.slice`, `active.automations.list`, `active.automations.upsert`.

SHA-256 do trecho: `3399eca842146eac08ceed7781640d731312b21a42eabb3f244f5a7c260a262f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
