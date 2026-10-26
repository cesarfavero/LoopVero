# `shouldUseSandSelfSummary`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/conversation-state.ts` · [README do módulo](../../../../../modules/core/runner/conversation-state-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:529682-529687](../../../../../../reference/runtime/sand-eval-runner.cjs#L529682-L529687) | `FunctionDeclaration` | não | `modelId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529682-529687](../../../../../../reference/runtime/sand-eval-runner.cjs#L529682-L529687) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:529682

Chamadas escritas diretamente neste corpo: `DEPRECATED_CURSOR_GROK_4_5_MODELS.has`, `model.split`, `model.startsWith`, `modelId.split`, `xaiExternalProviderModel.startsWith`.

SHA-256 do trecho: `4d302573de1ae18342fcf11619dd0488b3c3f5b2e8c848e88bda996afa7e7b34`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
