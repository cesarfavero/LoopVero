# `spanTraceparent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/rpc-tracing.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/rpc-tracing-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:224825-224830](../../../../../../../reference/runtime/host-main.cjs#L224825-L224830) | `FunctionDeclaration` | não | `span` |
| [evaluation:511858-511863](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511858-L511863) | `FunctionDeclaration` | não | `span` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:224825-224830](../../../../../../../reference/runtime/host-main.cjs#L224825-L224830) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:511858-511863](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511858-L511863) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:224825

Chamadas escritas diretamente neste corpo: `span.spanContext`, `trace.isSpanContextValid`.

SHA-256 do trecho: `c0d6832859f49807ff89de8ebe2d5eb44c865dbf24cef1debf3b148a96b27caf`.

### evaluation:511858

Chamadas escritas diretamente neste corpo: `span.spanContext`, `trace.isSpanContextValid`.

SHA-256 do trecho: `c0d6832859f49807ff89de8ebe2d5eb44c865dbf24cef1debf3b148a96b27caf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
