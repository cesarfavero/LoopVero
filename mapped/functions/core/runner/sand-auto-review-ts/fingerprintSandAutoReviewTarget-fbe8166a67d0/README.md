# `fingerprintSandAutoReviewTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:694170-694172](../../../../../../reference/runtime/host-main.cjs#L694170-L694172) | `FunctionDeclaration` | não | `target` |
| [evaluation:490105-490107](../../../../../../reference/runtime/sand-eval-runner.cjs#L490105-L490107) | `FunctionDeclaration` | não | `target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:694170-694172](../../../../../../reference/runtime/host-main.cjs#L694170-L694172) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:490105-490107](../../../../../../reference/runtime/sand-eval-runner.cjs#L490105-L490107) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:694170

Chamadas escritas diretamente neste corpo: `.digest`, `.update`, `JSON.stringify`.

SHA-256 do trecho: `ca21dd326d2c374ee40dada8a452a0e1c4f95ca811e449665c9fa7be1dee630c`.

### evaluation:490105

Chamadas escritas diretamente neste corpo: `.digest`, `.update`, `JSON.stringify`.

SHA-256 do trecho: `958a73232b8f16acfe2bde9e4efaa8fd7ea083884fd75af42335da4649259ac9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
