# `../packages/context/dist/logger.js`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/logger.js` · [README do módulo](../../../../modules/context/logger-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225750-225763](../../../../../reference/runtime/host-main.cjs#L225750-L225763) | `FunctionExpression` | não | `(nenhum)` |
| [evaluation:2238-2251](../../../../../reference/runtime/sand-eval-runner.cjs#L2238-L2251) | `FunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225750-225763](../../../../../reference/runtime/host-main.cjs#L225750-L225763) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:2238-2251](../../../../../reference/runtime/sand-eval-runner.cjs#L2238-L2251) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:225750

Chamadas escritas diretamente neste corpo: `Symbol`, `createKey`, `createPrettyTerminalLoggerBackend`, `init_dist5`.

Alvos de atribuição ou incremento: `DEFAULT_INDENT`, `DEFAULT_MAX_ARRAY_LENGTH`, `DEFAULT_MAX_DEPTH`, `DEFAULT_MAX_ENTRIES`, `DEFAULT_MAX_STRING_LENGTH`, `defaultLoggerBackend`, `defaultLoggerBackendImpl`, `loggerKey`.

SHA-256 do trecho: `5573a74411b6ca4182da16de73a739e783bb068542328f36bfc820e01469e92a`.

### evaluation:2238

Chamadas escritas diretamente neste corpo: `Symbol`, `createKey`, `createPrettyTerminalLoggerBackend`, `init_dist`.

Alvos de atribuição ou incremento: `DEFAULT_INDENT`, `DEFAULT_MAX_ARRAY_LENGTH`, `DEFAULT_MAX_DEPTH`, `DEFAULT_MAX_ENTRIES`, `DEFAULT_MAX_STRING_LENGTH`, `defaultLoggerBackend`, `defaultLoggerBackendImpl`, `loggerKey`.

SHA-256 do trecho: `cf927e6d777b99cc9abe696308d2404ef0fbc7a7f26c5c9924f6e67490ce7c34`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
