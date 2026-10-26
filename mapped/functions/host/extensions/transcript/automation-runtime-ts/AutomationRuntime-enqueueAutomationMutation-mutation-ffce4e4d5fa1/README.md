# `AutomationRuntime.enqueueAutomationMutation/mutation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/transcript/automation-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/automation-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:734085-734110](../../../../../../../reference/runtime/host-main.cjs#L734085-L734110) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734085-734110](../../../../../../../reference/runtime/host-main.cjs#L734085-L734110) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:734085

Chamadas escritas diretamente neste corpo: `activeMutation`, `inactiveMutation`, `this.publishAutomations`, `this.recordAutomationChangeEvents`, `this.recordInactiveAutomationChanges`, `this.tm.sessionStore.listAgentAutomations`.

Alvos de atribuição ou incremento: `after`.

SHA-256 do trecho: `02a7a43e157e7308e4dff76ae6c106694eb92148ca76aa19f855f5616eca859d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
