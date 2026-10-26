# `ToolDecisionAudit.decide`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/action-audit/tool-decision-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:489807-489816](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489807-L489816) | `method` | não | `toolCallId, verdict` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489807-489816](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489807-L489816) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:489807

Chamadas escritas diretamente neste corpo: `call.decisions.find`, `call.decisions.push`, `this.touch`.

SHA-256 do trecho: `8ec20b6871b3285f2f7e36c7d33ced21ccce0a7e0f488dbb43ad58aa3b74141a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
