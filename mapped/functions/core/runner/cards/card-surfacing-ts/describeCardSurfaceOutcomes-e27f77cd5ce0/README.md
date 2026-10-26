# `describeCardSurfaceOutcomes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/cards/card-surfacing.ts` · [README do módulo](../../../../../../modules/core/runner/cards/card-surfacing-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763907-763915](../../../../../../../reference/runtime/host-main.cjs#L763907-L763915) | `FunctionDeclaration` | não | `rows` |
| [evaluation:557281-557289](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557281-L557289) | `FunctionDeclaration` | não | `rows` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763907-763915](../../../../../../../reference/runtime/host-main.cjs#L763907-L763915) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:557281-557289](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557281-L557289) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:763907

Chamadas escritas diretamente neste corpo: `.join`, `rows.flatMap`, `surfaceDisplayName`, `surfaced.map`, `surfaced.some`.

SHA-256 do trecho: `5c7da5149c288e40f118b7b637dbaf2a99fb88c5f5028f1478ccf335b06ec812`.

### evaluation:557281

Chamadas escritas diretamente neste corpo: `.join`, `rows.flatMap`, `surfaceDisplayName`, `surfaced.map`, `surfaced.some`.

SHA-256 do trecho: `5c7da5149c288e40f118b7b637dbaf2a99fb88c5f5028f1478ccf335b06ec812`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
