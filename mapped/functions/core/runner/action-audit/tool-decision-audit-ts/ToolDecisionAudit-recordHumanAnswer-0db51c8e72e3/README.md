# `ToolDecisionAudit.recordHumanAnswer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/action-audit/tool-decision-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:489881-489890](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489881-L489890) | `method` | não | `toolCallId, answer` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489881-489890](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489881-L489890) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:489881

Chamadas escritas diretamente neste corpo: `call.decisions.push`, `call.decisions.some`, `this.touch`.

SHA-256 do trecho: `e94955c4e8e6fbc537711cc49cd7afbd9cae3c11c3fcf37629f1b8e5c2907fb2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
