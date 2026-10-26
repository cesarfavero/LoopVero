# `renderTurnParts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/compaction-segments.js` · [README do módulo](../../../../modules/agent-summarization/compaction-segments-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:617029-617058](../../../../../reference/runtime/host-main.cjs#L617029-L617058) | `FunctionDeclaration` | não | `turn, index, shape2` |
| [evaluation:285569-285598](../../../../../reference/runtime/sand-eval-runner.cjs#L285569-L285598) | `FunctionDeclaration` | não | `turn, index, shape2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617029-617058](../../../../../reference/runtime/host-main.cjs#L617029-L617058) | 7 | 2 | 0 | 1 | 0 | 0 |
| [evaluation:285569-285598](../../../../../reference/runtime/sand-eval-runner.cjs#L285569-L285598) | 7 | 2 | 0 | 1 | 0 | 0 |

### host:617029

Chamadas escritas diretamente neste corpo: `Object.entries`, `argValuePlain`, `parts.join`, `parts.push`, `shape2`.

SHA-256 do trecho: `31514d4e19013d4f5165270b4d55ab2c9212a5a218dccf7b49c0ff6e5ff35bf0`.

### evaluation:285569

Chamadas escritas diretamente neste corpo: `Object.entries`, `argValuePlain`, `parts.join`, `parts.push`, `shape2`.

SHA-256 do trecho: `31514d4e19013d4f5165270b4d55ab2c9212a5a218dccf7b49c0ff6e5ff35bf0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
