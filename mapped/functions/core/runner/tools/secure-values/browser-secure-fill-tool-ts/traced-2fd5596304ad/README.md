# `traced`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/secure-values/browser-secure-fill-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/browser-secure-fill-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766786-766793](../../../../../../../../reference/runtime/host-main.cjs#L766786-L766793) | `FunctionDeclaration` | sim | `ctx, name18, run` |
| [evaluation:562305-562312](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562305-L562312) | `FunctionDeclaration` | sim | `ctx, name18, run` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766786-766793](../../../../../../../../reference/runtime/host-main.cjs#L766786-L766793) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:562305-562312](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562305-L562312) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:766786

Chamadas escritas diretamente neste corpo: `.end`, `ctx.withName`, `getSpan2`, `run`, `withSpan`.

SHA-256 do trecho: `dc599b0e8a24b9a29a8e2c64656449e20be3b47430052abf0cdf0ee36411057d`.

### evaluation:562305

Chamadas escritas diretamente neste corpo: `.end`, `ctx.withName`, `getSpan2`, `run`, `withSpan`.

SHA-256 do trecho: `dc599b0e8a24b9a29a8e2c64656449e20be3b47430052abf0cdf0ee36411057d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
