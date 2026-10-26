# `renderTurnSignature`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/compaction-segments.js` · [README do módulo](../../../../modules/agent-summarization/compaction-segments-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:617059-617082](../../../../../reference/runtime/host-main.cjs#L617059-L617082) | `FunctionDeclaration` | não | `turn, index` |
| [evaluation:285599-285622](../../../../../reference/runtime/sand-eval-runner.cjs#L285599-L285622) | `FunctionDeclaration` | não | `turn, index` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617059-617082](../../../../../reference/runtime/host-main.cjs#L617059-L617082) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:285599-285622](../../../../../reference/runtime/sand-eval-runner.cjs#L285599-L285622) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:617059

Chamadas escritas diretamente neste corpo: `signatures.join`, `turn.toolCalls.map`.

SHA-256 do trecho: `4106e8e9be12c86cd16fdc41350b2270a3eb6a578167858218a7e15b19157599`.

### evaluation:285599

Chamadas escritas diretamente neste corpo: `signatures.join`, `turn.toolCalls.map`.

SHA-256 do trecho: `4106e8e9be12c86cd16fdc41350b2270a3eb6a578167858218a7e15b19157599`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
