# `describeSandMcpAutoReviewAction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-auto-review-summaries.ts` · [README do módulo](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:491185-491200](../../../../../../reference/runtime/sand-eval-runner.cjs#L491185-L491200) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:491185-491200](../../../../../../reference/runtime/sand-eval-runner.cjs#L491185-L491200) | 3 | 0 | 0 | 3 | 0 | 0 |

### evaluation:491185

Chamadas escritas diretamente neste corpo: `.trim`, `args.description.replace`, `compact`, `description9.replace`, `fallbackSandMcpAutoReviewSummary`, `mentionsServer`.

SHA-256 do trecho: `a6893c58452259f437d9e2757e9506193a72ce55cc3f811806e0e2c8b6c017a9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
