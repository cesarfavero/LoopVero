# `reviewSandSubagentAction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/sand-subagent-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-subagent-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780820-780823](../../../../../../reference/runtime/host-main.cjs#L780820-L780823) | `FunctionDeclaration` | sim | `args` |
| [evaluation:581168-581171](../../../../../../reference/runtime/sand-eval-runner.cjs#L581168-L581171) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780820-780823](../../../../../../reference/runtime/host-main.cjs#L780820-L780823) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:581168-581171](../../../../../../reference/runtime/sand-eval-runner.cjs#L581168-L581171) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:780820

Chamadas escritas diretamente neste corpo: `runSandAutoReviewFlow`.

SHA-256 do trecho: `006c078166e39446e84883367a07eb2387a3f8ed0e84e41aa74de54c4813a6de`.

### evaluation:581168

Chamadas escritas diretamente neste corpo: `runSandAutoReviewFlow`.

SHA-256 do trecho: `006c078166e39446e84883367a07eb2387a3f8ed0e84e41aa74de54c4813a6de`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
