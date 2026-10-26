# `replaceEnv`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-queries.js` · [README do módulo](../../../../modules/agent-core/interaction-queries-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475694-475702](../../../../../reference/runtime/host-main.cjs#L475694-L475702) | `FunctionExpression` | não | `queryId, result` |
| [evaluation:254918-254926](../../../../../reference/runtime/sand-eval-runner.cjs#L254918-L254926) | `FunctionExpression` | não | `queryId, result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475694-475702](../../../../../reference/runtime/host-main.cjs#L475694-L475702) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254918-254926](../../../../../reference/runtime/sand-eval-runner.cjs#L254918-L254926) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475694

Chamadas escritas diretamente neste corpo: `new InteractionResponse`.

SHA-256 do trecho: `de17d1486a3a8ebb47ab8addcf517221f075c341c52d2d2dd7797e9f0b34c367`.

### evaluation:254918

Chamadas escritas diretamente neste corpo: `new InteractionResponse`.

SHA-256 do trecho: `de17d1486a3a8ebb47ab8addcf517221f075c341c52d2d2dd7797e9f0b34c367`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
