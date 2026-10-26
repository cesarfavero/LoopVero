# `sandAutoReviewAppliedRules`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-auto-review-classifier-run.ts` · [README do módulo](../../../../../modules/core/runner/sand-auto-review-classifier-run-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:693613-693620](../../../../../../reference/runtime/host-main.cjs#L693613-L693620) | `FunctionDeclaration` | não | `rules` |
| [evaluation:490849-490856](../../../../../../reference/runtime/sand-eval-runner.cjs#L490849-L490856) | `FunctionDeclaration` | não | `rules` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693613-693620](../../../../../../reference/runtime/host-main.cjs#L693613-L693620) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:490849-490856](../../../../../../reference/runtime/sand-eval-runner.cjs#L490849-L490856) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:693613

Chamadas escritas diretamente neste corpo: `rules.flatMap`.

SHA-256 do trecho: `f5dbd72a76931ca3ec0e1a9f21cea4781e9d77cb109f8d7b5b2bc2b330e34365`.

### evaluation:490849

Chamadas escritas diretamente neste corpo: `rules.flatMap`.

SHA-256 do trecho: `a55f695561fdf152761bc633cf1f982256d10e0e9c20e853dbe6b436b4b63319`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
