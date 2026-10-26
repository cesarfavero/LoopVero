# `loadActiveSubscriptionsSummaryBlock`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-engine/summarization-orchestrator.js` · [README do módulo](../../../../modules/agent-engine/summarization-orchestrator-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:649488-649496](../../../../../reference/runtime/host-main.cjs#L649488-L649496) | `FunctionDeclaration` | sim | `ctx, load2` |
| [evaluation:441141-441149](../../../../../reference/runtime/sand-eval-runner.cjs#L441141-L441149) | `FunctionDeclaration` | sim | `ctx, load2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649488-649496](../../../../../reference/runtime/host-main.cjs#L649488-L649496) | 2 | 0 | 1 | 2 | 0 | 1 |
| [evaluation:441141-441149](../../../../../reference/runtime/sand-eval-runner.cjs#L441141-L441149) | 2 | 0 | 1 | 2 | 0 | 1 |

### host:649488

Chamadas escritas diretamente neste corpo: `String`, `load2`, `logger62.warn`, `withTimeout`.

SHA-256 do trecho: `fe41b6edf6be5124912281dac35dea2da5e8f2c1ae8f35946da18a3b322dcb2c`.

### evaluation:441141

Chamadas escritas diretamente neste corpo: `String`, `load2`, `logger39.warn`, `withTimeout`.

SHA-256 do trecho: `17dcfe69117388945f03196f5931c945599e53396c9d4ac02448cf793f8909e4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
