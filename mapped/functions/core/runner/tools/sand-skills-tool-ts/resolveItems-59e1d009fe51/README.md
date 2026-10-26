# `resolveItems`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `core/runner/tools/sand-skills-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-skills-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:535992-536013](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535992-L536013) | `FunctionDeclaration` | não | `items, library, taken` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535992-536013](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535992-L536013) | 5 | 1 | 0 | 3 | 0 | 0 |

### evaluation:535992

Chamadas escritas diretamente neste corpo: `drafts.push`, `library.find`, `slugOf`, `taken.add`, `taken.has`.

SHA-256 do trecho: `501339bdbe981b68abf2f9978a5f11d84d41706e2edf8c401ddee825cfd3f3be`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
