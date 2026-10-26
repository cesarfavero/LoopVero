# `createSpan`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/otel.js` · [README do módulo](../../../../modules/context/otel-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225854-225860](../../../../../reference/runtime/host-main.cjs#L225854-L225860) | `FunctionDeclaration` | não | `ctx, options2` |
| [evaluation:2368-2374](../../../../../reference/runtime/sand-eval-runner.cjs#L2368-L2374) | `FunctionDeclaration` | não | `ctx, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225854-225860](../../../../../reference/runtime/host-main.cjs#L225854-L225860) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:2368-2374](../../../../../reference/runtime/sand-eval-runner.cjs#L2368-L2374) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225854

Chamadas escritas diretamente neste corpo: `getSpan2`, `isChildSpanSuppressed`, `new DisposableSpan`, `withSpan`.

SHA-256 do trecho: `088ebbf30d27fc38b8e5bfc5fb8904beeada8bb1ba8247789ef9782f4ed8c9d6`.

### evaluation:2368

Chamadas escritas diretamente neste corpo: `getSpan2`, `isChildSpanSuppressed`, `new DisposableSpan`, `withSpan`.

SHA-256 do trecho: `088ebbf30d27fc38b8e5bfc5fb8904beeada8bb1ba8247789ef9782f4ed8c9d6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
