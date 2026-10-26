# `toCompactionSegmentTurns`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/compaction-segments.js` · [README do módulo](../../../../modules/agent-summarization/compaction-segments-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616806-616828](../../../../../reference/runtime/host-main.cjs#L616806-L616828) | `FunctionDeclaration` | não | `messages2` |
| [evaluation:285346-285368](../../../../../reference/runtime/sand-eval-runner.cjs#L285346-L285368) | `FunctionDeclaration` | não | `messages` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616806-616828](../../../../../reference/runtime/host-main.cjs#L616806-L616828) | 4 | 2 | 0 | 1 | 0 | 0 |
| [evaluation:285346-285368](../../../../../reference/runtime/sand-eval-runner.cjs#L285346-L285368) | 4 | 2 | 0 | 1 | 0 | 0 |

### host:616806

Chamadas escritas diretamente neste corpo: `assistantTurn`, `fromRedactedCoreMessage`, `toolResultText`, `turns.push`, `userText`.

SHA-256 do trecho: `5a367565f5891feb9ec6fc631488b972ebd01d753dfb715a93dc5669933540b8`.

### evaluation:285346

Chamadas escritas diretamente neste corpo: `assistantTurn`, `fromRedactedCoreMessage`, `toolResultText`, `turns.push`, `userText`.

SHA-256 do trecho: `bd2a3c1f6926914321ac8506315f2cf54fc2586d8371f34b876897b2253fda83`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
