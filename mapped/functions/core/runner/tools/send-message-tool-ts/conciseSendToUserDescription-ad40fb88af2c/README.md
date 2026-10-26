# `conciseSendToUserDescription`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761180-761190](../../../../../../../reference/runtime/host-main.cjs#L761180-L761190) | `FunctionDeclaration` | não | `inputs` |
| [evaluation:551995-552005](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551995-L552005) | `FunctionDeclaration` | não | `inputs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761180-761190](../../../../../../../reference/runtime/host-main.cjs#L761180-L761190) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:551995-552005](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551995-L552005) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:761180

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `gatedInAppLinksGuidance`, `headings.widget.map`.

SHA-256 do trecho: `094e76802bb39d0bf57408919b842e2c9e031769d6abeeb97717f97ea9d3a32f`.

### evaluation:551995

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `gatedInAppLinksGuidance`, `headings.widget.map`.

SHA-256 do trecho: `094e76802bb39d0bf57408919b842e2c9e031769d6abeeb97717f97ea9d3a32f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
