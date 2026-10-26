# `warnIfPreservedTailShapeInvalid`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/pipeline.js` · [README do módulo](../../../../modules/agent-summarization/pipeline-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620451-620474](../../../../../reference/runtime/host-main.cjs#L620451-L620474) | `FunctionDeclaration` | não | `ctx, partitioned, options2` |
| [evaluation:304805-304828](../../../../../reference/runtime/sand-eval-runner.cjs#L304805-L304828) | `FunctionDeclaration` | não | `ctx, partitioned, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620451-620474](../../../../../reference/runtime/host-main.cjs#L620451-L620474) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:304805-304828](../../../../../reference/runtime/sand-eval-runner.cjs#L304805-L304828) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:620451

Chamadas escritas diretamente neste corpo: `logger37.warn`, `tail.findIndex`, `tail.map`.

SHA-256 do trecho: `661507963fa6850e4c81e4bb20f20881c85bca9cd452ab523d304ce902b0c7b5`.

### evaluation:304805

Chamadas escritas diretamente neste corpo: `logger12.warn`, `tail.findIndex`, `tail.map`.

SHA-256 do trecho: `bc8a9084596bbbd77384086d7d2213f70153c89639ed6a16438c9e1f43a15a4d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
