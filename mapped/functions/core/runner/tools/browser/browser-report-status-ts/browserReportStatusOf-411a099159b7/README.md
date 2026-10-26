# `browserReportStatusOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/browser-report-status.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/browser-report-status-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:535204-535218](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L535204-L535218) | `FunctionDeclaration` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535204-535218](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L535204-L535218) | 5 | 1 | 0 | 2 | 0 | 0 |

### evaluation:535204

Chamadas escritas diretamente neste corpo: `FENCE2.exec`, `NOT_TOP_LEVEL.test`, `STATUS_LINE.exec`, `[computed].toLowerCase`, `report.split`.

Alvos de atribuição ou incremento: `openFence`.

SHA-256 do trecho: `01b5a7a286a2271f5379170eee8efac038be207c945b27c1caceea7f117a416a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
