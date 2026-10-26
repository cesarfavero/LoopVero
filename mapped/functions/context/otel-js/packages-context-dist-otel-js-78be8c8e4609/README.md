# `../packages/context/dist/otel.js`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/otel.js` · [README do módulo](../../../../modules/context/otel-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225873-225894](../../../../../reference/runtime/host-main.cjs#L225873-L225894) | `FunctionExpression` | não | `(nenhum)` |
| [evaluation:2387-2408](../../../../../reference/runtime/sand-eval-runner.cjs#L2387-L2408) | `FunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225873-225894](../../../../../reference/runtime/host-main.cjs#L225873-L225894) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:2387-2408](../../../../../reference/runtime/sand-eval-runner.cjs#L2387-L2408) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:225873

Chamadas escritas diretamente neste corpo: `Symbol`, `createKey`, `init_core3`, `init_esm4`.

Alvos de atribuição ou incremento: `DisposableSpan`, `INHERITABLE_SPAN_ATTRIBUTES_KEY`, `ROOT_SPAN_KEY`, `ROOT_SPAN_START_MS_KEY`, `SPAN_KEY2`, `SUPPRESS_CHILD_SPANS_KEY`.

SHA-256 do trecho: `183be7412bb5bbd3ac78ec91adcb2ceb7001c8ed1aedf23b5aec8d87600e6bfb`.

### evaluation:2387

Chamadas escritas diretamente neste corpo: `Symbol`, `createKey`, `init_core`, `init_esm`.

Alvos de atribuição ou incremento: `DisposableSpan`, `INHERITABLE_SPAN_ATTRIBUTES_KEY`, `ROOT_SPAN_KEY`, `ROOT_SPAN_START_MS_KEY`, `SPAN_KEY2`, `SUPPRESS_CHILD_SPANS_KEY`.

SHA-256 do trecho: `1b85aed67d0048be2f1278da60544b59b8747e2ed71cb969c4ad055557600aa9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
