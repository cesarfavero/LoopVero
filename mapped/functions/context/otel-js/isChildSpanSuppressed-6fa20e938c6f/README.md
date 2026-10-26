# `isChildSpanSuppressed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/otel.js` · [README do módulo](../../../../modules/context/otel-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225782-225787](../../../../../reference/runtime/host-main.cjs#L225782-L225787) | `FunctionDeclaration` | não | `ctx, parentSpan` |
| [evaluation:2270-2275](../../../../../reference/runtime/sand-eval-runner.cjs#L2270-L2275) | `FunctionDeclaration` | não | `ctx, parentSpan` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225782-225787](../../../../../reference/runtime/host-main.cjs#L225782-L225787) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:2270-2275](../../../../../reference/runtime/sand-eval-runner.cjs#L2270-L2275) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:225782

Chamadas escritas diretamente neste corpo: `ctx.get`, `isChildSpanNameSuppressed`, `resolveSpanName`.

SHA-256 do trecho: `73b4ddff067c133a7eca8377d05138424ecd3032f23a0e0eb5374c8d21345761`.

### evaluation:2270

Chamadas escritas diretamente neste corpo: `ctx.get`, `isChildSpanNameSuppressed`, `resolveSpanName`.

SHA-256 do trecho: `73b4ddff067c133a7eca8377d05138424ecd3032f23a0e0eb5374c8d21345761`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
