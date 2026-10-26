# `proposeDraftAllowRule`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-draft-verification-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-draft-verification-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755969-755978](../../../../../../reference/runtime/host-main.cjs#L755969-L755978) | `FunctionDeclaration` | sim | `args` |
| [evaluation:541844-541853](../../../../../../reference/runtime/sand-eval-runner.cjs#L541844-L541853) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755969-755978](../../../../../../reference/runtime/host-main.cjs#L755969-L755978) | 2 | 0 | 1 | 3 | 1 | 1 |
| [evaluation:541844-541853](../../../../../../reference/runtime/sand-eval-runner.cjs#L541844-L541853) | 2 | 0 | 1 | 3 | 1 | 1 |

### host:755969

Chamadas escritas diretamente neste corpo: `proposeWithClassifier`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `4a83a3997794a1edabb7e4b6638b1ea1d0e18b0010ad04e5c921f9fdaa1aac9c`.

### evaluation:541844

Chamadas escritas diretamente neste corpo: `proposeWithClassifier`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `ec0c4fd974f4e636bae37a7fe571d41b01adc5f03b2273ed8cdb540852812b79`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
