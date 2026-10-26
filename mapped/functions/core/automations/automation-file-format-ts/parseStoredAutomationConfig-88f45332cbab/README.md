# `parseStoredAutomationConfig`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-file-format.ts` · [README do módulo](../../../../../modules/core/automations/automation-file-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716497-716531](../../../../../../reference/runtime/host-main.cjs#L716497-L716531) | `FunctionDeclaration` | não | `raw, fallbackCreatedAt` |
| [evaluation:627211-627245](../../../../../../reference/runtime/sand-eval-runner.cjs#L627211-L627245) | `FunctionDeclaration` | não | `raw, fallbackCreatedAt` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716497-716531](../../../../../../reference/runtime/host-main.cjs#L716497-L716531) | 8 | 0 | 0 | 4 | 0 | 1 |
| [evaluation:627211-627245](../../../../../../reference/runtime/sand-eval-runner.cjs#L627211-L627245) | 8 | 0 | 0 | 4 | 0 | 1 |

### host:716497

Chamadas escritas diretamente neste corpo: `JSON.parse`, `Math.min`, `Number.isFinite`, `clampAutomationName`, `normalizeAutomationPrompt`, `parseAutomationNoticeIds`, `parseStoredConfigTrigger`, `parseStoredProvenance`, `parseStoredSessionId`, `parseTriggerPresentation`.

Alvos de atribuição ou incremento: `json3`.

SHA-256 do trecho: `8bce0c6b25183218ff0dfc0e3848bd31c0830d965233362f676a0ca5aa9d61d4`.

### evaluation:627211

Chamadas escritas diretamente neste corpo: `JSON.parse`, `Math.min`, `Number.isFinite`, `clampAutomationName`, `normalizeAutomationPrompt`, `parseAutomationNoticeIds`, `parseStoredConfigTrigger`, `parseStoredProvenance`, `parseStoredSessionId`, `parseTriggerPresentation`.

Alvos de atribuição ou incremento: `json3`.

SHA-256 do trecho: `144405cfee8b4d1d0e630750a2820c6e494bcc8546d0c5f395fafa9aaef633ec`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
