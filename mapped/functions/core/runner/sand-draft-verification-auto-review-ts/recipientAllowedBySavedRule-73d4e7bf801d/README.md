# `recipientAllowedBySavedRule`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-draft-verification-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-draft-verification-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:756004-756008](../../../../../../reference/runtime/host-main.cjs#L756004-L756008) | `FunctionDeclaration` | não | `decision` |
| [evaluation:541879-541883](../../../../../../reference/runtime/sand-eval-runner.cjs#L541879-L541883) | `FunctionDeclaration` | não | `decision` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756004-756008](../../../../../../reference/runtime/host-main.cjs#L756004-L756008) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541879-541883](../../../../../../reference/runtime/sand-eval-runner.cjs#L541879-L541883) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:756004

Chamadas escritas diretamente neste corpo: `decision.appliedRules.some`.

SHA-256 do trecho: `4313d7a1d9ce138f5c399e0087d4d5f51a43ee1f0a8368f44ecf6f70ff412a98`.

### evaluation:541879

Chamadas escritas diretamente neste corpo: `decision.appliedRules.some`.

SHA-256 do trecho: `4313d7a1d9ce138f5c399e0087d4d5f51a43ee1f0a8368f44ecf6f70ff412a98`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
