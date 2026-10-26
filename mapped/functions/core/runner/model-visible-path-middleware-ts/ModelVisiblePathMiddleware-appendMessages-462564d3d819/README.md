# `ModelVisiblePathMiddleware.appendMessages`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/model-visible-path-middleware.ts` · [README do módulo](../../../../../modules/core/runner/model-visible-path-middleware-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:586834-586839](../../../../../../reference/runtime/sand-eval-runner.cjs#L586834-L586839) | `method` | não | `messages` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586834-586839](../../../../../../reference/runtime/sand-eval-runner.cjs#L586834-L586839) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:586834

Chamadas escritas diretamente neste corpo: `Array.isArray`, `messages.map`, `this.innerExecutor.appendMessages`, `toModelVisibleMessage`.

SHA-256 do trecho: `e083e6934a1d93c99c8193b8645a708ee0c5f781f3d4576f14877afcaef5efcd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
