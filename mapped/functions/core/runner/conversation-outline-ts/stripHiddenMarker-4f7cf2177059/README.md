# `stripHiddenMarker`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/conversation-outline.ts` · [README do módulo](../../../../../modules/core/runner/conversation-outline-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:719694-719696](../../../../../../reference/runtime/host-main.cjs#L719694-L719696) | `FunctionDeclaration` | não | `text3` |
| [evaluation:526170-526172](../../../../../../reference/runtime/sand-eval-runner.cjs#L526170-L526172) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719694-719696](../../../../../../reference/runtime/host-main.cjs#L719694-L719696) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526170-526172](../../../../../../reference/runtime/sand-eval-runner.cjs#L526170-L526172) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:719694

Chamadas escritas diretamente neste corpo: `stripLeadingHiddenPromptMarker`, `stripLeadingTrustedAutomationPromptMarker`.

SHA-256 do trecho: `798a3db49b4d1dc530a843c0222b7c68cef6455d3d5d977d1514a80a44e17a55`.

### evaluation:526170

Chamadas escritas diretamente neste corpo: `stripLeadingHiddenPromptMarker`, `stripLeadingTrustedAutomationPromptMarker`.

SHA-256 do trecho: `798a3db49b4d1dc530a843c0222b7c68cef6455d3d5d977d1514a80a44e17a55`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
