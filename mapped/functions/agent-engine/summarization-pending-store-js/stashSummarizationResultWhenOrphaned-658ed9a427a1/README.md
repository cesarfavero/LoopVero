# `stashSummarizationResultWhenOrphaned`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-engine/summarization-pending-store.js` · [README do módulo](../../../../modules/agent-engine/summarization-pending-store-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:647910-647987](../../../../../reference/runtime/host-main.cjs#L647910-L647987) | `FunctionDeclaration` | não | `args` |
| [evaluation:439567-439644](../../../../../reference/runtime/sand-eval-runner.cjs#L439567-L439644) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647910-647987](../../../../../reference/runtime/host-main.cjs#L647910-L647987) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:439567-439644](../../../../../reference/runtime/sand-eval-runner.cjs#L439567-L439644) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:647910

Chamadas escritas diretamente neste corpo: `.catch`, `Date.now`, `args.summarizationPromise.then`.

Alvos de atribuição ou incremento: `args.cancellationToken.onCancelled`.

SHA-256 do trecho: `f1e0946a39668dbe5d456f2d9f30fbaa09e5a429320e95fc66a9fe28f2bc81a3`.

### evaluation:439567

Chamadas escritas diretamente neste corpo: `.catch`, `Date.now`, `args.summarizationPromise.then`.

Alvos de atribuição ou incremento: `args.cancellationToken.onCancelled`.

SHA-256 do trecho: `4c7f26b7b37950ba810c88a856b0622f23f01cf9637a94799da3fabffea82eb2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
