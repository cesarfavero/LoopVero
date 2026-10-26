# `getAgentSingleMessageLoopInfo`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/agent-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:624656-624669](../../../../../../reference/runtime/host-main.cjs#L624656-L624669) | `FunctionDeclaration` | não | `detector, channel` |
| [evaluation:311023-311036](../../../../../../reference/runtime/sand-eval-runner.cjs#L311023-L311036) | `FunctionDeclaration` | não | `detector, channel` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624656-624669](../../../../../../reference/runtime/host-main.cjs#L624656-L624669) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:311023-311036](../../../../../../reference/runtime/sand-eval-runner.cjs#L311023-L311036) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:624656

Chamadas escritas diretamente neste corpo: `detector.getMultiLineLoopInfo`, `detector.getSingleLineLoopInfo`.

SHA-256 do trecho: `fac9377945d22e670315d2b4af9a5d8b8e1d81240643ea9b942efdbde570e0aa`.

### evaluation:311023

Chamadas escritas diretamente neste corpo: `detector.getMultiLineLoopInfo`, `detector.getSingleLineLoopInfo`.

SHA-256 do trecho: `fac9377945d22e670315d2b4af9a5d8b8e1d81240643ea9b942efdbde570e0aa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
