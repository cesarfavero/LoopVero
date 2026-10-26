# `ToolDecisionAudit.recordLocalToolAuthorization`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/action-audit/tool-decision-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:489872-489880](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489872-L489880) | `method` | não | `toolCallId, authorization` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489872-489880](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489872-L489880) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:489872

Chamadas escritas diretamente neste corpo: `this.recordHumanAnswer`.

SHA-256 do trecho: `61c2a1034a3c3a6b475ec77e039d7a5855f6b29b91f6c967195818c187fb1a18`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
