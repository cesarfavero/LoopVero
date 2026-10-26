# `runClassifier`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-computer-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699480-699501](../../../../../../reference/runtime/host-main.cjs#L699480-L699501) | `FunctionDeclaration` | sim | `ctx, args, classifierMode, buildTarget` |
| [evaluation:513236-513257](../../../../../../reference/runtime/sand-eval-runner.cjs#L513236-L513257) | `FunctionDeclaration` | sim | `ctx, args, classifierMode, buildTarget` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699480-699501](../../../../../../reference/runtime/host-main.cjs#L699480-L699501) | 1 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:513236-513257](../../../../../../reference/runtime/sand-eval-runner.cjs#L513236-L513257) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:699480

Chamadas escritas diretamente neste corpo: `options2.devBlockState.consume`, `runSandAutoReviewClassifier`.

SHA-256 do trecho: `1e63cba469ea25e175b1568ed4a42ebeb5e3ed6b2d90b35032432c6d99ff67aa`.

### evaluation:513236

Chamadas escritas diretamente neste corpo: `options2.devBlockState.consume`, `runSandAutoReviewClassifier`.

SHA-256 do trecho: `1e63cba469ea25e175b1568ed4a42ebeb5e3ed6b2d90b35032432c6d99ff67aa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
