# `recordCompletedSpanIfParented`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/otel.js` · [README do módulo](../../../../modules/context/otel-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225861-225870](../../../../../reference/runtime/host-main.cjs#L225861-L225870) | `FunctionDeclaration` | não | `ctx, options2, endTime` |
| [evaluation:2375-2384](../../../../../reference/runtime/sand-eval-runner.cjs#L2375-L2384) | `FunctionDeclaration` | não | `ctx, options2, endTime` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225861-225870](../../../../../reference/runtime/host-main.cjs#L225861-L225870) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:2375-2384](../../../../../reference/runtime/sand-eval-runner.cjs#L2375-L2384) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:225861

Chamadas escritas diretamente neste corpo: `getSpan2`, `isChildSpanSuppressed`, `span.end`, `withSpan`.

SHA-256 do trecho: `794420bca6d1db0684c2ae765444e30f3f89161d2ebafe1ae64d770117ab9216`.

### evaluation:2375

Chamadas escritas diretamente neste corpo: `getSpan2`, `isChildSpanSuppressed`, `span.end`, `withSpan`.

SHA-256 do trecho: `794420bca6d1db0684c2ae765444e30f3f89161d2ebafe1ae64d770117ab9216`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
