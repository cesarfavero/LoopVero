# `createMessageKey`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/agent-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:310884-310901](../../../../../../reference/runtime/sand-eval-runner.cjs#L310884-L310901) | `FunctionDeclaration` | não | `message, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:310884-310901](../../../../../../reference/runtime/sand-eval-runner.cjs#L310884-L310901) | 5 | 0 | 0 | 3 | 0 | 0 |

### evaluation:310884

Chamadas escritas diretamente neste corpo: `.join`, `.sort`, `message.toolCalls.map`, `normalizeText`.

Alvos de atribuição ou incremento: `toolInfo`.

SHA-256 do trecho: `d8f911ee643a223ed27ba43c099cac1c49e6c73368a40972cd1a5f3bd9d434c2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
