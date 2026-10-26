# `clampPositiveInt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/ports/agent-activity.ts` · [README do módulo](../../../../../modules/core/ports/agent-activity-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765358-765361](../../../../../../reference/runtime/host-main.cjs#L765358-L765361) | `FunctionDeclaration` | não | `value, fallback3, cap` |
| [evaluation:558725-558728](../../../../../../reference/runtime/sand-eval-runner.cjs#L558725-L558728) | `FunctionDeclaration` | não | `value, fallback2, cap` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765358-765361](../../../../../../reference/runtime/host-main.cjs#L765358-L765361) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:558725-558728](../../../../../../reference/runtime/sand-eval-runner.cjs#L558725-L558728) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:765358

Chamadas escritas diretamente neste corpo: `Math.floor`, `Math.min`, `Number.isFinite`.

SHA-256 do trecho: `5c834a0a39c8d2cbd3e6e33f6ec5a14474d563ded37eb832c4febcea331b0848`.

### evaluation:558725

Chamadas escritas diretamente neste corpo: `Math.floor`, `Math.min`, `Number.isFinite`.

SHA-256 do trecho: `c20c23bc9944a4c32f527a8c0292d33444aa616dab857fd8f3ba2c96f3260939`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
