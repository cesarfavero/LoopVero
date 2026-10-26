# `parseCompactionSegmentIndex`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/compaction-segments.js` · [README do módulo](../../../../modules/agent-summarization/compaction-segments-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616882-616888](../../../../../reference/runtime/host-main.cjs#L616882-L616888) | `FunctionDeclaration` | não | `filename` |
| [evaluation:285422-285428](../../../../../reference/runtime/sand-eval-runner.cjs#L285422-L285428) | `FunctionDeclaration` | não | `filename` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616882-616888](../../../../../reference/runtime/host-main.cjs#L616882-L616888) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:285422-285428](../../../../../reference/runtime/sand-eval-runner.cjs#L285422-L285428) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:616882

Chamadas escritas diretamente neste corpo: `/^\+?\d+$/.test`, `Number`, `filename.endsWith`, `filename.slice`, `filename.startsWith`.

SHA-256 do trecho: `b06398ac93da2e5fbf595d72b649a25c284106ef2d1744e63b2c8e3af9d29ba5`.

### evaluation:285422

Chamadas escritas diretamente neste corpo: `/^\+?\d+$/.test`, `Number`, `filename.endsWith`, `filename.slice`, `filename.startsWith`.

SHA-256 do trecho: `b06398ac93da2e5fbf595d72b649a25c284106ef2d1744e63b2c8e3af9d29ba5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
