# `buildSandBaseSystemPromptSections`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:533069-533093](../../../../../../reference/runtime/sand-eval-runner.cjs#L533069-L533093) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533069-533093](../../../../../../reference/runtime/sand-eval-runner.cjs#L533069-L533093) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:533069

Chamadas escritas diretamente neste corpo: `MainLoopVoicePrompt.section`, `agentEmailSections`, `appUiSection`, `approvalSection`, `autonomySection`, `codeChangesBody`, `communicationStyleSection`, `cursorOriginSection`, `filesAndVisualsSection`, `neverFabricateSection`, `reachingServicesSection`, `securitySection`, `turnSection`, `unaskedSendSection`, `whereYouWorkSection`, `writingOnBehalfSection`.

SHA-256 do trecho: `d5b5b920b1cf1371cd5ac4a0acc58ae3df9f443d150de91082176456aee6064e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
