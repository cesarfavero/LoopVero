# `src/shared/errors/bounded.ts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/errors/bounded.ts` · [README do módulo](../../../../../modules/shared/errors/bounded-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:155199-155285](../../../../../../reference/runtime/host-main.cjs#L155199-L155285) | `FunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:155199-155285](../../../../../../reference/runtime/host-main.cjs#L155199-L155285) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:155199

Chamadas escritas diretamente neste corpo: `BOUNDED_TELEMETRY_ERROR_NAMES.flatMap`, `Math.max`, `brandedEnumOf`, `new RegExp`.

Alvos de atribuição ou incremento: `BOUNDED_TELEMETRY_ERROR_NAMES`, `BOUNDED_TELEMETRY_TOKENS`, `CAPPED_TEXT_CAPS`, `CAPPED_TEXT_CEILING`, `CLIENT_FAILURE_TOKEN`, `CONNECT_CODE_FALLBACK`, `CONNECT_CODE_TAGS`, `DNS_LABEL`, `ERROR_CLASS`, `ERROR_TAG`, `HOST`, `LOCALE`, `OPAQUE_ID`, `SAND_ERRNO_FALLBACK`, `SAND_ERRNO_TAGS`, `VERSION`, `brandedConnectCode`, `brandedErrno`, `brandedTelemetryToken`.

SHA-256 do trecho: `00a515a2cdd7f8804074eecf372d749e2d24fbcb2c6889aac1c21fc3f1e3f980`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
