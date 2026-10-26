# `classify2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-draft-verification-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-draft-verification-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755874-755890](../../../../../../reference/runtime/host-main.cjs#L755874-L755890) | `FunctionDeclaration` | não | `ctx, route, options2, toolCallId, mode` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755874-755890](../../../../../../reference/runtime/host-main.cjs#L755874-L755890) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:755874

Chamadas escritas diretamente neste corpo: `runSandAutoReviewClassifier`.

SHA-256 do trecho: `24ebffb1309d84c069dd5f30cd2d2b93a3db80d7b4380d93ddead8a102d42bb3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
