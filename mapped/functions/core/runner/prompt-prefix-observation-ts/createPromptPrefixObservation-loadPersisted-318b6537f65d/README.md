# `createPromptPrefixObservation/loadPersisted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-prefix-observation.ts` · [README do módulo](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:546620-546625](../../../../../../reference/runtime/sand-eval-runner.cjs#L546620-L546625) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546620-546625](../../../../../../reference/runtime/sand-eval-runner.cjs#L546620-L546625) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:546620

Chamadas escritas diretamente neste corpo: `deps.snapshots.getPromptPrefixSnapshot`.

Alvos de atribuição ou incremento: `loadedPersisted`, `previousMain`.

SHA-256 do trecho: `ef76f9c05be6c938f922ea6bd501b13c570c314136d3cbb1c21aa087f0b38407`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
