# `scanResult`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/library-docs/mcp-doc-touches.ts` · [README do módulo](../../../../../../modules/core/runner/library-docs/mcp-doc-touches-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:574019-574044](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574019-L574044) | `FunctionDeclaration` | não | `result, resolver` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:574019-574044](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574019-L574044) | 5 | 1 | 0 | 2 | 0 | 0 |

### evaluation:574019

Chamadas escritas diretamente neste corpo: `emptyScan`, `item.content.value.text.slice`, `merge4`, `parseJson`, `refsInText`, `scan2.textRefs.push`, `scanJson`, `structured.toBinary`, `structured.toJson`.

Alvos de atribuição ou incremento: `budget`.

SHA-256 do trecho: `204785d93796c248dd540d6deeef447c0c46d5dd83c0f164b98f5c0b53685b9e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
