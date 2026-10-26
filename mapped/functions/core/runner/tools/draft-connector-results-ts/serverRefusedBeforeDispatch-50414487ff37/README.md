# `serverRefusedBeforeDispatch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-connector-results.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732981-732990](../../../../../../../reference/runtime/host-main.cjs#L732981-L732990) | `FunctionDeclaration` | não | `error64` |
| [evaluation:540503-540512](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540503-L540512) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732981-732990](../../../../../../../reference/runtime/host-main.cjs#L732981-L732990) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:540503-540512](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540503-L540512) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:732981

Chamadas escritas diretamente neste corpo: `answer.indexOf`, `answer.slice`, `error64.error.indexOf`, `error64.error.slice`, `parseDraftConnectorRecord`.

SHA-256 do trecho: `c665435c9e12f048ca33fafa3134ae388ef2318f997f24cd6be306aa87e898ec`.

### evaluation:540503

Chamadas escritas diretamente neste corpo: `answer.indexOf`, `answer.slice`, `error63.error.indexOf`, `error63.error.slice`, `parseDraftConnectorRecord`.

SHA-256 do trecho: `d4e6643039f5dd64c1a9a844a8f71ec6245ed5dd2a96ef31f45638a9547d208e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
