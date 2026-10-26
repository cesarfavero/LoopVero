# `watchStdioSignInDuring`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/stdio-sign-in-watch.ts` · [README do módulo](../../../../../modules/core/mcp/stdio-sign-in-watch-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:579649-579679](../../../../../../reference/runtime/sand-eval-runner.cjs#L579649-L579679) | `FunctionDeclaration` | sim | `call, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:579649-579679](../../../../../../reference/runtime/sand-eval-runner.cjs#L579649-L579679) | 0 | 0 | 2 | 1 | 0 | 0 |

### evaluation:579649

Chamadas escritas diretamente neste corpo: `.catch`, `Date.now`, `Promise.race`, `delayWith`, `new AbortController`, `settled.abort`, `stdioSignInProbes`, `watch2.finally`.

Alvos de atribuição ou incremento: `result`.

SHA-256 do trecho: `df9637444ad20c00f3efe01a16e6d6f9b72fe8ad7fa924b8aebbf22a25878853`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
