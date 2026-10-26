# `isRetryableProviderError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/transient-stream-error.ts` · [README do módulo](../../../../../modules/core/runner/transient-stream-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736258-736266](../../../../../../reference/runtime/host-main.cjs#L736258-L736266) | `FunctionDeclaration` | não | `error64` |
| [evaluation:589950-589958](../../../../../../reference/runtime/sand-eval-runner.cjs#L589950-L589958) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736258-736266](../../../../../../reference/runtime/host-main.cjs#L736258-L736266) | 6 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:589950-589958](../../../../../../reference/runtime/sand-eval-runner.cjs#L589950-L589958) | 6 | 0 | 0 | 7 | 0 | 0 |

### host:736258

Chamadas escritas diretamente neste corpo: `classifyError2`, `classifyInferenceHookTurnFailure`, `hasWrappedHardTerminal`, `isContextOverflowDeadEnd`, `isConversationTooLargeRefusal`, `isProviderContentPolicyBlock`, `new Set`.

SHA-256 do trecho: `bbc7f71b22f07dd61a7a64634b30250bf5a1ac983ec4531fabd0b44abf8fa90a`.

### evaluation:589950

Chamadas escritas diretamente neste corpo: `classifyError2`, `classifyInferenceHookTurnFailure`, `hasWrappedHardTerminal`, `isContextOverflowDeadEnd`, `isConversationTooLargeRefusal`, `isProviderContentPolicyBlock`, `new Set`.

SHA-256 do trecho: `8e60db78a98b289d0d2c4a86b97c62151c9926f3735cbc28bf939e0a6ffbee57`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
