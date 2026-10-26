# `parseDraftSender`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-connector-results.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732720-732723](../../../../../../../reference/runtime/host-main.cjs#L732720-L732723) | `FunctionDeclaration` | não | `resultText` |
| [evaluation:540242-540245](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540242-L540245) | `FunctionDeclaration` | não | `resultText` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732720-732723](../../../../../../../reference/runtime/host-main.cjs#L732720-L732723) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540242-540245](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540242-L540245) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:732720

Chamadas escritas diretamente neste corpo: `bareEmailAddress`, `parseDraftConnectorRecord`.

SHA-256 do trecho: `5bd945348dafe7439b44af28d931fb309a578c7b20620bd0c52739b230ed2fa7`.

### evaluation:540242

Chamadas escritas diretamente neste corpo: `bareEmailAddress`, `parseDraftConnectorRecord`.

SHA-256 do trecho: `5bd945348dafe7439b44af28d931fb309a578c7b20620bd0c52739b230ed2fa7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
