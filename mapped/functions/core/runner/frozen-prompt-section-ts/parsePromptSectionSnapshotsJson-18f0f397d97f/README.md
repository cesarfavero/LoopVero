# `parsePromptSectionSnapshotsJson`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/frozen-prompt-section.ts` · [README do módulo](../../../../../modules/core/runner/frozen-prompt-section-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:717085-717094](../../../../../../reference/runtime/host-main.cjs#L717085-L717094) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717085-717094](../../../../../../reference/runtime/host-main.cjs#L717085-L717094) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:717085

Chamadas escritas diretamente neste corpo: `JSON.parse`, `parsePromptSectionSnapshots`.

Alvos de atribuição ou incremento: `parsed2`.

SHA-256 do trecho: `ee8399a8e69951521eb4cd9af99d7b3eb2d5549d0fbf23d11ef325853d75727b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
