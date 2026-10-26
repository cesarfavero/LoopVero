# `../packages/context/dist/index.js`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/index.js` · [README do módulo](../../../../modules/context/index-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225899-225906](../../../../../reference/runtime/host-main.cjs#L225899-L225906) | `FunctionExpression` | não | `(nenhum)` |
| [evaluation:2413-2420](../../../../../reference/runtime/sand-eval-runner.cjs#L2413-L2420) | `FunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225899-225906](../../../../../reference/runtime/host-main.cjs#L225899-L225906) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:2413-2420](../../../../../reference/runtime/sand-eval-runner.cjs#L2413-L2420) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:225899

Chamadas escritas diretamente neste corpo: `init_abort_reason`, `init_browser_bridge`, `init_core3`, `init_logger`, `init_otel`.

SHA-256 do trecho: `5c3a0fc8348e31ec49f8c7223846e4e215f1b099452b79bb1ff4fab33e899d78`.

### evaluation:2413

Chamadas escritas diretamente neste corpo: `init_abort_reason`, `init_browser_bridge`, `init_core`, `init_logger`, `init_otel`.

SHA-256 do trecho: `3f22ee23ca71fd5e5ed7d0afa7978940689baa4a5f981d6b5592eb1cd065bd38`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
