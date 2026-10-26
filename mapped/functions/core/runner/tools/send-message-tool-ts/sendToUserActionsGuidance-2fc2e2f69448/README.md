# `sendToUserActionsGuidance`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761175-761179](../../../../../../../reference/runtime/host-main.cjs#L761175-L761179) | `FunctionDeclaration` | não | `deps` |
| [evaluation:551990-551994](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551990-L551994) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761175-761179](../../../../../../../reference/runtime/host-main.cjs#L761175-L761179) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:551990-551994](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551990-L551994) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:761175

Chamadas escritas diretamente neste corpo: `inAppActionsGuidance`, `sendToUserActEnabled`, `sendToUserLinkVisibility`.

SHA-256 do trecho: `3c16452d2ddd1006b390d6628d4ecea99cf6737ea08f5d6e1412c4b632306de3`.

### evaluation:551990

Chamadas escritas diretamente neste corpo: `inAppActionsGuidance`, `sendToUserActEnabled`, `sendToUserLinkVisibility`.

SHA-256 do trecho: `3c16452d2ddd1006b390d6628d4ecea99cf6737ea08f5d6e1412c4b632306de3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
