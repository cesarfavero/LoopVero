# `<callback>/<callback>/next`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-engine/summarization-orchestrator.js` · [README do módulo](../../../../modules/agent-engine/summarization-orchestrator-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:649462-649479](../../../../../reference/runtime/host-main.cjs#L649462-L649479) | `FunctionDeclaration` | não | `(nenhum)` |
| [evaluation:441115-441132](../../../../../reference/runtime/sand-eval-runner.cjs#L441115-L441132) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649462-649479](../../../../../reference/runtime/host-main.cjs#L649462-L649479) | 6 | 1 | 0 | 3 | 1 | 1 |
| [evaluation:441115-441132](../../../../../reference/runtime/sand-eval-runner.cjs#L441115-L441132) | 6 | 1 | 0 | 3 | 1 | 1 |

### host:649462

Chamadas escritas diretamente neste corpo: `.then`, `Promise.reject`, `Promise.resolve`, `env.stack.pop`, `env.stack.push`, `fail3`, `r.dispose.call`.

Alvos de atribuição ou incremento: `r`, `s3`.

Alvos de lançamento explícito: `env.error`.

SHA-256 do trecho: `0aa52063dcaaaa4ca915b846816b67b1e712d3bd40425d58c4dde0448f23023a`.

### evaluation:441115

Chamadas escritas diretamente neste corpo: `.then`, `Promise.reject`, `Promise.resolve`, `env.stack.pop`, `env.stack.push`, `fail2`, `r.dispose.call`.

Alvos de atribuição ou incremento: `r`, `s3`.

Alvos de lançamento explícito: `env.error`.

SHA-256 do trecho: `48501e57410a98813e5852f53296198072d4a879e20431f0fc1ba48a941aa874`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
