# `diffPromptPrefix`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-prefix-observation.ts` · [README do módulo](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:546269-546293](../../../../../../reference/runtime/sand-eval-runner.cjs#L546269-L546293) | `FunctionDeclaration` | não | `previous, current2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546269-546293](../../../../../../reference/runtime/sand-eval-runner.cjs#L546269-L546293) | 6 | 2 | 0 | 1 | 0 | 0 |

### evaluation:546269

Chamadas escritas diretamente neste corpo: `changed.push`, `new Map`, `new Set`, `previous.sections.map`, `previousByName.get`, `seen.add`, `seen.has`.

Alvos de atribuição ou incremento: `namedChange`.

SHA-256 do trecho: `d1b379d7147c4fedbb31137c1cf27074f055c48ea4cefa1d3254eb669691654e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
