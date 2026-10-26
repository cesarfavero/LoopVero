# `normalizeSandBrowserExactActionArgs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-browser-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-browser-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699708-699719](../../../../../../reference/runtime/host-main.cjs#L699708-L699719) | `FunctionDeclaration` | não | `raw` |
| [evaluation:513464-513475](../../../../../../reference/runtime/sand-eval-runner.cjs#L513464-L513475) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699708-699719](../../../../../../reference/runtime/host-main.cjs#L699708-L699719) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513464-513475](../../../../../../reference/runtime/sand-eval-runner.cjs#L513464-L513475) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:699708

Chamadas escritas diretamente neste corpo: `assertBounded`, `raw.values.join`, `rejectOversizedField2`.

SHA-256 do trecho: `5605a13a13c9ac20b77218296f08c02fd3ee2abf60245e33db79b30de3f959a5`.

### evaluation:513464

Chamadas escritas diretamente neste corpo: `assertBounded`, `raw.values.join`, `rejectOversizedField2`.

SHA-256 do trecho: `5605a13a13c9ac20b77218296f08c02fd3ee2abf60245e33db79b30de3f959a5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
