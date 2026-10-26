# `renderSandSpokenMessages`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/runner/transcript-trace.ts` · [README do módulo](../../../../../modules/core/runner/transcript-trace-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765738-765758](../../../../../../reference/runtime/host-main.cjs#L765738-L765758) | `FunctionDeclaration` | não | `messages2` |
| [evaluation:559103-559123](../../../../../../reference/runtime/sand-eval-runner.cjs#L559103-L559123) | `FunctionDeclaration` | não | `messages` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765738-765758](../../../../../../reference/runtime/host-main.cjs#L765738-L765758) | 3 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:559103-559123](../../../../../../reference/runtime/sand-eval-runner.cjs#L559103-L559123) | 3 | 1 | 0 | 2 | 0 | 0 |

### host:765738

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `boundedText`, `lines2.unshift`.

Alvos de atribuição ou incremento: `bytes`, `firstPosition`, `index`.

SHA-256 do trecho: `37722b15930a13e7173b92e7747d9c8b5b923d3abc9e8e3b39e3c9d58ae9d760`.

### evaluation:559103

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `boundedText`, `lines2.unshift`.

Alvos de atribuição ou incremento: `bytes`, `firstPosition`, `index`.

SHA-256 do trecho: `bdabde3490f7450ca00e72c0f43a20ddb6c3cd37d1219290da9de1c4a84ab8f9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
