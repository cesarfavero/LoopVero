# `diffPromptPrefixTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-prefix-observation.ts` · [README do módulo](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:546303-546324](../../../../../../reference/runtime/sand-eval-runner.cjs#L546303-L546324) | `FunctionDeclaration` | não | `previous, current2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546303-546324](../../../../../../reference/runtime/sand-eval-runner.cjs#L546303-L546324) | 6 | 2 | 0 | 2 | 0 | 0 |

### evaluation:546303

Chamadas escritas diretamente neste corpo: `changed.push`, `new Map`, `new Set`, `previous.tools.every`, `previous.tools.map`, `previousByName.get`, `seen.add`, `seen.has`.

SHA-256 do trecho: `ffb7d9e15cca2b8d9909d14d54571a7693fcfa6574aa1f46d4c56e0e23e85f16`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
