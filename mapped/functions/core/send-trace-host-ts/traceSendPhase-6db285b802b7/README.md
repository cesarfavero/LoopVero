# `traceSendPhase`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `core/send-trace-host.ts` · [README do módulo](../../../../modules/core/send-trace-host-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:528791-528828](../../../../../reference/runtime/sand-eval-runner.cjs#L528791-L528828) | `FunctionDeclaration` | sim | `ctx, name18, fn` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528791-528828](../../../../../reference/runtime/sand-eval-runner.cjs#L528791-L528828) | 3 | 0 | 4 | 4 | 1 | 4 |

### evaluation:528791

Chamadas escritas diretamente neste corpo: `String`, `createContext`, `ctx.withName`, `errorLogTag`, `fn`, `getSpan2`, `new Error`, `process.stderr.write`, `span.end`, `span.recordException`, `span.setStatus`, `withSpan`.

Alvos de atribuição ou incremento: `childCtx`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `72b5464d9922b29fb6ad6c1e84111b2189e53da9852a084d3b5c34f58904c002`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
