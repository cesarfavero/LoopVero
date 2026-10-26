# `parseCreatedDraftId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-connector-results.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732818-732828](../../../../../../../reference/runtime/host-main.cjs#L732818-L732828) | `FunctionDeclaration` | não | `resultText` |
| [evaluation:540340-540350](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540340-L540350) | `FunctionDeclaration` | não | `resultText` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732818-732828](../../../../../../../reference/runtime/host-main.cjs#L732818-L732828) | 5 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:540340-540350](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540340-L540350) | 5 | 0 | 0 | 4 | 0 | 0 |

### host:732818

Chamadas escritas diretamente neste corpo: `parseDraftConnectorJson`, `resultText.trim`.

SHA-256 do trecho: `74dc0409d704f9a995901f2005e20a70376e9cea0ef7328262482954cd529779`.

### evaluation:540340

Chamadas escritas diretamente neste corpo: `parseDraftConnectorJson`, `resultText.trim`.

SHA-256 do trecho: `f728ce55adf5633218d09a6fa733dac0bf3d072a47205e0202798d9e6f79e992`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
