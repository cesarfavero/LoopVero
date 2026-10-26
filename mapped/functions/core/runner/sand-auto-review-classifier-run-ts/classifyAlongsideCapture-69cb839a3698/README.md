# `classifyAlongsideCapture`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-auto-review-classifier-run.ts` · [README do módulo](../../../../../modules/core/runner/sand-auto-review-classifier-run-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:693643-693657](../../../../../../reference/runtime/host-main.cjs#L693643-L693657) | `FunctionDeclaration` | sim | `ctx, capture, classify4` |
| [evaluation:490879-490893](../../../../../../reference/runtime/sand-eval-runner.cjs#L490879-L490893) | `FunctionDeclaration` | sim | `ctx, capture, classify4` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693643-693657](../../../../../../reference/runtime/host-main.cjs#L693643-L693657) | 1 | 0 | 2 | 1 | 1 | 0 |
| [evaluation:490879-490893](../../../../../../reference/runtime/sand-eval-runner.cjs#L490879-L490893) | 1 | 0 | 2 | 1 | 1 | 0 |

### host:693643

Chamadas escritas diretamente neste corpo: `.then`, `cancelClassifier`, `classify4`, `ctx.withCancel`.

Alvos de lançamento explícito: `outcome.error`.

SHA-256 do trecho: `add76e6be35dd523ba986b78f24f021566e1bb3d0824a7afc6701a4cc5f797e1`.

### evaluation:490879

Chamadas escritas diretamente neste corpo: `.then`, `cancelClassifier`, `classify4`, `ctx.withCancel`.

Alvos de lançamento explícito: `outcome.error`.

SHA-256 do trecho: `7c27e7ee4421f9780ef4459beee3d282b259be5746e8010abf14d59743c9ea1d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
