# `isSingleMessageLoopKind`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/agent-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:624609-624611](../../../../../../reference/runtime/host-main.cjs#L624609-L624611) | `FunctionDeclaration` | não | `kind` |
| [evaluation:310741-310743](../../../../../../reference/runtime/sand-eval-runner.cjs#L310741-L310743) | `FunctionDeclaration` | não | `kind` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624609-624611](../../../../../../reference/runtime/host-main.cjs#L624609-L624611) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:310741-310743](../../../../../../reference/runtime/sand-eval-runner.cjs#L310741-L310743) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:624609

Chamadas escritas diretamente neste corpo: `SINGLE_MESSAGE_LOOP_KINDS.has`.

SHA-256 do trecho: `d8e1ef340d9bb2c7a7c4f3967493569913a5047b6924ade9cbecc080f25d8ba0`.

### evaluation:310741

Chamadas escritas diretamente neste corpo: `SINGLE_MESSAGE_LOOP_KINDS.has`.

SHA-256 do trecho: `d8e1ef340d9bb2c7a7c4f3967493569913a5047b6924ade9cbecc080f25d8ba0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
