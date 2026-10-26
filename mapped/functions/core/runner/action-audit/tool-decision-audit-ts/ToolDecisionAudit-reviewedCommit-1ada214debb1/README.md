# `ToolDecisionAudit.reviewedCommit`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/action-audit/tool-decision-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:489858-489860](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489858-L489860) | `method` | não | `toolCallId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489858-489860](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489858-L489860) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:489858

Chamadas escritas diretamente neste corpo: `this.reviewedCommits.get`.

SHA-256 do trecho: `c53ca67fd353fc1792e7db8d233edfd9cfd05578c1b39ec8915a95ad5c3aa354`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
